#!/usr/bin/env bash
# CI-Helfer: GitHub-Secrets FTP_* → npm run test:kreativmedia (kein Upload).
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ -n "${FTP_HOST:-}" ]]; then
  cat > .env <<EOF
KREATIVMEDIA_SFTP_HOST=${FTP_HOST}
KREATIVMEDIA_SFTP_PORT=${KREATIVMEDIA_SFTP_PORT:-2121}
KREATIVMEDIA_SFTP_USER=${FTP_USER}
KREATIVMEDIA_SFTP_PASSWORD=${FTP_PASSWORD}
KREATIVMEDIA_REMOTE_PATH=${FTP_REMOTE_DIR}
EOF
fi

exec npm run test:kreativmedia