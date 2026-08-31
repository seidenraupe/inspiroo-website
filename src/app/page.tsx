import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { PhotoBreak } from "@/components/photo-break";
import { Button } from "@/components/ui/button";
import {
  approachIntro,
  approachPillars,
  hero,
  photos,
  services,
  situations,
} from "@/lib/content";
import { featuredReferences } from "@/lib/references";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <ContentImage
          src={hero.image}
          alt=""
          width={1400}
          height={788}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,32,22,0.92)_0%,rgba(16,32,22,0.72)_48%,rgba(16,32,22,0.42)_100%),radial-gradient(circle_at_top_right,rgba(32,152,64,0.28),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-xs tracking-[0.22em] text-brand uppercase">
              {hero.kicker}
            </p>
            <h1 className="font-heading mt-4 text-5xl leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-xl text-cream/85">{hero.lead}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/68">
              {hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/kontakt" />}
                size="lg"
                className="h-11 px-5"
              >
                Gespräch vereinbaren
              </Button>
              <Button
                render={<Link href="/referenzen" />}
                variant="outline"
                size="lg"
                className="h-11 border-white/25 bg-transparent px-5 text-cream hover:bg-white/10 hover:text-cream"
              >
                Referenzen ansehen
              </Button>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-brand/20 blur-2xl" />
            <ContentImage
              src="/thomas-giger.jpg"
              alt={`${site.founder.name}, ${site.founder.role}`}
              width={720}
              height={720}
              priority
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_18%] ring-1 ring-white/15"
            />
            <figcaption className="absolute inset-x-5 bottom-5 rounded-2xl bg-ink/75 px-4 py-3 text-sm backdrop-blur-sm">
              <p className="font-medium">{site.founder.name}</p>
              <p className="text-cream/70">
                {site.founder.role}, {site.legalName}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-violet uppercase">
            Typische Situationen
          </p>
          <h2 className="font-heading mt-3 text-4xl text-balance">
            Wenn der nächste Schritt unklar ist
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {situations.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-ink/8 bg-white"
            >
              <ContentImage
                src={item.image}
                alt={item.imageAlt}
                width={816}
                height={1456}
                className="aspect-[3/4] w-full object-cover object-center"
              />
              <div className="p-6">
                <div className="dash-rule" />
                <h3 className="font-heading mt-5 text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink">
                  {item.close}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] text-violet uppercase">
              {approachIntro.kicker}
            </p>
            <h2 className="font-heading mt-3 text-4xl text-balance">
              {approachIntro.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              {approachIntro.body}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {approachPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="overflow-hidden rounded-2xl border border-ink/8 bg-cream"
              >
                <div className="bg-white px-6 pt-6">
                  <ContentImage
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    width={1024}
                    height={1024}
                    className="mx-auto aspect-square w-full max-w-sm object-contain"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="font-heading text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {pillar.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoBreak
        src={photos.teamSeven.src}
        alt={photos.teamSeven.alt}
        caption="Sparring, Coaching und Strategie — immer mit dem Team im Blick."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] text-violet uppercase">
              Services
            </p>
            <h2 className="font-heading mt-3 text-4xl">
              Vier Formate, ein Anspruch
            </h2>
          </div>
          <Button render={<Link href="/services" />} variant="outline" className="h-10 px-4">
            Alle Services
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-2xl border border-ink/8 bg-white"
            >
              <ContentImage
                src={service.image}
                alt={service.imageAlt}
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <p className="font-heading text-sm text-brand">{service.number}</p>
                <h3 className="font-heading mt-2 text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.summary} {service.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-moss/70">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="relative min-h-72 overflow-hidden rounded-[1.6rem]">
            <ContentImage
              src={photos.collaboration.src}
              alt={photos.collaboration.alt}
              width={816}
              height={1456}
              className="h-full w-full object-cover object-[50%_30%]"
            />
          </figure>
          <div>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs tracking-[0.2em] text-violet uppercase">
                  Referenzen
                </p>
                <h2 className="font-heading mt-3 text-4xl text-balance">
                  Mandate, die den Katalog prägen
                </h2>
              </div>
              <Button render={<Link href="/referenzen" />} variant="outline" className="h-10 px-4">
                Zum Katalog
              </Button>
            </div>
            <ul className="mt-8 grid gap-5">
              {featuredReferences.map((item) => (
                <li key={item.id} className="rounded-2xl bg-white p-6">
                  <p className="text-xs tracking-[0.16em] text-violet uppercase">
                    {item.sector}
                  </p>
                  <h3 className="font-heading mt-2 text-2xl">{item.name}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-ink/75">
                    {item.mandates.map((mandate) => (
                      <li key={mandate}>{mandate}</li>
                    ))}
                  </ul>
                  <a
                    href={item.links[0]?.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
                    {item.links[0]?.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
