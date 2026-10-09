import type { Metadata } from "next";

import { ContentImage } from "@/components/content-image";
import { CtaBand } from "@/components/cta-band";
import { ReferenceCatalog } from "@/components/reference-catalog";
import { leadershipProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Referenzen-Katalog von inspiroo: Strategie, Innovation, eCommerce, Coaching, Impuls-Beratung und Praxis-Referate.",
};

export default function ReferencesPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="eyebrow">Referenzen-Katalog</p>
        <h1 className="font-heading mt-4 max-w-3xl text-5xl text-balance sm:text-6xl">
          Mandate, Impulse und Praxis-Referate
        </h1>
        <p className="measure mt-6 text-ink/70">
          Eine Auswahl aktueller Begleitungen — von Strategie- und VR-Mandaten
          über Product-Market-Fit bis zu Impuls-Beratungen und Lehrbeiträgen.
          Die Mandate beschreiben die konkrete Zusammenarbeit, nicht erfundene
          Kennzahlen.
        </p>
        <div className="mt-14">
          <ReferenceCatalog />
        </div>
      </section>

      <section className="mt-8 border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <p className="eyebrow">Führungserfahrung</p>
          <h2 className="font-heading mt-4 max-w-3xl text-4xl text-balance sm:text-5xl">
            Projekte aus der operativen Leitung
          </h2>
          <p className="measure mt-5 text-ink/70">
            Aus über dreizehn Jahren als CEO von Dipl. Ing. Fust und
            Verwaltungsratsmandaten in Konsumgüter- und Service-Märkten.
          </p>
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {leadershipProjects.map((project) => (
              <article
                key={project.title}
                className="grid gap-6 py-10 md:grid-cols-[7.5rem_1fr] md:gap-10"
              >
                <ContentImage
                  src={project.image}
                  alt={project.imageAlt}
                  width={1024}
                  height={1024}
                  className="h-28 w-28 object-contain"
                />
                <div className="max-w-2xl">
                  <h3 className="font-heading text-2xl leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {project.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
