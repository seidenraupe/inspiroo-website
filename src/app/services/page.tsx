import type { Metadata } from "next";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { services, servicesIntro } from "@/lib/content";
import { cn } from "@/lib/utils";

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
        <div className="mt-14 space-y-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="overflow-hidden rounded-[1.6rem] border border-ink/8 bg-white"
            >
              <div
                className={cn(
                  "grid items-stretch md:grid-cols-2",
                  index % 2 === 1 && "md:[&>figure]:order-2",
                )}
              >
                <figure className="min-h-64 bg-ink/5 md:min-h-[22rem]">
                  <ContentImage
                    src={service.image}
                    alt={service.imageAlt}
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <p className="font-heading text-3xl text-brand">
                    {service.number}
                  </p>
                  <h2 className="font-heading mt-2 text-3xl">{service.title}</h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
                    {service.summary}
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/80">
                    {service.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
