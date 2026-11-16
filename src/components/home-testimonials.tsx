"use client";

import { useMemo } from "react";

import { TestimonialsGrid } from "@/components/testimonials-grid";
import { site } from "@/lib/site";
import { referenceVoices } from "@/lib/testimonials";

export function HomeTestimonials() {
  const initialVoices = useMemo(
    () => referenceVoices.filter((v) => site.showDraftHints || v.quote !== null),
    [],
  );

  return <TestimonialsGrid initialVoices={initialVoices} limit={3} />;
}