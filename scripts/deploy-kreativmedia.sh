#!/usr/bin/env bash
# Hinweis: Produktions-Deploy wie andrezuraikat: npm run deploy:kreativmedia
set -euo pipefail
cd "$(dirname "$0")/.."

echo "Verwende: npm run deploy:kreativmedia" >&2
echo "  (build:production → SFTP-Upload von out/ nach KreativMedia)" >&2
exec npm run deploy:kreativmedia