import type { Metadata } from "next";

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
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-xs tracking-[0.2em] text-violet uppercase">
          Services
        </p>
        <h1 className="font-heading mt-3 max-w-3xl text-5xl leading-tight text-balance">
          Bedarfsorientierte Begleitung statt Standardpaket
        </h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">
          {servicesIntro}
        </p>
        <div className="mt-14 space-y-5">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-6 rounded-[1.6rem] border border-ink/8 bg-white p-7 md:grid-cols-[7rem_1fr] md:p-10"
            >
              <p className="font-heading text-3xl text-brand">{service.number}</p>
              <div>
                <h2 className="font-heading text-3xl">{service.title}</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
                  {service.summary}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
                  {service.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
