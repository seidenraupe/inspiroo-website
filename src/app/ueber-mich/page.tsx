import type { Metadata } from "next";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { DraftHint } from "@/components/draft-hint";
import { Testimonial } from "@/components/testimonial";
import { about, aboutTestimonial, experienceFacts, principles } from "@/lib/content";
import { firstCallHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thomas Giger – Unternehmer, Verwaltungsrat und Sparring-Partner für KMU",
  description:
    "Über 30 Jahre in Geschäftsleitung und Verwaltungsrat, 13 Jahre CEO der Dipl. Ing. Fust AG: Thomas Giger begleitet heute KMU als unabhängiger Sparring-Partner aus Winterthur.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <ContentImage
          src="/thomas-giger.jpg"
          alt={`Porträt von ${site.founder.name}`}
          width={900}
          height={1125}
          className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg object-cover object-[50%_18%] lg:max-w-none"
          priority
        />
        <div>
          <p className="eyebrow">Über mich</p>
          <h1 className="mt-4 text-4xl text-balance sm:text-5xl">{about.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink/80">{about.intro}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <a
              href={firstCallHref}
              className="inline-flex h-12 items-center justify-center rounded-md bg-navy px-6 font-semibold text-cream transition-colors hover:bg-brand"
            >
              Erstgespräch vereinbaren
            </a>
            <a
              href={site.founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
            >
              Profil auf LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white" aria-label="Erfahrung in Zahlen">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
          {experienceFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block text-4xl font-semibold tracking-tight text-navy">
                  {fact.value}
                </span>
                <span className="mt-1 block text-base text-ink/65">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Meine Geschichte</p>
          <h2 className="mt-4 text-3xl text-balance sm:text-4xl">
            Vom CEO zum unabhängigen Sparring-Partner
          </h2>
          <DraftHint className="mt-5">Entwurf – bitte in eigenen Worten bestätigen</DraftHint>
        </div>
        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {about.story.map((item) => (
            <article key={item.question}>
              <h3 className="text-xl">{item.question}</h3>
              <p className="mt-3 text-ink/75">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <ContentImage
            src={about.image}
            alt={about.imageAlt}
            width={1280}
            height={720}
            className="aspect-[16/10] w-full rounded-lg object-cover"
          />
          <div>
            <p className="eyebrow">Arbeitsweise</p>
            <h2 className="mt-4 text-3xl text-balance">{principles.title}</h2>
            <dl className="mt-8 space-y-5">
              {principles.items.map((item) => (
                <div key={item.title}>
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className="mt-1 text-base text-ink/70">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Werdegang</p>
          <h2 className="mt-4 text-3xl">Stationen</h2>
          <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {about.timeline.map((item) => (
              <li
                key={`${item.years}-${item.org}`}
                className="grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:items-baseline"
              >
                <p className="text-sm font-semibold text-violet">{item.years}</p>
                <p>
                  <span className="font-semibold">{item.role}</span>
                  <span className="text-ink/60"> · {item.org}</span>
                </p>
              </li>
            ))}
          </ol>
          <h3 className="mt-12 text-xl">Ausbildung</h3>
          <p className="mt-3 text-ink/75">{about.education}</p>
        </div>
        <div className="flex flex-col gap-12 lg:pt-20">
          <blockquote>
            <p className="text-2xl leading-snug font-semibold text-balance">«{about.quote}»</p>
            <footer className="mt-3 text-sm text-ink/55">{about.quoteSource}</footer>
          </blockquote>
          <Testimonial
            quote={aboutTestimonial.quote}
            role={aboutTestimonial.role}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
