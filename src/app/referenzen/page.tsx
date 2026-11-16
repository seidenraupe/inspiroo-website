import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { ReferenceCatalog } from "@/components/reference-catalog";
import { ReferenceCatalogAnalytics } from "@/components/reference-catalog-analytics";
import { SectionHeading } from "@/components/section-heading";
import { ReferenceTestimonials } from "@/components/reference-testimonials";
import { leadershipProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Mandate von inspiroo: Strategie, Verwaltungsrat, Sparring und Umsetzung für KMU in Winterthur und der Schweiz – plus Führungserfahrung als CEO von Dipl. Ing. Fust.",
};

export default function ReferencesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <SectionHeading
          as="h1"
          kicker="Referenzen"
          title="Resultate aus der Praxis – im Sparring wie in der eigenen Führung"
          body="Ob strategische Neuausrichtung, digitale Transformation oder Sparring auf Geschäftsleitungsebene: Hier finden Sie Stimmen meiner Kundinnen und Kunden, ausgewählte Mandate sowie Meilensteine aus meiner Zeit als CEO."
        />
      </section>

      <section id="stimmen" className="scroll-mt-24 bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            kicker="Kundenstimmen"
            title="Wie Mandantinnen und Mandanten die Zusammenarbeit erleben"
          />
          <ReferenceTestimonials />
        </div>
      </section>

      <section id="mandate" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          kicker="Alle Mandate"
          title="Strategie, Innovation, Sparring und Lehre"
          body="Eine Auswahl aktueller und abgeschlossener Begleitungen – vom Verwaltungsratsmandat bis zum Praxis-Referat. Wo ich die Aufgabe beschrieben habe, lässt sie sich in der Zeile aufklappen."
        />
        <div className="mt-12">
          <ReferenceCatalog />
          <ReferenceCatalogAnalytics />
        </div>
      </section>

      <section id="fuehrungserfahrung" className="scroll-mt-24 border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            kicker="Führungserfahrung"
            title="Veränderungen, die ich als CEO verantwortet habe"
            body="Aus 13 Jahren als CEO der Dipl. Ing. Fust AG und Verwaltungsratsmandaten in Handel und Service. Diese Erfahrung fliesst heute in jedes Mandat ein."
          />
          <div className="border-t border-ink/10">
            {leadershipProjects.map((project) => (
              <article key={project.title} className="border-b border-ink/10 py-6">
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/75">{project.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
