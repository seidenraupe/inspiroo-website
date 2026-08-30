import type { Metadata } from "next";

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
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-xs tracking-[0.2em] text-violet uppercase">
          Referenzen-Katalog
        </p>
        <h1 className="font-heading mt-3 max-w-3xl text-5xl leading-tight text-balance">
          Mandate, Impulse und Praxis-Referate
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink/70">
          Eine Auswahl aktueller Begleitungen — von Strategie- und
          VR-Mandaten über Product-Market-Fit bis zu Impuls-Beratungen und
          Lehrbeiträgen. Die Mandate beschreiben die konkrete Zusammenarbeit,
          nicht erfundene Kennzahlen.
        </p>
        <div className="mt-12">
          <ReferenceCatalog />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs tracking-[0.2em] text-violet uppercase">
            Führungserfahrung
          </p>
          <h2 className="font-heading mt-3 max-w-3xl text-4xl text-balance">
            Projekte und Erfahrungen aus der operativen Leitung
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
            Aus über dreizehn Jahren als CEO von Dipl. Ing. Fust und
            Verwaltungsratsmandaten in Konsumgüter- und Service-Märkten.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {leadershipProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-ink/8 bg-cream p-6"
              >
                <h3 className="font-heading text-2xl leading-tight">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {project.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
