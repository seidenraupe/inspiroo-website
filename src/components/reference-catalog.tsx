import { ArrowUpRight } from "lucide-react";

import { DraftHint } from "@/components/draft-hint";
import { referenceCategories, references } from "@/lib/references";

function filterDomId(category: string) {
  return `referenz-filter-${category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

const filterStyles = referenceCategories
  .map((category) => {
    const id = filterDomId(category);
    const active = `.reference-catalog:has(#${id}:checked) label[for="${id}"]{border-color:var(--navy);color:var(--ink);font-weight:600}`;
    if (category === "Alle") return active;
    const hide = `.reference-catalog:has(#${id}:checked) .reference-card:not([data-categories~="${category}"]){display:none}`;
    return `${active}${hide}`;
  })
  .join("");

/**
 * Server Component: Filter und Karten stehen im statischen HTML.
 * Die Auswahl läuft über Radios und CSS, damit sie ohne JavaScript erhalten bleibt.
 */
export function ReferenceCatalog() {
  return (
    <div className="reference-catalog">
      <style href="reference-catalog-filter" precedence="default">{`${filterStyles}
.reference-catalog label:has(:focus-visible){outline:2px solid var(--ring);outline-offset:3px}`}</style>
      <div
        className="flex gap-5 overflow-x-auto border-b border-ink/10"
        role="radiogroup"
        aria-label="Referenzen filtern"
      >
        {referenceCategories.map((category) => {
          const id = filterDomId(category);
          return (
            <label
              key={category}
              htmlFor={id}
              className="-mb-px shrink-0 cursor-pointer border-b-2 border-transparent py-3 text-base text-ink/55 hover:text-ink"
            >
              <input
                id={id}
                type="radio"
                name="referenz-filter"
                defaultChecked={category === "Alle"}
                className="sr-only"
              />
              {category}
            </label>
          );
        })}
      </div>

      <ul className="divide-y divide-ink/10 border-b border-ink/10">
        {references.map((item) => (
          <li
            key={item.id}
            data-categories={item.categories.join(" ")}
            className="reference-card grid gap-4 py-8 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-14"
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
    </div>
  );
}
