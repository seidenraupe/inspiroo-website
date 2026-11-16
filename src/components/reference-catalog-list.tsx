"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { DraftHint } from "@/components/draft-hint";
import { gaTrackAttrs } from "@/lib/ga-track";
import {
  caseStudyForReference,
  shuffledMandateList,
  type Reference,
} from "@/lib/references";

type ReferenceCatalogListProps = {
  /** Feste SSR-Reihenfolge; im Browser wird je Besuch innerhalb der zwei Gruppen gemischt. */
  items: readonly Reference[];
};

export function ReferenceCatalogList({ items }: ReferenceCatalogListProps) {
  const [ordered, setOrdered] = useState<Reference[]>(() => [...items]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- einmalig pro Besuch
    setOrdered(shuffledMandateList(items));
  }, [items]);

  return (
    <ul className="divide-y divide-ink/10 border-b border-ink/10">
      {ordered.map((item) => {
        const study = caseStudyForReference(item.id);
        return (
          <li
            key={item.id}
            id={item.id}
            data-categories={item.categories.join(" ")}
            className="reference-card scroll-mt-24 grid gap-4 py-8 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-14"
          >
            <div className="min-w-0">
              <h3 className="text-xl leading-tight text-ink">{item.name}</h3>
              <p className="mt-1 text-sm text-ink/55">{item.sector}</p>
              {item.categories.length > 0 ? (
                <p className="mt-2 text-sm text-violet">{item.categories.join(" · ")}</p>
              ) : null}
            </div>
            <div className="min-w-0">
              <p className="text-base leading-relaxed hyphens-auto text-pretty text-ink/70">
                {item.summary}
              </p>
              {item.pending ? (
                <DraftHint className="mt-4">Mandatsbeschreibung folgt</DraftHint>
              ) : (
                <p className="mt-3 text-base font-semibold hyphens-auto text-pretty text-ink">
                  {item.mandates.join(" · ")}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                    {...gaTrackAttrs("reference_outbound", {
                      placement: "reference_catalog",
                      reference_id: item.id,
                      link_url: link.href,
                      link_label: link.label,
                      outbound: true,
                    })}
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
              {study ? (
                <details className="group mt-5 border-t border-ink/10 pt-4">
                  <summary className="flex cursor-pointer list-none items-center gap-2 text-base font-semibold text-navy [&::-webkit-details-marker]:hidden">
                    <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" />
                    Aufgabe und Ergebnis
                  </summary>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-3 sm:gap-6">
                    {(
                      [
                        ["Ausgangslage", study.situation],
                        ["Mein Beitrag", study.contribution],
                        ["Ergebnis", study.result],
                      ] as const
                    ).map(([label, text]) => (
                      <div key={label} className="min-w-0">
                        <dt className="text-xs font-semibold tracking-[0.12em] text-ink/50 uppercase">
                          {label}
                        </dt>
                        <dd className="mt-2 text-base leading-relaxed hyphens-auto text-pretty text-ink/80">
                          {text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {study.draft ? (
                    <DraftHint className="mt-4">Entwurf – bitte bestätigen</DraftHint>
                  ) : null}
                </details>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}