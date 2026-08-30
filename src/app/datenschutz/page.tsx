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
          Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, werden
          Ihre Angaben zwecks Bearbeitung der Anfrage und für Anschlussfragen
          verwendet. Das Kontaktformular auf dieser Website öffnet Ihr
          E-Mail-Programm; es werden dabei keine Formulardaten auf unserem
          Server gespeichert.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Cookies und Analyse</h2>
        <p>
          Diese Website setzt keine Marketing- oder Analyse-Cookies ein. Der
          Hosting-Anbieter kann technische Logs (z. B. IP-Adresse, Zeitpunkt,
          aufgerufene Seite) zur sicheren Bereitstellung der Website speichern.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Dienste von Drittanbietern</h2>
        <p>
          Externe Links — etwa zu LinkedIn oder zu Websites von
          Referenzunternehmen — führen auf Angebote Dritter. Für deren
          Datenverarbeitung sind die jeweiligen Betreiber verantwortlich.
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
