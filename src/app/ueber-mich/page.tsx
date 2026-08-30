import type { Metadata } from "next";
import Image from "next/image";

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
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <figure>
          <Image
            src="/thomas-giger.jpg"
            alt={site.founder.ageNote}
            width={900}
            height={900}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_18%] ring-1 ring-ink/10"
            priority
          />
        </figure>
        <div>
          <p className="text-xs tracking-[0.2em] text-violet uppercase">
            Über mich
          </p>
          <h1 className="font-heading mt-3 text-5xl leading-tight text-balance">
            {site.founder.ageNote}
          </h1>
          <blockquote className="mt-8 border-l-2 border-violet pl-5">
            <p className="font-heading text-2xl leading-snug text-ink/90">
              «{about.quoteOriginal}»
            </p>
            <footer className="mt-3 text-sm text-ink/55">{about.quoteSource}</footer>
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-2">
            {about.personality.map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-moss px-3 py-1 text-sm text-ink"
              >
                {trait}
              </span>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-ink/75">{about.independent}</p>
          <p className="mt-4 leading-relaxed text-ink/75">{about.focus}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-violet uppercase">
              Ausbildung
            </p>
            <h2 className="font-heading mt-3 text-3xl">Fundiert und neugierig</h2>
            <p className="mt-5 leading-relaxed text-ink/75">{about.education}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-violet uppercase">
              Erfahrung
            </p>
            <h2 className="font-heading mt-3 text-3xl">Über 30 Jahre C-Level</h2>
            <p className="mt-5 leading-relaxed text-ink/75">{about.experience}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-xs tracking-[0.2em] text-violet uppercase">
          Stationen
        </p>
        <h2 className="font-heading mt-3 text-3xl">Werdegang</h2>
        <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {about.timeline.map((item) => (
            <li
              key={`${item.years}-${item.org}`}
              className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]"
            >
              <p className="text-sm tracking-wide text-brand">{item.years}</p>
              <div>
                <p className="font-medium">{item.role}</p>
                <p className="text-ink/65">{item.org}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
