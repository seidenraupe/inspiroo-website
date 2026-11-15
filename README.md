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

Gleicher Ablauf wie bei [andrezuraikat](https://github.com/seidenraupe/andrezuraikat): **lokal bauen, SFTP mit `.env`, kein Auto-Deploy von GitHub auf Produktion.**

| Schritt | Befehl |
|--------|--------|
| Produktions-Build (`out/`, kein GitHub-Pfad) | `npm run build:production` |
| Verbindung testen (kein Upload) | `npm run test:kreativmedia` |
| Live setzen | `npm run deploy:kreativmedia` (= Build + Upload von `out/`) |

**Einrichtung:** `.env.example` → `.env` kopieren, `KREATIVMEDIA_*` aus Plesk eintragen (Port standard **2121**, Ziel = Dokumentenstamm `www.inspiroo.ch`). `.env` steht in `.gitignore`.

**Technik:** npm-Paket `ssh2-sftp-client`, rekursiver Upload mit `useFastput` (gesamtes `out/`, kein Delta). Skripte: `scripts/test-kreativmedia-sftp.mjs`, `scripts/deploy-kreativmedia.mjs`.

**Optional GitHub Actions:** Workflow «Verify KreativMedia SFTP» nutzt dieselben Werte als Secrets `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_REMOTE_DIR` (Map auf `KREATIVMEDIA_*` im CI-Skript).

**Nach dem Upload in Plesk:**

1. **HTTPS-301:** *Hosting-Einstellungen → Sicherheit* ([Anleitung](https://help.kreativmedia.ch/de/weiterleitung-https)).
2. **Wix-301:** `public/.htaccess` → liegt als `.htaccess` in `out/`.
3. **nginx:** Proxymodus **Standard**, damit `.htaccess` greift.

GA4 beim Produktions-Build: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-… npm run deploy:kreativmedia`.

**GitHub Pages:** In den Repository-Einstellungen unter **Settings → Secrets and variables → Actions** die beiden Secrets anlegen. In `.github/workflows/pages.yml` beim Schritt `npm run build` müssen die Variablen `NEXT_PUBLIC_GA_MEASUREMENT_ID` und `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` aus diesen Secrets gesetzt sein (im Repo dokumentiert; bei Bedarf im GitHub-Web-Editor eintragen, falls der Workflow noch nicht deployed wurde).
