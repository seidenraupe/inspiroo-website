"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
        className="flex gap-2 overflow-x-auto pb-2"
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
                "shrink-0 border-b px-1 py-2 text-sm transition-colors",
                active
                  ? "border-ink text-ink"
                  : "border-transparent text-ink/45 hover:text-ink",
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
        <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {visible.map((item) => (
            <li key={item.id} className="grid gap-4 py-8 md:grid-cols-[16rem_1fr]">
              <div>
                <h3 className="font-heading text-2xl leading-tight text-ink">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-ink/50">{item.sector}</p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {item.categories.map((category) => (
                    <span key={category} className="text-xs text-violet">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-ink/70">{item.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink">
                  {item.mandates.map((mandate) => (
                    <li key={mandate}>{mandate}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-brand hover:underline"
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
