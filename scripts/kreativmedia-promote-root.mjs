import { Client as FtpClient } from "basic-ftp";
import SftpClient from "ssh2-sftp-client";

import {
  loadKreativmediaEnv,
  requireKreativmediaEnv,
} from "./kreativmedia-env.mjs";

const FTPS_CLIENT_OPTIONS = { allowSeparateTransferHost: false };

function parseArgs() {
  const args = { from: null, to: null, dryRun: false };
  for (const raw of process.argv.slice(2)) {
    if (raw === "--dry-run") args.dryRun = true;
    else if (raw.startsWith("--from=")) args.from = raw.slice(7);
    else if (raw.startsWith("--to=")) args.to = raw.slice(5);
  }
  return args;
}

function joinRemote(base, segment) {
  const b = base.replace(/\/+$/, "") || "";
  const s = segment.replace(/^\/+/, "");
  if (!b) return `/${s}`;
  if (!s) return b;
  return `${b}/${s}`;
}

async function pathExistsSftp(sftp, remotePath) {
  try {
    const stat = await sftp.stat(remotePath);
    return stat ? true : false;
  } catch {
    return false;
  }
}

async function listNamesSftp(sftp, remotePath) {
  const listing = await sftp.list(remotePath);
  return listing
    .filter((e) => e.name !== "." && e.name !== "..")
    .map((e) => ({ name: e.name, isDir: e.type === "d" }));
}

async function moveEntrySftp(sftp, from, to, dryRun) {
  if (dryRun) {
    console.log(`[dry-run] ${from} → ${to}`);
    return;
  }
  await sftp.rename(from, to);
}

async function moveDirectorySftp(sftp, fromDir, toDir, dryRun) {
  const entries = await listNamesSftp(sftp, fromDir);
  for (const entry of entries) {
    const src = joinRemote(fromDir, entry.name);
    const dest = joinRemote(toDir, entry.name);
    if (entry.isDir) {
      if (!(await pathExistsSftp(sftp, dest))) {
        if (!dryRun) await sftp.mkdir(dest, true);
        else console.log(`[dry-run] mkdir ${dest}`);
      }
      await moveDirectorySftp(sftp, src, dest, dryRun);
      if (!dryRun) {
        try {
          await sftp.rmdir(src, true);
        } catch {
          /* nicht leer oder bereits weg */
        }
      }
    } else {
      if (await pathExistsSftp(sftp, dest)) {
        if (!dryRun) await sftp.delete(dest);
        else console.log(`[dry-run] überschreiben ${dest}`);
      }
      await moveEntrySftp(sftp, src, dest, dryRun);
    }
  }
}

async function removeEmptyDirsSftp(sftp, dir, dryRun) {
  if (!(await pathExistsSftp(sftp, dir))) return;
  try {
    const left = await listNamesSftp(sftp, dir);
    if (left.length === 0 && !dryRun) await sftp.rmdir(dir, true);
  } catch {
    /* */
  }
}

async function detectSource(sftp, pwd, explicitFrom) {
  if (explicitFrom) {
    const from = explicitFrom.startsWith("/")
      ? explicitFrom
      : joinRemote(pwd, explicitFrom);
    if (await pathExistsSftp(sftp, from)) return from;
    throw new Error(`Quellordner existiert nicht: ${from}`);
  }

  const deep = joinRemote(pwd, "inspiroo.ch/inspiroo.ch");
  if (await pathExistsSftp(sftp, joinRemote(deep, "index.html"))) {
    return deep;
  }

  const single = joinRemote(pwd, "inspiroo.ch");
  if (await pathExistsSftp(sftp, joinRemote(single, "index.html"))) {
    return single;
  }

  return null;
}

async function promoteSftp(env, args) {
  const { port: sftpPort, remotePath } = requireKreativmediaEnv(env);
  const client = new SftpClient();
  try {
    await client.connect({
      host: env.KREATIVMEDIA_SFTP_HOST,
      port: sftpPort,
      username: env.KREATIVMEDIA_SFTP_USER,
      password: env.KREATIVMEDIA_SFTP_PASSWORD,
      readyTimeout: 30_000,
    });

    let pwd = await client.cwd();
    if (remotePath && remotePath !== "/") {
      try {
        await client.list(remotePath);
        pwd = remotePath;
      } catch {
        /* pwd bleibt Login-Root */
      }
    }

    const fromDir = await detectSource(client, pwd, args.from);
    if (!fromDir) {
      const idle = {
        ok: true,
        mode: "sftp",
        action: "noop",
        message: "Keine verschachtelte Site — nichts zu verschieben.",
        pwd,
      };
      console.log(JSON.stringify(idle));
      return idle;
    }
    const defaultTo = pwd;
    const toDir = args.to
      ? args.to.startsWith("/")
        ? args.to
        : joinRemote(pwd, args.to)
      : defaultTo;

    if (fromDir === toDir || fromDir.startsWith(`${toDir}/`)) {
      throw new Error(`Quelle und Ziel ungültig: ${fromDir} → ${toDir}`);
    }

    const names = await listNamesSftp(client, fromDir);
    if (names.length === 0) {
      throw new Error(`Quellordner leer: ${fromDir}`);
    }

    console.log(
      JSON.stringify({
        action: "promote",
        pwd,
        from: fromDir,
        to: toDir,
        entries: names.length,
        dryRun: args.dryRun,
      }),
    );

    await moveDirectorySftp(client, fromDir, toDir, args.dryRun);
    if (!args.dryRun) {
      await removeEmptyDirsSftp(client, fromDir, false);
      const parentNested = joinRemote(pwd, "inspiroo.ch/inspiroo.ch");
      await removeEmptyDirsSftp(client, parentNested, false);
      await removeEmptyDirsSftp(client, joinRemote(pwd, "inspiroo.ch"), false);
    }

    return { ok: true, mode: "sftp", from: fromDir, to: toDir };
  } finally {
    client.end();
  }
}

/** FTPS-Fallback (gleiche Logik, weniger Komfort bei verschachtelten Ordnern). */
async function promoteFtps(env, args) {
  const { remotePath } = requireKreativmediaEnv(env);
  const ftpsPort = Number(env.KREATIVMEDIA_FTPS_PORT || 21);
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
      await client.cd(remotePath);
    }
    const pwd = await client.pwd();
    console.log(
      JSON.stringify({
        ok: false,
        mode: "ftps",
        message:
          "FTPS-Verschieben ist eingeschränkt — bitte promote per SFTP (Port 2121) oder Plesk-Dateimanager.",
        pwd,
        hint: "npm run promote:kreativmedia nutzt zuerst SFTP",
      }),
    );
    process.exit(1);
  } finally {
    client.close();
  }
}

const args = parseArgs();
const env = loadKreativmediaEnv();
requireKreativmediaEnv(env);

try {
  const result = await promoteSftp(env, args);
  console.log(JSON.stringify(result));
} catch (sftpError) {
  const message =
    sftpError instanceof Error ? sftpError.message : String(sftpError);
  console.error(`SFTP: ${message}`);
  await promoteFtps(env, args);
}