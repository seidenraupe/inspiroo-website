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
- `/services` – Boxen-Stopp, Co-Pilot, Navigator, Masterplan (aus Kundensicht)
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

1. **Build für Produktion** (kein GitHub-Pages-Unterpfad):

   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-… npm run build
   ```

   `NEXT_PUBLIC_BASE_PATH` leer lassen.

2. **Inhalt von `out/`** per FTP/SFTP in den **Dokumentenstamm** der Domain in Plesk kopieren (dort liegt auch die mitgelieferte `public/.htaccess` als `.htaccess`).

3. **HTTPS-301:** In Plesk unter *Hosting-Einstellungen → Sicherheit* die SEO-301 auf HTTPS aktivieren ([Anleitung](https://help.kreativmedia.ch/de/weiterleitung-https)) — nicht zusätzlich in `.htaccess` doppeln.

4. **Wix-Weiterleitungen:** `public/.htaccess` enthält 301 für `/übermich` und `/projekte` → `/ueber-mich/`, `/referenzen/`. Weitere Regeln bei Bedarf ergänzen.

5. **nginx:** Proxymodus **Standard** lassen, damit `.htaccess` greift. Option «Statische Dateien direkt durch nginx» nur aktivieren, wenn du keine Rewrite-Regeln mehr brauchst.

### Vorbereitung Deploy (von Cursor Cloud, ohne Auto-Livegang)

| Secret / Variable | Wo setzen | Status |
|------------------|-----------|--------|
| `FTP_HOST` | Cursor → App Secrets (Deploy) **optional zusätzlich** GitHub Actions Secrets | in Cursor gesetzt |
| `FTP_USER` | wie oben | in Cursor gesetzt |
| `FTP_PASSWORD` | wie oben | in Cursor gesetzt |
| `FTP_REMOTE_DIR` | wie oben (Pfad lt. Plesk, z. B. `/httpdocs`) | in Cursor gesetzt |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GitHub Actions Secrets + lokal beim Produktions-Build | von dir gemeldet auf GitHub |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | optional (DNS-GSC) | nicht nötig bei DNS-Verifizierung |

**Skripte (nichts veröffentlichen ohne `--confirm`):**

```bash
chmod +x scripts/*.sh
./scripts/build-production.sh          # erzeugt out/
./scripts/verify-kreativmedia-ftp.sh     # SFTP-Test ohne Upload (siehe unten)
./scripts/deploy-kreativmedia.sh       # Dry-run
./scripts/deploy-kreativmedia.sh --confirm   # erst bei Go-live-Freigabe
```

**SFTP nur prüfen (kein Upload):** Cursor App Secrets werden in der Cloud-Agent-Shell **nicht** ausgegeben — nur beim späteren **Publish** des Deploy-Skripts (falls genutzt). Zum Testen vor Go-live:

1. **Lokal (empfohlen):** Im Projektroot die vier Werte aus Plesk/my.KM setzen und ausführen:

   ```bash
   export FTP_HOST=… FTP_USER=… FTP_PASSWORD=… FTP_REMOTE_DIR=…
   ./scripts/verify-kreativmedia-ftp.sh
   ```

   Bei Erfolg: Verbindung ok, `pwd` im Zielordner, Kurzliste `ls -la` — **kein** Datei-Upload.

2. **GitHub Actions:** Workflow `.github/workflows/verify-kreativmedia-sftp.yml` liegt im Repo; dieselben vier Namen unter **Settings → Secrets and variables → Actions** anlegen, dann **Actions → Verify KreativMedia SFTP → Run workflow**. (Workflow-Datei ggf. im GitHub-Web-Editor pushen, falls sie auf `github.com` noch fehlt.)

**FTP-Zugangsdaten** findest du in Plesk / KreativMedia my.KM (Host oft die Server-Adresse aus der Einrichtungsmail; Remote-Pfad = Dokumentenstamm der Domain `inspiroo.ch`).

**GitHub Pages:** In den Repository-Einstellungen unter **Settings → Secrets and variables → Actions** die beiden Secrets anlegen. In `.github/workflows/pages.yml` beim Schritt `npm run build` müssen die Variablen `NEXT_PUBLIC_GA_MEASUREMENT_ID` und `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` aus diesen Secrets gesetzt sein (im Repo dokumentiert; bei Bedarf im GitHub-Web-Editor eintragen, falls der Workflow noch nicht deployed wurde).
