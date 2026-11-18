#!/usr/bin/env bash
# Erzeugt .env aus GitHub Actions Secrets FTP_* (kein Upload).
set -euo pipefail
cd "$(dirname "$0")/.."

for key in FTP_HOST FTP_USER FTP_PASSWORD FTP_REMOTE_DIR; do
  if [[ -z "${!key:-}" ]]; then
    echo "${key} fehlt — unter GitHub: Settings → Secrets and variables → Actions" >&2
    exit 1
  fi
done

cat > .env <<EOF
KREATIVMEDIA_SFTP_HOST=${FTP_HOST}
KREATIVMEDIA_SFTP_PORT=${KREATIVMEDIA_SFTP_PORT:-2121}
KREATIVMEDIA_FTPS_PORT=${FTP_PORT:-${KREATIVMEDIA_FTPS_PORT:-21}}
KREATIVMEDIA_SFTP_USER=${FTP_USER}
KREATIVMEDIA_SFTP_PASSWORD=${FTP_PASSWORD}
KREATIVMEDIA_REMOTE_PATH=${FTP_REMOTE_DIR}
KREATIVMEDIA_PROTOCOL=${KREATIVMEDIA_PROTOCOL:-ftps}
EOF

echo "KreativMedia .env für CI geschrieben (ohne Secrets im Log)."