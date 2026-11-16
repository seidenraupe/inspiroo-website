import { ArrowUpRight } from "lucide-react";

import { DraftHint } from "@/components/draft-hint";
import { gaTrackAttrs } from "@/lib/ga-track";
import type { CaseStudy as CaseStudyData } from "@/lib/references";

const rows = [
  { key: "situation", label: "Ausgangslage" },
  { key: "contribution", label: "Mein Beitrag" },
  { key: "result", label: "Ergebnis" },
] as const;

type CaseStudyProps = {
  item: CaseStudyData;
  /** Kontext für `reference_outbound` in GA4. */
  outboundPlacement?: "referenzen_case_study" | "home_featured";
};

export function CaseStudy({ item, outboundPlacement = "referenzen_case_study" }: CaseStudyProps) {
  return (
    <article className="grid gap-8 py-12 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-14">
      <div className="min-w-0">
        <p className="text-sm text-ink/55">{item.sector}</p>
        <h3 className="mt-1 text-2xl">{item.client}</h3>
        <p className="mt-3 text-sm leading-relaxed text-violet">{item.tags.join(" · ")}</p>
        {item.link ? (
          <a
            href={item.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
            {...gaTrackAttrs("reference_outbound", {
              placement: outboundPlacement,
              reference_id: item.id,
              link_url: item.link.href,
              link_label: item.link.label,
              outbound: true,
            })}
          >
            {item.link.label}
            <ArrowUpRight className="size-3.5" />
          </a>
        ) : null}
      </div>
      <div className="min-w-0">
        <dl className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-10">
          {rows.map((row) => (
            <div key={row.key} className="min-w-0">
              <dt className="text-xs font-semibold tracking-[0.12em] text-ink/50 uppercase">
                {row.label}
              </dt>
              <dd className="mt-2 max-w-prose text-base leading-relaxed hyphens-auto text-pretty text-ink/80">
                {item[row.key]}
              </dd>
            </div>
          ))}
        </dl>
        {item.draft ? (
          <DraftHint className="mt-6">Entwurf – bitte bestätigen</DraftHint>
        ) : null}
      </div>
    </article>
  );
}
