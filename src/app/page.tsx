import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CaseStudy } from "@/components/case-study";
import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { HomeTestimonialsSkeleton } from "@/components/home-testimonials";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";

const HomeTestimonials = dynamic(
  () => import("@/components/home-testimonials").then((mod) => mod.HomeTestimonials),
  { ssr: false, loading: () => <HomeTestimonialsSkeleton /> },
);
import {
  about,
  audience,
  experienceFacts,
  hero,
  occasions,
  principles,
  services,
} from "@/lib/content";
import { caseStudies } from "@/lib/references";
import { firstCallHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pt-24 lg:pb-24">
        <div>
          <p className="eyebrow">{hero.kicker}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.06] text-balance sm:text-6xl lg:text-[4.1rem]">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/85 sm:text-[1.35rem]">
            {hero.lead}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={firstCallHref}
              className="inline-flex h-12 items-center justify-center rounded-md bg-navy px-6 font-semibold text-cream transition-colors hover:bg-brand"
            >
              Unverbindliches Erstgespräch vereinbaren
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-1 text-ink/75 underline decoration-ink/25 underline-offset-4 hover:text-ink hover:decoration-ink"
            >
              Wie ich Dich unterstützen kann
            </Link>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <ContentImage
            src="/thomas-giger.jpg"
            alt={`${site.founder.name}, ${site.founder.headline}`}
            width={720}
            height={900}
            priority
            className="aspect-[4/5] w-full rounded-lg object-cover object-[50%_18%]"
          />
          <figcaption className="mt-3 text-sm text-ink/60">
            <span className="font-semibold text-ink">{site.founder.name}</span> ·
            ehemaliger CEO Dipl. Ing. Fust
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-ink/10 bg-white" aria-label="Erfahrung in Zahlen">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {experienceFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                    {fact.value}
                  </span>
                  <span className="mt-2 block text-base leading-snug text-ink/65">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading kicker={occasions.kicker} title={occasions.title} />
          </div>
          <ol className="divide-y divide-ink/10 border-y border-ink/10">
            {occasions.items.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-7">
                <span className="pt-0.5 text-sm font-semibold text-violet">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-ink/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <ContentImage
            src={audience.image}
            alt={audience.imageAlt}
            width={1152}
            height={864}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            <SectionHeading kicker={audience.kicker} title={audience.title} body={audience.body} />
            <ul className="mt-8 space-y-3">
              {audience.groups.map((group) => (
                <li key={group} className="flex gap-3 text-ink/85">
                  <span className="mt-[0.7rem] h-px w-4 shrink-0 bg-violet" aria-hidden />
                  {group}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-ink/60">{audience.secondary}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading kicker={principles.kicker} title={principles.title} body={principles.body} />
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {principles.items.map((item) => (
              <article key={item.title} className="border-t-2 border-navy pt-5 sm:last:odd:col-span-2">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
          <ContentImage
            src={principles.image}
            alt={principles.imageAlt}
            width={1152}
            height={864}
            className="aspect-[4/3] w-full rounded-lg object-cover lg:aspect-auto lg:h-full"
          />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              kicker="Ausgewählte Referenzen"
              title="Was sich in den Mandaten bewegt hat"
            />
            <Link
              href="/referenzen"
              className="inline-flex shrink-0 items-center gap-2 text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
            >
              Alle Referenzen <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 divide-y divide-ink/10 border-b border-ink/10">
            {caseStudies.slice(0, 3).map((item) => (
              <CaseStudy key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            kicker="Stimmen aus der Zusammenarbeit"
            title="Wie Kundinnen und Kunden die Zusammenarbeit erleben"
          />
          <HomeTestimonials />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Wie ich Dich unterstützen kann"
            title="Welche Frage beschäftigt Dich?"
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            Zusammenarbeit im Detail <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group flex flex-col bg-cream p-7 transition-colors hover:bg-white sm:p-9"
            >
              <p className="text-lg leading-snug text-ink/70 italic">«{service.problem}»</p>
              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-violet">{service.number}</p>
                  <h3 className="mt-1 text-2xl">{service.title}</h3>
                  <p className="mt-2 text-base text-ink/70">{service.headline}</p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-ink" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ProcessSteps />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[0.6fr_1.4fr] md:gap-16">
        <ContentImage
          src="/thomas-giger.jpg"
          alt={site.founder.name}
          width={600}
          height={600}
          className="aspect-square w-full max-w-xs rounded-lg object-cover object-[50%_20%]"
        />
        <div>
          <p className="eyebrow">Persönlich</p>
          <h2 className="mt-4 text-3xl text-balance sm:text-4xl">{about.title}</h2>
          <p className="measure mt-5 text-ink/75">{about.teaser}</p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/ueber-mich"
              className="inline-flex items-center gap-2 font-semibold text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
            >
              Mehr über mich <ArrowRight className="size-4" />
            </Link>
            <a
              href={site.founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
