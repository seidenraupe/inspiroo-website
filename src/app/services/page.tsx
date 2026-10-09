import type { Metadata } from "next";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { services, servicesIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Boxen-Stopp, Co-Pilot, Navigator und Masterplan: bedarfsorientierte Beratung für Strategie, Führung, Marketing und digitale Transformation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-6 sm:px-8 sm:pt-24">
        <p className="eyebrow">Services</p>
        <h1 className="font-heading mt-4 max-w-3xl text-5xl text-balance sm:text-6xl">
          Bedarfsorientierte Begleitung statt Standardpaket
        </h1>
        <p className="measure mt-6 text-ink/70">{servicesIntro}</p>
      </section>
      <section className="mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-8 py-14 md:grid-cols-[5rem_1fr_14rem] md:items-start"
            >
              <p className="font-heading text-3xl text-brand">{service.number}</p>
              <div className="max-w-xl">
                <h2 className="font-heading text-4xl">{service.title}</h2>
                <p className="mt-4 text-ink/70">{service.summary}</p>
                <p className="mt-3 text-ink/85">{service.body}</p>
              </div>
              <ContentImage
                src={service.image}
                alt={service.imageAlt}
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-sm object-cover md:mt-1"
              />
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
