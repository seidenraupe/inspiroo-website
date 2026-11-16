"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

/** Erfasst Filterwechsel im Mandatskatalog (Radios, CSS-Filter). */
export function ReferenceCatalogAnalytics() {
  useEffect(() => {
    const root = document.querySelector(".reference-catalog");
    if (!root) return;

    function onChange(event: Event) {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.type !== "radio" || target.name !== "referenz-filter") return;
      trackEvent("reference_filter", { category: target.id.replace(/^referenz-filter-/, "") });
    }

    root.addEventListener("change", onChange);
    return () => root.removeEventListener("change", onChange);
  }, []);

  return null;
}