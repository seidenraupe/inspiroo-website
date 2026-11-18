# inspiroo website

Neue Website für [inspiroo gmbh](https://www.inspiroo.ch) – unternehmerisches Sparring und Unternehmensentwicklung für KMU, Thomas Giger, Winterthur.

Version 3 setzt die Anregungen aus «Website neu – Kritik und Anregung zu V2» um: klarere Positionierung, Zielgruppe KMU, Fallstudien, Testimonials, Erstgespräch als primäre Handlungsaufforderung, ruhige Gestaltung in Dunkelblau, Off-White und Violett mit einer einzigen serifenlosen Schrift (Source Sans 3).

Vorschau auf GitHub Pages: [seidenraupe.github.io/inspiroo-website](https://seidenraupe.github.io/inspiroo-website/)

## Lokal starten

```bash
npm install
npm run dev
```

Die Entwicklungsumgebung läuft auf [http://127.0.0.1:4327](http://127.0.0.1:4327).

## Seiten

- `/` – Hero, Erfahrung in Zahlen, Einsatzsituationen, Zielgruppe, Arbeitsweise, Fallstudien, Kundenstimmen, Zusammenarbeit (Formate), Ablauf, Profil
- `/zusammenarbeit` – Boxen-Stopp, Co-Pilot, Navigator, Masterplan (aus Kundensicht)
- `/referenzen` – Fallstudien, Kundenstimmen, filterbarer Mandatskatalog, Führungserfahrung als CEO
- `/ueber-mich` – Persönliche Geschichte, Arbeitsweise, Werdegang
- `/kontakt` – Erstgespräch, Telefon, Nachricht
- `/impressum` und `/datenschutz`

## Inhalte pflegen

- Texte: `src/lib/content.ts`
- Referenzen und Fallstudien: `src/lib/references.ts`
- Kontaktdaten, Terminplaner-URL und Entwurfshinweise: `src/lib/site.ts`
  - `bookingUrl`: optionaler Kalender (Cal.com …), nur auf `/kontakt` unter «Termin direkt wählen». Alle anderen Erstgespräch-CTAs führen nach `/kontakt` (Formular). Ohne URL: Termin per vorbereiteter E-Mail auf der Kontaktseite.
  - `showDraftHints`: blendet die violetten Hinweise auf Platzhalter (Testimonials, Fallstudien-Ergebnisse, Mandate) ein. Vor dem Livegang auf `false` setzen.
- Bilder: `public/images/` (KI-generierte Business-Fotografie, WebP). Das Porträt liegt unter `public/thomas-giger.jpg`.

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui.

## Produktion

```bash
npm run build
```

Der statische Export liegt in `out/` und wird bei jedem Push auf `main` nach GitHub Pages veröffentlicht.

## Google Search Console & Analytics

**Bereits in der Website vorbereitet:** `sitemap.xml`, `robots.txt`, JSON-LD, optional GA4 und Search-Console-Verifizierung per Build-Variablen.

1. **Search Console:** Property `https://www.inspiroo.ch` anlegen → Verifizierung **HTML-Tag** → nur den Token-String (nicht das ganze Meta-Tag) als Repository-Secret `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` setzen, neu deployen, Verifizierung abschliessen, Sitemap `https://www.inspiroo.ch/sitemap.xml` einreichen.
2. **GA4:** Property anlegen → Measurement ID `G-…` als Secret `NEXT_PUBLIC_GA_MEASUREMENT_ID`, neu deployen. In GA4 unter **Verwaltung → Datenstreams** die Domain prüfen; **Ereignisse** zeigen u. a. `page_view`, `cta_first_call`, `contact_form_submit`.
3. **Lokal:** Werte in `.env.local` nach Vorlage `.env.example` setzen, `npm run dev` neu starten.

Ohne gesetzte Variablen bleibt die Website ohne Tracking-Code (Datenschutztext beschreibt den Fall «sofern aktiviert»).

## Live auf KreativMedia (ohne Cloudflare)

### Via GitHub (empfohlen ab Cursor)

1. Änderungen auf **`github/main`** pushen (Vorschau läuft automatisch über GitHub Pages).
2. Unter [Actions](https://github.com/seidenraupe/inspiroo-website/actions) → **«Deploy KreativMedia (production)»** → **Run workflow**.
3. Optional: GitHub-Environment **`production`** anlegen (*Settings → Environments*) und Freigabe durch Sie verlangen, damit Live nicht versehentlich ausgelöst wird.

**Secrets** (*Settings → Secrets and variables → Actions*): `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_REMOTE_DIR` (Plesk Document Root). Optional wie bei Pages: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

**Voraussetzung:** Workflow **«Verify KreativMedia SFTP»** von GitHub aus grün (testet Verbindung; üblicherweise **FTPS Port 21**).

Workflows: `deploy-kreativmedia.yml` (Build + Upload), `verify-kreativmedia-sftp.yml` (nur Test). CI setzt `KREATIVMEDIA_PROTOCOL=ftps` (Plesk-Standard).

### Drei Kopien synchron halten

| Kopie | Rolle |
|-------|--------|
| **Cursor Origin** `inspiroo-web` | Kanonischer Stand nach **Cloud-Agent**-Arbeit |
| **GitHub** `seidenraupe/inspiroo-website` | Pages + Actions (Deploy) |
| **Lokal** (Windows) | Brücke: Origin → GitHub, `npm run deploy:kreativmedia` |

### Warum der Agent nicht direkt nach GitHub pusht

Der Cloud-Agent committet nach **Cursor Origin** (`origin.cursor.com`).  
`git push` nach **GitHub** aus der VM nutzt ein **eingeschränktes Token** (Lesen oft ok, **Schreiben** fehlgeschlagen).  
Ihr **Fine-grained PAT** in Cursor gilt für **Desktop/Git Credential Manager**, nicht automatisch für die Remote-VM.

**Praktisch:** einmal nach Agent-Arbeit lokal (oder in Cursor Desktop mit GitHub als Remote) **Origin holen → GitHub pushen**.

### Sync Origin → GitHub (Windows, einmalig einrichten)

Im Projektordner (PowerShell), PAT mit **Contents: Read and write** + **Workflows: Read and write**:

```powershell
git remote add cursor https://origin.cursor.com/git/thomas-giger/inspiroo-web.git
# falls schon vorhanden: git remote set-url cursor https://origin.cursor.com/git/thomas-giger/inspiroo-web.git
git remote -v
# origin soll auf github.com/seidenraupe/inspiroo-website zeigen
```

**Nach jeder Agent-Session** (oder vor Deploy auf KreativMedia):

```powershell
git fetch cursor
git checkout main
git pull origin main
git merge cursor/main
# Konflikte in IDE lösen, dann:
git push origin main
```

Kurz-Check:

```powershell
git log -1 --oneline
git ls-remote cursor main
git ls-remote origin main
```

Die beiden SHA am Ende sollten **gleich** sein. Danach: [Actions → Deploy KreativMedia](https://github.com/seidenraupe/inspiroo-website/actions/workflows/deploy-kreativmedia.yml).

**Optional GitHub-Secret** `FTP_PORT` = `21` (FTPS; zusätzlich zu `FTP_HOST`, `FTP_USER`, …). CI setzt `KREATIVMEDIA_PROTOCOL=ftps` über `scripts/ci-kreativmedia-env.sh`.

### Lokal (wie andrezuraikat)

| Schritt | Befehl |
|--------|--------|
| Produktions-Build (`out/`, kein GitHub-Pfad) | `npm run build:production` |
| Verbindung testen (kein Upload) | `npm run test:kreativmedia` |
| Live setzen | `npm run deploy:kreativmedia` (= Build + Upload von `out/`) |

**Einrichtung:** `.env.example` → `.env` kopieren, `KREATIVMEDIA_*` aus Plesk eintragen (Port standard **2121**, Ziel = Dokumentenstamm `www.inspiroo.ch`). `.env` steht in `.gitignore`.

**Technik:** FTPS (Plesk Port 21, PASV mit Control-Host) oder Fallback **SFTP 2121** beim Upload, falls CI `425 data connection` meldet. Skripte: `scripts/test-kreativmedia-sftp.mjs`, `scripts/deploy-kreativmedia.mjs`.

**Nach dem Upload in Plesk:**

1. **HTTPS-301:** *Hosting-Einstellungen → Sicherheit* ([Anleitung](https://help.kreativmedia.ch/de/weiterleitung-https)).
2. **Wix-301:** `public/.htaccess` → liegt als `.htaccess` in `out/`.
3. **nginx:** Proxymodus **Standard**, damit `.htaccess` greift.

GA4 beim Produktions-Build: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-… npm run deploy:kreativmedia`.

**GitHub Pages:** In den Repository-Einstellungen unter **Settings → Secrets and variables → Actions** die beiden Secrets anlegen. In `.github/workflows/pages.yml` beim Schritt `npm run build` müssen die Variablen `NEXT_PUBLIC_GA_MEASUREMENT_ID` und `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` aus diesen Secrets gesetzt sein (im Repo dokumentiert; bei Bedarf im GitHub-Web-Editor eintragen, falls der Workflow noch nicht deployed wurde).
