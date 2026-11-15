#!/usr/bin/env bash
# Produktions-Build für www.inspiroo.ch (KreativMedia) — nicht veröffentlichen, nur out/ erzeugen.
set -euo pipefail
cd "$(dirname "$0")/.."

export NEXT_PUBLIC_BASE_PATH=""
# Optional beim Build: NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

echo "Building static export (NEXT_PUBLIC_BASE_PATH empty)…"
npm run build
echo "Fertig: Inhalt von out/ für KreativMedia hochladen (noch nicht deployen ohne Freigabe)."
ls -la out/.htaccess out/index.html 2>/dev/null || true