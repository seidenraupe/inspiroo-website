import { existsSync } from "node:fs";
import { resolve } from "node:path";

import {
  loadKreativmediaEnv,
  requireKreativmediaEnv,
} from "./kreativmedia-env.mjs";
import { deployOutDirToKreativmedia } from "./kreativmedia-transfer.mjs";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(root, "out");

const env = loadKreativmediaEnv();
requireKreativmediaEnv(env);

if (!existsSync(outDir) || !existsSync(resolve(outDir, "index.html"))) {
  throw new Error("out/ fehlt — zuerst npm run build:production.");
}

try {
  const result = await deployOutDirToKreativmedia(env, outDir);
  console.log(JSON.stringify({ ok: true, ...result }));
} catch (error) {
  console.error(
    JSON.stringify({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }),
  );
  process.exit(1);
}