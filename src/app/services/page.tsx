import type { Metadata } from "next";
import { Check } from "lucide-react";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { Testimonial } from "@/components/testimonial";
import { services, servicesIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zusammenarbeit mit KMU: Boxen-Stopp, Co-Pilot, Navigator, Masterplan",
  description:
    "Standortbestimmung, Sparring für CEO und Geschäftsleitung, Begleitung der Umsetzung und Strategieentwicklung: vier Formen der Zusammenarbeit für KMU in der Schweiz – mit der Erfahrung eines ehemaligen CEO.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-20">
        <SectionHeading
          as="h1"
          kicker={servicesIntro.kicker}
          title={servicesIntro.title}
          body={servicesIntro.body}
        />
        <nav aria-label="Formate" className="mt-10 flex flex-wrap gap-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-md border border-ink/15 bg-white px-4 py-2 text-base text-ink/80 transition-colors hover:border-ink/40 hover:text-ink"
            >
              <span className="mr-2 text-violet">{service.number}</span>
              {service.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {services.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-28 gap-10 border-t border-ink/10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="text-sm font-semibold text-violet">
                {service.number} · {service.title}
              </p>
              <p className="mt-4 text-xl leading-snug text-ink/60 italic">
                «{service.problem}»
              </p>
              <h2 className="mt-5 text-3xl text-balance sm:text-[2.2rem]">
                {service.headline}
              </h2>
              <p className="mt-5 text-ink/75">{service.body}</p>
              <h3 className="mt-8 text-sm font-semibold tracking-[0.12em] text-ink/50 uppercase">
                Was Du bekommst
              </h3>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-ink/85">
                    <Check className="mt-1 size-4 shrink-0 text-violet" aria-hidden />
                    {outcome}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink/55">
                <span className="font-semibold text-ink/70">Format:</span> {service.format}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <ContentImage
                src={service.image}
                alt={service.imageAlt}
                width={1152}
                height={864}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <Testimonial variant="inline" voice={service.voice} />
            </div>
          </section>
        ))}
      </div>

      <ProcessSteps />
      <CtaBand />
    </>
  );
}
