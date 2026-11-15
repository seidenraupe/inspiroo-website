#!/usr/bin/env bash
# Upload nach KreativMedia (SFTP). Nur ausführen wenn FTP_* gesetzt und Go-live freigegeben.
set -euo pipefail
cd "$(dirname "$0")/.."

: "${FTP_HOST:?FTP_HOST fehlt}"
: "${FTP_USER:?FTP_USER fehlt}"
: "${FTP_PASSWORD:?FTP_PASSWORD fehlt}"
: "${FTP_REMOTE_DIR:?FTP_REMOTE_DIR fehlt — z. B. /httpdocs oder /httpdocs/inspiroo.ch}"

if [[ ! -d out ]] || [[ ! -f out/index.html ]]; then
  echo "Bitte zuerst ./scripts/build-production.sh ausführen." >&2
  exit 1
fi

if [[ "${1:-}" != "--confirm" ]]; then
  echo "Dry-run: Würde out/ nach sftp://${FTP_USER}@${FTP_HOST}${FTP_REMOTE_DIR} synchronisieren."
  echo "Zum echten Upload: $0 --confirm"
  exit 0
fi

if ! command -v lftp >/dev/null 2>&1; then
  echo "lftp fehlt — apt install lftp oder manuell per FileZilla hochladen." >&2
  exit 1
fi

export LFTP_PASSWORD="${FTP_PASSWORD}"
lftp -u "${FTP_USER}" "sftp://${FTP_HOST}" <<EOF
set sftp:auto-confirm yes
set mirror:parallel-transfer-count 4
mirror -R --verbose --delete --parallel=4 ./out ${FTP_REMOTE_DIR}
bye
EOF

echo "Upload abgeschlossen. 301 und HTTPS in Plesk prüfen."