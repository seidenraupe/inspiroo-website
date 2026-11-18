import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const envFile = resolve(root, ".env");

/** Liest KREATIVMEDIA_* aus Projekt-.env (wie andrezuraikat). */
export function loadKreativmediaEnv() {
  if (!existsSync(envFile)) {
    throw new Error(".env fehlt im Projektroot — von .env.example kopieren.");
  }
  const values = {};
  for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index < 1) continue;
    values[trimmed.slice(0, index).trim()] = trimmed.slice(index + 1).trim();
  }
  return values;
}

export const kreativmediaRequired = [
  "KREATIVMEDIA_SFTP_HOST",
  "KREATIVMEDIA_SFTP_USER",
  "KREATIVMEDIA_SFTP_PASSWORD",
  "KREATIVMEDIA_REMOTE_PATH",
];

/** Plesk-FTP liegt oft schon im Dokumentenstamm — /inspiroo.ch erzeugt inspiroo.ch/inspiroo.ch. */
export function normalizeKreativmediaRemotePath(raw) {
  const trimmed = (raw || "/").trim().replace(/\/+$/, "") || "/";
  if (trimmed === "/inspiroo.ch" || trimmed === "inspiroo.ch") {
    return "/";
  }
  return trimmed;
}

export function requireKreativmediaEnv(env) {
  for (const key of kreativmediaRequired) {
    if (!env[key]) throw new Error(`Variable ${key} ist leer.`);
  }
  const port = Number(env.KREATIVMEDIA_SFTP_PORT || 2121);
  const remotePath = normalizeKreativmediaRemotePath(env.KREATIVMEDIA_REMOTE_PATH);
  return { port, remotePath };
}