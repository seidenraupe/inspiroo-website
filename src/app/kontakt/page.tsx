import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Gespräch mit Thomas Giger vereinbaren: Mail, Telefon oder Nachricht über das Kontaktformular.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div>
        <p className="text-xs tracking-[0.2em] text-violet uppercase">Kontakt</p>
        <h1 className="font-heading mt-3 text-5xl leading-tight text-balance">
          Ich freue mich auf Dein Mail oder Deinen Anruf.
        </h1>
        <p className="mt-5 leading-relaxed text-ink/70">
          Wenn mein Approach und meine Erfahrungen zu Dir und Deinen
          Bedürfnissen zu passen scheinen, dann nimm Kontakt mit mir auf.
        </p>
        <dl className="mt-10 space-y-5 text-sm">
          <div>
            <dt className="text-ink/50">Telefon</dt>
            <dd className="mt-1 text-lg">
              <a href={site.phoneHref} className="hover:text-brand">
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-ink/50">E-Mail</dt>
            <dd className="mt-1 text-lg">
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-ink/50">Adresse</dt>
            <dd className="mt-1 text-lg">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </dd>
          </div>
        </dl>
      </div>
      <div className="rounded-[1.6rem] border border-ink/8 bg-white p-6 sm:p-8">
        <h2 className="font-heading text-2xl">Nachricht hinterlassen</h2>
        <p className="mt-2 text-sm text-ink/60">
          Das Formular öffnet Dein E-Mail-Programm mit vorausgefülltem Text.
          Es werden keine Daten auf dem Server gespeichert.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
