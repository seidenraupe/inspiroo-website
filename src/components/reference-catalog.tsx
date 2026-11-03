"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { DraftHint } from "@/components/draft-hint";
import {
  referenceCategories,
  references,
  type ReferenceCategory,
} from "@/lib/references";
import { cn } from "@/lib/utils";

type Filter = ReferenceCategory | "Alle";

export function ReferenceCatalog() {
  const [filter, setFilter] = useState<Filter>("Alle");

  const visible = useMemo(() => {
    if (filter === "Alle") return references;
    return references.filter((item) => item.categories.includes(filter));
  }, [filter]);

  return (
    <div>
      <div
        className="flex gap-5 overflow-x-auto border-b border-ink/10"
        role="tablist"
        aria-label="Referenzen filtern"
      >
        {referenceCategories.map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(category)}
              className={cn(
                "-mb-px shrink-0 border-b-2 py-3 text-base transition-colors",
                active
                  ? "border-navy font-semibold text-ink"
                  : "border-transparent text-ink/55 hover:text-ink",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-ink/60">
          In dieser Kategorie sind noch keine Referenzen erfasst.
        </p>
      ) : (
        <ul className="divide-y divide-ink/10 border-b border-ink/10">
          {visible.map((item) => (
            <li key={item.id} className="grid gap-4 py-8 md:grid-cols-[17rem_1fr] md:gap-14">
              <div>
                <h3 className="text-xl leading-tight text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-ink/55">{item.sector}</p>
                {item.categories.length > 0 ? (
                  <p className="mt-2 text-sm text-violet">{item.categories.join(" · ")}</p>
                ) : null}
              </div>
              <div>
                <p className="text-base leading-relaxed text-ink/70">{item.summary}</p>
                {item.pending ? (
                  <DraftHint className="mt-4">Mandatsbeschreibung folgt</DraftHint>
                ) : (
                  <p className="mt-3 text-base font-semibold text-ink">
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
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
