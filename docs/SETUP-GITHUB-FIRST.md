# Setup wie `hvw-website` (GitHub-first)

Ziel: **ein** kanonisches Repo auf GitHub; Cursor-Agent pusht dorthin; **Push auf `main`** startet Deploy (Pages + optional KreativMedia).

## Vergleich

| | **hvw-website** | **inspiroo (Ziel)** |
|---|-----------------|---------------------|
| Repo in Cursor | `github.com/seidenraupe/hvw-website` | `github.com/seidenraupe/inspiroo-website` |
| Agent-Remote | GitHub (App, Schreiben) | GitHub (App, Schreiben) |
| Vorschau | GitHub Pages | GitHub Pages |
| Live | `push` → Actions → SSH/rsync Hostpoint | `push` → Actions → FTPS/SFTP KreativMedia |
| Origin `inspiroo-web` | nicht nötig | optional abschalten / nur Legacy |

## Einmalige Umstellung (Checkliste)

### 1. GitHub als einzige Quelle

- Repo: [seidenraupe/inspiroo-website](https://github.com/seidenraupe/inspiroo-website)
- **Cursor → Integrations → GitHub:** App mit **Read & write** auf dieses Repo
- Lokales Projekt: `origin` = GitHub-URL (kein `cursor`-Remote nötig)

```powershell
git remote -v
# origin  https://github.com/seidenraupe/inspiroo-website.git
```

Falls noch **Origin-Mirror** genutzt wurde: letzten Stand `git merge cursor/main`, danach nur noch `git push origin main`.

### 2. Cursor-Agent am GitHub-Repo starten

**Nicht** «New Project» ohne GitHub, **sondern:**

1. Cursor: Repo von GitHub öffnen / klonen (`seidenraupe/inspiroo-website`)
2. Cloud-Agent **von diesem Workspace** starten (Branch `main`)
3. Agent-Commits gehen per GitHub App nach **GitHub** (wie bei HVW)

Prüfen: Nach einer kleinen Agent-Änderung erscheint der Commit auf github.com ohne manuellen `fetch cursor`.

### 3. GitHub Secrets (bereits bei Inspiroo)

Unter **Settings → Secrets and variables → Actions:**

- `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_REMOTE_DIR`
- optional `FTP_PORT` = `21`
- optional `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

Environment **`production`** (optional): Freigabe vor Live-Deploy — schützt bei `push` auf `main`.

### 4. Workflows (im Repo)

| Workflow | Trigger |
|----------|---------|
| `pages.yml` | `push` `main` → Vorschau Pages |
| `deploy-kreativmedia.yml` | `push` `main` → www.inspiroo.ch |
| `verify-kreativmedia-sftp.yml` | nur manuell |

Nach Umstellung: **`git push origin main`** reicht für Vorschau **und** KreativMedia (wie HVW `deploy.yml`).

### 5. Lokal entwickeln (wie bisher)

- `.env` aus `.env.example` (nur lokal, nie committen)
- `npm run dev`, `npm run test:kreativmedia`, optional `npm run deploy:kreativmedia` ohne Actions

### 6. Origin `inspiroo-web` abschaffen (optional)

Wenn alles auf GitHub läuft:

- Keine neuen Agent-Läufe mehr nur gegen Origin starten
- Remote `cursor` lokal entfernen: `git remote remove cursor`

## Abweichung zu HVW (Hosting)

HVW nutzt **SSH/rsync** zu Hostpoint; Inspiroo nutzt **FTPS/SFTP** (Plesk/KreativMedia).  
Der **Ablauf** ist gleich (Push → Actions); nur das Übertragungsprotokoll unterscheidet sich.  
SSH/rsync auf KreativMedia ist nur möglich, wenn Plesk SSH für Ihren Account freigibt.

## Fehlerbilder

| Symptom | Lösung |
|---------|--------|
| Agent pusht nicht | GitHub App Schreibrecht; Agent am **GitHub**-Repo starten |
| Deploy rot, Verify grün | FTPS 425 → neuestes `kreativmedia-transfer.mjs` (SFTP-Fallback) |
| Doppelte Deploys | `concurrency` im Workflow cancelt laufende Jobs |