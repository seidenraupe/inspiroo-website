#!/usr/bin/env bash
# Prüft SFTP-Zugang und Remote-Verzeichnis (ohne Upload).
set -euo pipefail

: "${FTP_HOST:?FTP_HOST fehlt}"
: "${FTP_USER:?FTP_USER fehlt}"
: "${FTP_PASSWORD:?FTP_PASSWORD fehlt}"
: "${FTP_REMOTE_DIR:?FTP_REMOTE_DIR fehlt}"

export LFTP_PASSWORD="${FTP_PASSWORD}"
lftp -u "${FTP_USER}" "sftp://${FTP_HOST}" <<EOF
set sftp:auto-confirm yes
pwd
cd ${FTP_REMOTE_DIR}
pwd
ls -la
bye
EOF

echo "SFTP und Zielverzeichnis erreichbar."