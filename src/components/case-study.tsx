import { ArrowUpRight } from "lucide-react";

import { DraftHint } from "@/components/draft-hint";
import type { CaseStudy as CaseStudyData } from "@/lib/references";

const rows = [
  { key: "situation", label: "Ausgangslage" },
  { key: "contribution", label: "Mein Beitrag" },
  { key: "result", label: "Ergebnis" },
] as const;

export function CaseStudy({ item }: { item: CaseStudyData }) {
  return (
    <article className="grid gap-8 py-12 md:grid-cols-[17rem_1fr] md:gap-14">
      <div>
        <p className="text-sm text-ink/55">{item.sector}</p>
        <h3 className="mt-1 text-2xl">{item.client}</h3>
        <p className="mt-3 text-sm leading-relaxed text-violet">{item.tags.join(" · ")}</p>
        {item.link ? (
          <a
            href={item.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            {item.link.label}
            <ArrowUpRight className="size-3.5" />
          </a>
        ) : null}
      </div>
      <div>
        <dl className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {rows.map((row) => (
            <div key={row.key}>
              <dt className="text-xs font-semibold tracking-[0.12em] text-ink/50 uppercase">
                {row.label}
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-ink/80">{item[row.key]}</dd>
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
