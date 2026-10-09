import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { ContentImage } from "@/components/content-image";
import { photos } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Gespräch mit Thomas Giger vereinbaren: Mail, Telefon oder Nachricht über das Kontaktformular.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-5xl gap-16 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="eyebrow">Kontakt</p>
        <h1 className="font-heading mt-4 text-4xl text-balance sm:text-5xl">
          Ich freue mich auf Dein Mail oder Deinen Anruf.
        </h1>
        <p className="measure mt-5 text-ink/70">
          Wenn mein Approach und meine Erfahrungen zu Dir und Deinen
          Bedürfnissen zu passen scheinen, dann nimm Kontakt mit mir auf.
        </p>
        <figure className="mt-10 max-w-md">
          <ContentImage
            src={photos.teamSeven.src}
            alt={photos.teamSeven.alt}
            width={1456}
            height={816}
            className="aspect-[16/10] w-full rounded-sm object-cover"
            priority
          />
        </figure>
        <dl className="mt-10 space-y-6">
          <div>
            <dt className="text-sm text-ink/45">Telefon</dt>
            <dd className="mt-1 font-heading text-2xl">
              <a href={site.phoneHref} className="hover:text-brand">
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink/45">E-Mail</dt>
            <dd className="mt-1 text-lg">
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink/45">Adresse</dt>
            <dd className="mt-1 text-lg leading-snug">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </dd>
          </div>
        </dl>
      </div>
      <div>
        <h2 className="font-heading text-3xl">Nachricht hinterlassen</h2>
        <p className="mt-3 text-sm text-ink/60">
          Das Formular öffnet Dein E-Mail-Programm mit vorausgefülltem Text.
          Es werden keine Daten auf dem Server gespeichert.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
