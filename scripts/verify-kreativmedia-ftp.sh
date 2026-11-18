#!/usr/bin/env bash
# CI: GitHub-Secrets FTP_* → Verbindungstest (kein Upload).
set -euo pipefail
cd "$(dirname "$0")/.."

bash scripts/ci-kreativmedia-env.sh
exec npm run test:kreativmedia