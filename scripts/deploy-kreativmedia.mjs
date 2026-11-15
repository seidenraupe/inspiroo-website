import { existsSync } from "node:fs";
import { resolve } from "node:path";
import SftpClient from "ssh2-sftp-client";

import {
  loadKreativmediaEnv,
  requireKreativmediaEnv,
} from "./kreativmedia-env.mjs";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(root, "out");

const env = loadKreativmediaEnv();
const { port, remotePath } = requireKreativmediaEnv(env);

if (!existsSync(outDir) || !existsSync(resolve(outDir, "index.html"))) {
  throw new Error("out/ fehlt — zuerst npm run build:production.");
}

const client = new SftpClient();

try {
  await client.connect({
    host: env.KREATIVMEDIA_SFTP_HOST,
    port,
    username: env.KREATIVMEDIA_SFTP_USER,
    password: env.KREATIVMEDIA_SFTP_PASSWORD,
    readyTimeout: 30000,
  });
  const uploaded = await client.uploadDir(outDir, remotePath, {
    useFastput: true,
    filter: (localPath) =>
      !localPath.includes(`${resolve(root, "node_modules")}`),
  });
  console.log(
    JSON.stringify({
      ok: true,
      host: env.KREATIVMEDIA_SFTP_HOST,
      port,
      remotePath,
      files: uploaded,
    }),
  );
} catch (error) {
  console.error(
    JSON.stringify({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }),
  );
  process.exit(1);
} finally {
  client.end();
}