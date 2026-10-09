import type { Metadata } from "next";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { about } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Thomas Giger — über 30 Jahre C-Level-Erfahrung, 13 Jahre CEO von Dipl. Ing. Fust, seit 2023 unabhängiger Berater für Startups und KMUs.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-5xl items-end gap-12 px-5 pt-16 pb-8 sm:px-8 sm:pt-24 lg:grid-cols-[0.8fr_1.2fr]">
        <figure>
          <ContentImage
            src="/thomas-giger.jpg"
            alt={site.founder.ageNote}
            width={900}
            height={900}
            className="aspect-[4/5] w-full rounded-sm object-cover object-[50%_18%]"
            priority
          />
          <figcaption className="mt-3 text-sm text-ink/50">
            {site.founder.name}
          </figcaption>
        </figure>
        <div>
          <p className="eyebrow">Über mich</p>
          <h1 className="font-heading mt-4 text-4xl text-balance sm:text-5xl">
            {site.founder.ageNote}
          </h1>
          <blockquote className="mt-8">
            <p className="font-heading text-2xl leading-snug sm:text-3xl">
              «{about.quoteOriginal}»
            </p>
            <footer className="mt-3 text-sm text-ink/50">{about.quoteSource}</footer>
          </blockquote>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/60">
            {about.personality.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-5 pb-16 sm:px-8">
        <p className="measure text-ink/75">{about.independent}</p>
        <p className="measure text-ink/75">{about.focus}</p>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-5xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Ausbildung</p>
            <h2 className="font-heading mt-3 text-3xl">Fundiert und neugierig</h2>
            <p className="mt-5 text-ink/75">{about.education}</p>
          </div>
          <div>
            <p className="eyebrow">Erfahrung</p>
            <h2 className="font-heading mt-3 text-3xl">Über 30 Jahre C-Level</h2>
            <p className="mt-5 text-ink/75">{about.experience}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <p className="eyebrow">Stationen</p>
        <h2 className="font-heading mt-3 text-4xl">Werdegang</h2>
        <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {about.timeline.map((item) => (
            <li
              key={`${item.years}-${item.org}`}
              className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:items-baseline"
            >
              <p className="text-sm text-brand">{item.years}</p>
              <p>
                <span className="font-medium">{item.role}</span>
                <span className="text-ink/55"> · {item.org}</span>
              </p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
