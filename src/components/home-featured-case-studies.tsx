"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DraftHint } from "@/components/draft-hint";
import { gaTrackAttrs } from "@/lib/ga-track";
import { pickHomeCaseStudies } from "@/lib/pick-home-case-studies";
import { referenceAnchorForCaseStudy } from "@/lib/references";

export function HomeFeaturedCaseStudies() {
  const [items] = useState(() => pickHomeCaseStudies());

  return (
    <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => {
        const anchor = referenceAnchorForCaseStudy(item.id);
        return (
          <article
            key={item.id}
            className="grid gap-4 py-8 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:items-start lg:gap-14"
          >
            <div className="min-w-0">
              <p className="text-sm text-ink/55">{item.sector}</p>
              <h3 className="mt-1 text-2xl">{item.client}</h3>
            </div>
            <div className="min-w-0">
              <p className="text-base leading-relaxed hyphens-auto text-pretty text-ink/75">
                {item.result}
              </p>
              {item.draft ? (
                <DraftHint className="mt-4">Entwurf – bitte bestätigen</DraftHint>
              ) : null}
              <Link
                href={`/referenzen/#${anchor}`}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
                {...gaTrackAttrs("reference_teaser", {
                  placement: "home",
                  reference_id: anchor,
                })}
              >
                Zum Mandat
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
