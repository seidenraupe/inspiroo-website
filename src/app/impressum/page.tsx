import type { Metadata } from "next";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-xs tracking-[0.2em] text-violet uppercase">Rechtliches</p>
      <h1 className="font-heading mt-3 text-5xl">Impressum</h1>

      <section className="mt-10 space-y-2 leading-relaxed">
        <h2 className="font-heading text-2xl">Verantwortliche Instanz</h2>
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
          E-Mail:{" "}
          <a className="text-brand hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </section>

      <section className="mt-10 space-y-2 leading-relaxed">
        <h2 className="font-heading text-2xl">Vertretungsberechtigte Personen</h2>
        <p>{site.founder.name}</p>
        <p>Name des Unternehmens: {site.legalName}</p>
        <p>Registrationsnummer: {site.uid}</p>
        <p>Umsatzsteuer-Identifikationsnummer: {site.vat}</p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit,
          Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
        </p>
        <p>
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder
          immaterieller Art, die aus dem Zugriff oder der Nutzung bzw.
          Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der
          Verbindung oder durch technische Störungen entstanden sind, werden
          ausgeschlossen.
        </p>
        <p>
          Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich
          vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte
          Ankündigung zu verändern, zu ergänzen, zu löschen oder die
          Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">
          Haftungsausschluss für Inhalte und Links
        </h2>
        <p>
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
          Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
          Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
          erfolgen auf eigene Gefahr des jeweiligen Nutzers.
        </p>
      </section>

      <section className="mt-10 space-y-3 leading-relaxed text-ink/80">
        <h2 className="font-heading text-2xl">Urheberrechtserklärung</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
          anderen Dateien auf dieser Website gehören ausschliesslich inspiroo
          oder den speziell genannten Rechteinhabern. Für die Reproduktion
          jeglicher Elemente ist die schriftliche Zustimmung des
          Urheberrechtsträgers im Voraus einzuholen.
        </p>
      </section>
    </article>
  );
}
