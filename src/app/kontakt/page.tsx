import type { Metadata } from "next";
import { CalendarCheck, Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { ContentImage } from "@/components/content-image";
import { firstCall, process } from "@/lib/content";
import { firstCallHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Erstgespräch vereinbaren – Sparring-Partner für KMU in Winterthur",
  description:
    "Unverbindliches Erstgespräch mit Thomas Giger vereinbaren: persönlich in Winterthur oder per Video. Telefon +41 79 608 24 24.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h1 className="mt-4 text-4xl text-balance sm:text-5xl">{firstCall.title}</h1>
          <p className="measure mt-6 text-xl leading-relaxed text-ink/75">{firstCall.body}</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base text-ink/65">
            {firstCall.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-violet" aria-hidden />
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <ContentImage
          src={firstCall.image}
          alt={firstCall.imageAlt}
          width={1152}
          height={864}
          priority
          className="aspect-[4/3] w-full rounded-lg object-cover"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={firstCallHref}
            className="group flex flex-col rounded-lg bg-navy p-7 text-cream transition-colors hover:bg-brand"
          >
            <CalendarCheck className="size-6" aria-hidden />
            <h2 className="mt-6 text-xl">Erstgespräch vereinbaren</h2>
            <p className="mt-2 flex-1 text-base text-cream/75">
              {site.bookingUrl
                ? "Wähle direkt einen freien Termin im Kalender."
                : "Vorbereitete E-Mail mit Deinen Terminvorschlägen – ich melde mich rasch bei Dir."}
            </p>
            <span className="mt-6 font-semibold underline decoration-cream/40 underline-offset-4 group-hover:decoration-cream">
              Termin anfragen
            </span>
          </a>
          <a
            href={site.phoneHref}
            className="group flex flex-col rounded-lg border border-ink/15 bg-white p-7 transition-colors hover:border-ink/40"
          >
            <Phone className="size-6 text-navy" aria-hidden />
            <h2 className="mt-6 text-xl">Direkt anrufen</h2>
            <p className="mt-2 flex-1 text-base text-ink/65">
              Am schnellsten klären wir Deine Frage am Telefon.
            </p>
            <span className="mt-6 text-lg font-semibold text-navy">{site.phone}</span>
          </a>
          <a
            href="#nachricht"
            className="group flex flex-col rounded-lg border border-ink/15 bg-white p-7 transition-colors hover:border-ink/40"
          >
            <Mail className="size-6 text-navy" aria-hidden />
            <h2 className="mt-6 text-xl">Nachricht schreiben</h2>
            <p className="mt-2 flex-1 text-base text-ink/65">
              Schildere Deine Situation in ein paar Sätzen – per Formular oder an{" "}
              {site.email}.
            </p>
            <span className="mt-6 font-semibold text-navy underline decoration-navy/30 underline-offset-4">
              Zum Formular
            </span>
          </a>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div id="nachricht" className="scroll-mt-28">
            <h2 className="text-3xl">Nachricht schreiben</h2>
            <p className="mt-3 text-base text-ink/60">
              Schildere Deine Situation in ein paar Sätzen. Die Nachricht kommt
              direkt bei mir an.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="text-xl">Wie es danach weitergeht</h2>
            <ol className="mt-6 space-y-6">
              {process.steps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full border border-navy text-sm font-semibold text-navy">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-base text-ink/65">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <dl className="mt-12 space-y-5 border-t border-ink/10 pt-8 text-base">
              <div>
                <dt className="text-sm text-ink/50">Adresse</dt>
                <dd className="mt-1 leading-snug">
                  {site.legalName}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink/50">E-Mail</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-brand hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink/50">LinkedIn</dt>
                <dd className="mt-1">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand hover:underline"
                  >
                    inspiroo gmbh
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
