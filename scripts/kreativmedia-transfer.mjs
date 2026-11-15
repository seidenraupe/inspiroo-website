import { Client as FtpClient } from "basic-ftp";
import SftpClient from "ssh2-sftp-client";

import { requireKreativmediaEnv } from "./kreativmedia-env.mjs";

function protocol(env) {
  const raw = (env.KREATIVMEDIA_PROTOCOL || "auto").toLowerCase();
  if (raw === "sftp" || raw === "ftps") return raw;
  return "auto";
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
  const client = new FtpClient(25_000);
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
    if (attempt < 3 && message.includes("ECONNRESET")) {
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
    const shouldFallback =
      message.includes("authentication methods failed") ||
      message.includes("establishing SFTP session") ||
      message.includes("exit code 1");
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

  async function uploadFtps() {
    const client = new FtpClient(60_000);
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

  if (chosen === "ftps") return uploadFtps();
  if (chosen === "sftp") return uploadSftp();

  try {
    return await uploadSftp();
  } catch (sftpError) {
    const message =
      sftpError instanceof Error ? sftpError.message : String(sftpError);
    const shouldFallback =
      message.includes("authentication methods failed") ||
      message.includes("establishing SFTP session") ||
      message.includes("exit code 1");
    if (!shouldFallback) throw sftpError;
    return { ...(await uploadFtps()), fallbackFromSftp: message };
  }
}