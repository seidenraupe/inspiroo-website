import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import {
  about,
  approachIntro,
  approachPillars,
  hero,
  services,
  situations,
} from "@/lib/content";
import { featuredReferences } from "@/lib/references";
import { site } from "@/lib/site";

const facts = [
  { value: "30+", label: "Jahre in C-Level-Rollen" },
  { value: "13", label: "Jahre CEO, Dipl. Ing. Fust" },
  { value: "2023", label: "Start als unabhängiger Berater" },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-5xl items-end gap-12 px-5 pt-16 pb-8 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pt-28">
        <div>
          <p className="eyebrow">{hero.kicker}</p>
          <h1 className="font-heading mt-5 text-5xl text-balance sm:text-6xl lg:text-[4.4rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-2xl leading-snug text-ink/80">
            {hero.lead}
          </p>
          <p className="measure mt-5 text-ink/65">{hero.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              render={<Link href="/kontakt" />}
              size="lg"
              className="h-11 rounded-full px-5"
            >
              Gespräch vereinbaren
            </Button>
            <Link
              href="/referenzen"
              className="px-1 text-sm text-ink/70 underline decoration-ink/25 underline-offset-4 hover:text-ink hover:decoration-ink"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <ContentImage
            src="/thomas-giger.jpg"
            alt={`${site.founder.name}, ${site.founder.role}`}
            width={720}
            height={720}
            priority
            className="aspect-[4/5] w-full rounded-sm object-cover object-[50%_18%]"
          />
          <figcaption className="mt-3 text-sm text-ink/55">
            {site.founder.name} · {site.founder.role}
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <blockquote className="max-w-3xl">
          <p className="font-heading text-3xl leading-snug text-balance sm:text-4xl">
            «{about.quoteOriginal}»
          </p>
          <footer className="mt-4 text-sm text-ink/50">{about.quoteSource}</footer>
        </blockquote>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-8 sm:px-8 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="py-6">
              <p className="font-heading text-4xl text-brand">{fact.value}</p>
              <p className="mt-2 text-sm text-ink/60">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Typische Situationen</p>
        <h2 className="font-heading mt-4 max-w-xl text-4xl text-balance sm:text-5xl">
          Wenn der nächste Schritt unklar ist
        </h2>
        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {situations.map((item) => (
            <article
              key={item.title}
              className="grid gap-8 py-12 md:grid-cols-[11rem_1fr] md:gap-12"
            >
              <ContentImage
                src={item.image}
                alt={item.imageAlt}
                width={816}
                height={1456}
                className="aspect-[4/5] w-full rounded-sm object-cover md:aspect-[3/4]"
              />
              <div className="max-w-xl">
                <h3 className="font-heading text-3xl leading-tight">{item.title}</h3>
                <p className="mt-4 text-ink/70">{item.body}</p>
                <p className="mt-4 text-ink/85">{item.close}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="eyebrow">{approachIntro.kicker}</p>
          <h2 className="font-heading mt-4 max-w-xl text-4xl text-balance sm:text-5xl">
            {approachIntro.title}
          </h2>
          <p className="measure mt-5 text-ink/70">{approachIntro.body}</p>
          <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {approachPillars.map((pillar) => (
              <article key={pillar.title}>
                <ContentImage
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  width={1024}
                  height={1024}
                  className="h-36 w-36 object-contain"
                />
                <h3 className="font-heading mt-5 text-3xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="font-heading mt-4 text-4xl sm:text-5xl">
              Vier Formate, ein Anspruch
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-ink/70 underline decoration-ink/25 underline-offset-4 hover:text-ink"
          >
            Alle Services
          </Link>
        </div>
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {services.map((service) => (
            <article
              key={service.slug}
              className="grid items-center gap-6 py-8 md:grid-cols-[4.5rem_1fr_9rem]"
            >
              <p className="font-heading text-2xl text-brand">{service.number}</p>
              <div>
                <h3 className="font-heading text-3xl">{service.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">
                  {service.summary}
                </p>
              </div>
              <ContentImage
                src={service.image}
                alt={service.imageAlt}
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-sm object-cover md:h-24 md:w-24"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Referenzen</p>
              <h2 className="font-heading mt-4 max-w-xl text-4xl text-balance sm:text-5xl">
                Mandate, die den Katalog prägen
              </h2>
            </div>
            <Link
              href="/referenzen"
              className="text-sm text-ink/70 underline decoration-ink/25 underline-offset-4 hover:text-ink"
            >
              Zum Katalog
            </Link>
          </div>
          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {featuredReferences.map((item) => (
              <li key={item.id} className="grid gap-3 py-8 sm:grid-cols-[14rem_1fr]">
                <div>
                  <h3 className="font-heading text-2xl">{item.name}</h3>
                  <p className="mt-1 text-sm text-ink/50">{item.sector}</p>
                </div>
                <div>
                  <p className="text-ink/75">{item.mandates.join(" · ")}</p>
                  <a
                    href={item.links[0]?.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-brand hover:underline"
                  >
                    {item.links[0]?.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
