"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

const DATASET_TO_PARAM: Record<string, string> = {
  gaChannel: "channel",
  gaPlacement: "placement",
  gaFormat: "format",
  gaAction: "action",
  gaMethod: "method",
  gaLinkUrl: "link_url",
  gaOutbound: "outbound",
  gaCategory: "category",
  gaReferenceId: "reference_id",
  gaLinkLabel: "link_label",
};

/** Liest `data-ga-*`-Attribute von geklickten Links und Buttons. */
function paramsFromElement(el: HTMLElement): Record<string, string> {
  const params: Record<string, string> = {};
  for (const [dataKey, paramKey] of Object.entries(DATASET_TO_PARAM)) {
    const value = el.dataset[dataKey as keyof DOMStringMap];
    if (value) params[paramKey] = value;
  }
  return params;
}

/** Zentrale Erfassung von Klicks auf Elemente mit `data-ga-event`. */
export function GaInteractionTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-ga-event]");
      if (!el?.dataset.gaEvent) return;
      trackEvent(el.dataset.gaEvent, paramsFromElement(el));
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}