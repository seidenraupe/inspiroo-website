import {
  loadKreativmediaEnv,
  requireKreativmediaEnv,
} from "./kreativmedia-env.mjs";
import { testKreativmediaConnection } from "./kreativmedia-transfer.mjs";

try {
  const env = loadKreativmediaEnv();
  requireKreativmediaEnv(env);
  const result = await testKreativmediaConnection(env);
  console.log(JSON.stringify({ ok: true, ...result }));
  process.exit(0);
} catch (error) {
  console.error(
    JSON.stringify({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }),
  );
  process.exit(1);
}