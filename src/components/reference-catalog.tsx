"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
                "shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                active
                  ? "border-brand bg-brand text-white"
                  : "border-ink/12 bg-white text-ink/70 hover:border-ink/30 hover:text-ink",
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
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_12px_40px_-28px_rgba(16,32,22,0.45)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.16em] text-violet uppercase">
                    {item.sector}
                  </p>
                  <h3 className="font-heading mt-2 text-2xl leading-tight text-ink">
                    {item.name}
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {item.categories.map((category) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="bg-moss text-ink"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {item.summary}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink">
                {item.mandates.map((mandate) => (
                  <li key={mandate} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{mandate}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
