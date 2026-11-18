import { Client as FtpClient } from "basic-ftp";
import SftpClient from "ssh2-sftp-client";

import { requireKreativmediaEnv } from "./kreativmedia-env.mjs";

/** Plesk liefert oft private PASV-IPs → 425 beim Upload; Control-Host erzwingen. */
const FTPS_CLIENT_OPTIONS = { allowSeparateTransferHost: false };

function isFtpsDataChannelError(message) {
  const m = message.toLowerCase();
  return (
    m.includes("425") ||
    m.includes("426") ||
    m.includes("data connection") ||
    m.includes("operation not permitted") ||
    m.includes("permission denied") ||
    m.includes("econnreset") ||
    m.includes("etimedout")
  );
}

function protocol(env) {
  const raw = (env.KREATIVMEDIA_PROTOCOL || "auto").toLowerCase();
  if (raw === "sftp" || raw === "ftps") return raw;
  return "auto";
}

/** SFTP-Port 2121 oft von CI/Cloud blockiert — dann FTPS 21 nutzen. */
function shouldFallbackFromSftp(message) {
  const m = message.toLowerCase();
  return (
    m.includes("authentication methods failed") ||
    m.includes("establishing sftp session") ||
    m.includes("exit code 1") ||
    m.includes("connection lost before handshake") ||
    m.includes("before handshake") ||
    m.includes("getconnection:")
  );
}

async function testSftp(env, port, remotePath) {
  const client = new SftpClient();
  try {
    await client.connect({
      host: env.KREATIVMEDIA_SFTP_HOST,
      port,
      username: env.KREATIVMEDIA_SFTP_USER,
      password: env.KREATIVMEDIA_SFTP_PASSWORD,
      readyTimeout: 20000,
    });
    const listing = await client.list(remotePath);
    return {
      mode: "sftp",
      host: env.KREATIVMEDIA_SFTP_HOST,
      port,
      remotePath,
      pwd: remotePath,
      entries: listing.length,
      names: listing.slice(0, 8).map((item) => item.name),
    };
  } finally {
    client.end();
  }
}

async function testFtps(env, port, remotePath, attempt = 1) {
  const client = new FtpClient(25_000, FTPS_CLIENT_OPTIONS);
  try {
    await client.access({
      host: env.KREATIVMEDIA_SFTP_HOST,
      port,
      user: env.KREATIVMEDIA_SFTP_USER,
      password: env.KREATIVMEDIA_SFTP_PASSWORD,
      secure: true,
      secureOptions: { rejectUnauthorized: false },
    });
    let pwd = await client.pwd();
    let effectivePath = remotePath || "/";
    if (effectivePath !== "/") {
      try {
        await client.cd(effectivePath);
        pwd = await client.pwd();
      } catch {
        await client.cd("/");
        pwd = await client.pwd();
        effectivePath = "/";
      }
    }
    const listing = await client.list();
    return {
      mode: "ftps",
      host: env.KREATIVMEDIA_SFTP_HOST,
      port,
      remotePath: effectivePath,
      pwd,
      entries: listing.length,
      names: listing.slice(0, 8).map((item) => item.name),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (attempt < 3 && isFtpsDataChannelError(message)) {
      await new Promise((r) => setTimeout(r, 1500 * attempt));
      return testFtps(env, port, remotePath, attempt + 1);
    }
    throw error;
  } finally {
    client.close();
  }
}

/** Verbindung testen (kein Upload). Auto: zuerst SFTP 2121, bei Session-Fehler FTPS 21. */
export async function testKreativmediaConnection(env) {
  const { port: sftpPort, remotePath } = requireKreativmediaEnv(env);
  const ftpsPort = Number(env.KREATIVMEDIA_FTPS_PORT || 21);
  const chosen = protocol(env);

  if (chosen === "ftps") {
    return testFtps(env, ftpsPort, remotePath);
  }

  if (chosen === "sftp") {
    return testSftp(env, sftpPort, remotePath);
  }

  try {
    return await testSftp(env, sftpPort, remotePath);
  } catch (sftpError) {
    const message =
      sftpError instanceof Error ? sftpError.message : String(sftpError);
    const shouldFallback = shouldFallbackFromSftp(message);
    if (!shouldFallback) throw sftpError;
    try {
      const result = await testFtps(env, ftpsPort, remotePath);
      return { ...result, fallbackFromSftp: message };
    } catch (ftpsError) {
      const ftpsMessage =
        ftpsError instanceof Error ? ftpsError.message : String(ftpsError);
      throw new Error(`SFTP: ${message} | FTPS: ${ftpsMessage}`);
    }
  }
}

export async function deployOutDirToKreativmedia(env, localDir) {
  const { port: sftpPort, remotePath } = requireKreativmediaEnv(env);
  const ftpsPort = Number(env.KREATIVMEDIA_FTPS_PORT || 21);
  const chosen = protocol(env);

  async function uploadFtps(attempt = 1) {
    const client = new FtpClient(120_000, FTPS_CLIENT_OPTIONS);
    try {
      await client.access({
        host: env.KREATIVMEDIA_SFTP_HOST,
        port: ftpsPort,
        user: env.KREATIVMEDIA_SFTP_USER,
        password: env.KREATIVMEDIA_SFTP_PASSWORD,
        secure: true,
        secureOptions: { rejectUnauthorized: false },
      });
      if (remotePath && remotePath !== "/") {
        await client.ensureDir(remotePath);
        await client.cd(remotePath);
      }
      await client.uploadFromDir(localDir);
      return {
        mode: "ftps",
        host: env.KREATIVMEDIA_SFTP_HOST,
        port: ftpsPort,
        remotePath,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (attempt < 3 && isFtpsDataChannelError(message)) {
        await new Promise((r) => setTimeout(r, 2000 * attempt));
        return uploadFtps(attempt + 1);
      }
      throw error;
    } finally {
      client.close();
    }
  }

  async function uploadSftp() {
    const client = new SftpClient();
    try {
      await client.connect({
        host: env.KREATIVMEDIA_SFTP_HOST,
        port: sftpPort,
        username: env.KREATIVMEDIA_SFTP_USER,
        password: env.KREATIVMEDIA_SFTP_PASSWORD,
        readyTimeout: 30_000,
      });
      const files = await client.uploadDir(localDir, remotePath, {
        useFastput: true,
      });
      return {
        mode: "sftp",
        host: env.KREATIVMEDIA_SFTP_HOST,
        port: sftpPort,
        remotePath,
        files,
      };
    } finally {
      client.end();
    }
  }

  async function uploadWithFtpsThenSftp() {
    try {
      return await uploadFtps();
    } catch (ftpsError) {
      const ftpsMessage =
        ftpsError instanceof Error ? ftpsError.message : String(ftpsError);
      if (!isFtpsDataChannelError(ftpsMessage)) throw ftpsError;
      try {
        return {
          ...(await uploadSftp()),
          fallbackFromFtps: ftpsMessage,
        };
      } catch (sftpError) {
        const sftpMessage =
          sftpError instanceof Error ? sftpError.message : String(sftpError);
        throw new Error(`FTPS: ${ftpsMessage} | SFTP: ${sftpMessage}`);
      }
    }
  }

  if (chosen === "ftps") return uploadWithFtpsThenSftp();
  if (chosen === "sftp") return uploadSftp();

  try {
    return await uploadSftp();
  } catch (sftpError) {
    const message =
      sftpError instanceof Error ? sftpError.message : String(sftpError);
    const shouldFallback = shouldFallbackFromSftp(message);
    if (!shouldFallback) throw sftpError;
    return { ...(await uploadFtps()), fallbackFromSftp: message };
  }
}