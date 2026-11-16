"use client";

import { TestimonialsGrid } from "@/components/testimonials-grid";
import { allVoices } from "@/lib/testimonials";

export function ReferenceTestimonials() {
  return <TestimonialsGrid initialVoices={allVoices} />;
}