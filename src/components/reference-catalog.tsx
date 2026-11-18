import { ReferenceCatalogList } from "@/components/reference-catalog-list";
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
        className="flex flex-wrap gap-x-5 gap-y-1 border-b border-ink/10 sm:overflow-visible max-sm:-mx-4 max-sm:overflow-x-auto max-sm:overflow-y-hidden max-sm:px-4 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden"
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

      <ReferenceCatalogList items={references} />
    </div>
  );
}
