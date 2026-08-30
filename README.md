# inspiroo website

Neue Website für [inspiroo gmbh](https://www.inspiroo.ch) — Unternehmensberatung für Startups und KMUs in der Schweiz.

Die Inhalte (Texte, Portrait, Logo, Impressum-Daten) stammen von der bestehenden Seite. Neu ist ein Referenzen-Katalog mit aktuellen Mandaten.

## Lokal starten

```bash
npm install
npm run dev
```

Die Entwicklungsumgebung läuft auf [http://127.0.0.1:4327](http://127.0.0.1:4327).

## Seiten

- `/` — Home mit Approach, Services und ausgewählten Referenzen
- `/ueber-mich` — Thomas Giger, Werdegang
- `/services` — Boxen-Stopp, Co-Pilot, Navigator, Masterplan
- `/referenzen` — Filterbarer Katalog plus Führungserfahrung
- `/kontakt` — Telefon, E-Mail, Formular
- `/impressum` und `/datenschutz`

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui.

## Produktion

```bash
npm run build
npm start
```
