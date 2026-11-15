import type { Metadata } from "next";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-xs tracking-[0.2em] text-violet uppercase">Rechtliches</p>
      <h1 className="font-heading mt-3 text-5xl">Datenschutz-Bestimmungen</h1>

      <section className="mt-10 space-y-2 leading-relaxed">
        <h2 className="font-heading text-2xl">Verantwortliche Stelle</h2>
        <p>
          {site.legalName}
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
          <br />
          {site.address.country}
        </p>
        <p>
          Vertretungsberechtigte Person: {site.founder.name}
          <br />
          Datenschutzbeauftragte Person: {site.founder.name}
          <br />
          E-Mail:{" "}
          <a className="text-brand hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Allgemeines / Einleitung</h2>
        <p>
          Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die
          datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz,
          DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
          Schutz vor Missbrauch ihrer persönlichen Daten. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die
          Datenbanken so gut wie möglich vor unberechtigtem Zugriff, Verlust,
          Missbrauch oder Verfälschung zu schützen. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z. B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </p>
        <p>
          Diese Website kann grundsätzlich ohne Registrierung besucht werden.
          Soweit personenbezogene Daten erhoben werden, erfolgt dies soweit
          möglich auf freiwilliger Basis.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Verarbeitung personenbezogener Daten</h2>
        <p>
          Wir verarbeiten personenbezogene Daten in Übereinstimmung mit dem
          Schweizer Datenschutzrecht. Sofern und soweit die EU-DSGVO anwendbar
          ist, verarbeiten wir personenbezogene Daten darüber hinaus auf den
          Rechtsgrundlagen von Art. 6 Abs. 1 DSGVO (Einwilligung, Vertrag,
          rechtliche Verpflichtung, lebenswichtige Interessen, berechtigte
          Interessen).
        </p>
        <p>
          Wir verarbeiten personenbezogene Daten für die Dauer, die für den
          jeweiligen Zweck erforderlich ist. Bei gesetzlichen
          Aufbewahrungspflichten schränken wir die Bearbeitung entsprechend ein.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per Formular, E-Mail, Telefon oder Online-Terminbuchung
          kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage,
          zur Vorbereitung und Durchführung eines Erstgesprächs sowie für
          Anschlussfragen verwendet. Wir geben diese Daten nicht ohne Ihre
          Einwilligung an Dritte weiter, ausser es ist in dieser Erklärung
          beschrieben oder gesetzlich vorgesehen.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Kontaktformular (Web3Forms)</h2>
        <p>
          Für das Kontaktformular nutzen wir den Dienst Web3Forms, betrieben
          von Web3Creative mit Sitz in Indien, als Auftragsbearbeiter. Beim
          Absenden werden die von Ihnen eingegebenen Angaben – Name,
          E-Mail-Adresse, optional Telefonnummer und Ihre Nachricht – sowie
          technische Daten wie IP-Adresse und Zeitpunkt an Web3Forms
          übermittelt und von dort per E-Mail an uns weitergeleitet. Zum Schutz
          vor Spam können IP-Adresse und E-Mail-Adresse an die Dienste
          CleanTalk und Akismet weitergegeben werden. Web3Forms speichert die
          Anfragen höchstens drei Jahre; wir löschen sie dort, sobald sie nicht
          mehr benötigt werden.
        </p>
        <p>
          Web3Forms nutzt Infrastruktur von Amazon Web Services, Cloudflare
          und Hetzner. Die Daten können dabei auch in Ländern ausserhalb der
          Schweiz und des EWR bearbeitet werden, insbesondere in Indien und den
          USA. Für diese Übermittlungen stützt sich Web3Forms auf die
          Standardvertragsklauseln der EU-Kommission. Zudem erfolgt die
          Übermittlung zur Bearbeitung Ihrer Anfrage, die Sie mit dem Absenden
          des Formulars selbst auslösen (Art. 17 Abs. 1 lit. b DSG bzw. Art. 49
          Abs. 1 lit. b DSGVO). Weitere Informationen:{" "}
          <a
            className="text-brand hover:underline"
            href="https://web3forms.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung von Web3Forms
          </a>
          .
        </p>
        <p>
          Wenn Sie keine Übermittlung an Web3Forms wünschen, erreichen Sie uns
          jederzeit direkt per E-Mail an {site.email} oder telefonisch unter{" "}
          {site.phone}.
        </p>
      </section>

      {site.bookingUrl ? (
        <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
          <h2 className="font-heading text-2xl">Online-Terminbuchung (Cal.com)</h2>
          <p>
            Für ein unverbindliches Erstgespräch können Sie über unsere Website
            einen externen Buchungsdienst nutzen (Cal.com, Cal.com, Inc., USA).
            Beim Anklicken von «Termin direkt wählen» bzw. «Kalender öffnen» auf
            der Kontaktseite werden Sie auf {site.bookingUrl} weitergeleitet. Dort reservieren
            Sie den Termin auf den Servern von Cal.com — nicht mehr nur auf
            unserer Website.
          </p>
          <p>
            Im Buchungsprozess verarbeitet Cal.com die von Ihnen angegebenen
            Daten (z. B. Name, E-Mail-Adresse, ggf. weitere Buchungsfelder,
            gewählter Termin und Zeitzone) sowie technische Verbindungsdaten.
            Cal.com kann diese Daten nutzen, um den Termin zu bestätigen,
            Erinnerungen zu versenden und — je nach Konfiguration des Termins —
            mit
            verbundenen Kalendern oder Videokonferenz-Diensten zu synchronisieren.
            Wir erhalten die für das Erstgespräch erforderlichen Buchungsangaben,
            damit wir den Termin wahrnehmen und Sie bei Bedarf kontaktieren können.
          </p>
          <p>
            Rechtsgrundlage ist die Anbahnung und Durchführung eines
            Beratungskontakts auf Ihre Initiative hin (Art. 17 Abs. 1 lit. b
            revDSG bzw. Art. 6 Abs. 1 lit. b DSGVO). Die Datenübermittlung in die
            USA bzw. an andere Drittstaaten kann damit einhergehen, sofern Cal.com
            dies für den Betrieb des Dienstes erforderlich ist; Cal.com stützt sich
            insoweit auf geeignete Garantien (u. a. Standardvertragsklauseln).
            Weitere Informationen:{" "}
            <a
              className="text-brand hover:underline"
              href="https://cal.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Datenschutzerklärung von Cal.com
            </a>
            .
          </p>
          <p>
            Möchten Sie keine Daten an Cal.com übermitteln, erreichen Sie uns
            per Kontaktformular, E-Mail ({site.email}) oder Telefon ({site.phone}),
            um einen Termin abzustimmen.
          </p>
        </section>
      ) : null}

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Google Analytics</h2>
        <p>
          {site.gaMeasurementId
            ? "Auf dieser Website setzen wir Google Analytics 4 ein, ein Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) bzw. Google LLC (USA)."
            : "Sofern auf der veröffentlichten Website Google Analytics eingebunden ist, gilt Folgendes: Google Analytics 4 ist ein Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) bzw. Google LLC (USA)."}
          {" "}
          Wir nutzen ihn zur Auswertung von Seitenaufrufen und ausgewählten
          Interaktionen auf dieser Website, etwa dem Klick auf
          «Erstgespräch anfragen», «Termin direkt wählen» oder dem erfolgreichen Absenden des
          Kontaktformulars. Dabei können Cookies oder ähnliche Technologien
          zum Einsatz kommen (z. B. zur Unterscheidung von Sitzungen). Google
          erhält u. a. Informationen über aufgerufene Seiten, ungefähren
          Standort, Gerätetyp, Browser, Zeitpunkt und — in IP-Form — Ihre
          Verbindung; in GA4 werden IP-Adressen standardmässig nicht dauerhaft in
          Rohform mit vollem Klartext gespeichert.
        </p>
        <p>
          Rechtsgrundlage ist unser berechtigtes Interesse an einer
          datensparsamen Auswertung der Website-Nutzung zur Verbesserung des
          Angebots (berechtigte Interessen gemäss revDSG; soweit anwendbar
          Art. 6 Abs. 1 lit. f DSGVO). Sie können
          der datenschutzrelevanten Auswertung jederzeit widersprechen, indem Sie
          uns unter {site.email} kontaktieren oder die unten genannten
          Opt-out-Möglichkeiten nutzen.
        </p>
        <p>
          Weitere Informationen:{" "}
          <a
            className="text-brand hover:underline"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google Datenschutzerklärung
          </a>
          ,{" "}
          <a
            className="text-brand hover:underline"
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noreferrer"
          >
            Google Analytics & Daten
          </a>
          ; Opt-out u. a. über das{" "}
          <a
            className="text-brand hover:underline"
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer"
          >
            Browser-Add-on
          </a>{" "}
          sowie in den Browsereinstellungen (Cookies einschränken oder löschen).
        </p>
        <p>
          Unabhängig davon kann der Hosting-Anbieter technische Server-Logs (z.
          B. IP-Adresse, Zeitpunkt, aufgerufene Seite) zur sicheren Bereitstellung
          der Website kurzfristig speichern.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Dienste von Drittanbietern</h2>
        <p>
          Externe Links — etwa zu LinkedIn, Cal.com, Google-Diensten oder zu
          Websites von Referenzunternehmen — führen auf Angebote Dritter. Für
          deren Datenverarbeitung sind die jeweiligen Betreiber verantwortlich;
          es gelten deren Nutzungs- und Datenschutzbestimmungen.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Rechte der betroffenen Person</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie auf Widerruf
          einer erteilten Einwilligung. Zur Ausübung dieser Rechte wenden Sie
          sich an {site.email}. Sie können sich zudem bei der zuständigen
          Aufsichtsbehörde beschweren (in der Schweiz: Eidgenössischer
          Datenschutz- und Öffentlichkeitsbeauftragter, EDÖB).
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Änderungen</h2>
        <p>
          Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt die
          jeweils aktuelle, auf dieser Website veröffentlichte Fassung.
        </p>
      </section>
    </article>
  );
}
