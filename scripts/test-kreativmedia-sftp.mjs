import SftpClient from "ssh2-sftp-client";

import {
  loadKreativmediaEnv,
  requireKreativmediaEnv,
} from "./kreativmedia-env.mjs";

const env = loadKreativmediaEnv();
let port;
let remotePath;
try {
  ({ port, remotePath } = requireKreativmediaEnv(env));
} catch (error) {
  console.error(
    JSON.stringify({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }),
  );
  process.exit(1);
}

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
  console.log(
    JSON.stringify({
      ok: true,
      host: env.KREATIVMEDIA_SFTP_HOST,
      port,
      remotePath,
      entries: listing.length,
      names: listing.slice(0, 8).map((item) => item.name),
    }),
  );
} catch (error) {
  console.error(
    JSON.stringify({
      ok: false,
      host: env.KREATIVMEDIA_SFTP_HOST,
      port,
      remotePath,
      error: error instanceof Error ? error.message : String(error),
    }),
  );
  process.exit(1);
} finally {
  client.end();
}