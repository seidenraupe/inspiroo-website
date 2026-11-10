"use client";

import { useState } from "react";

import { Testimonial } from "@/components/testimonial";
import type { ClientVoice } from "@/lib/testimonials";
import { referenceVoices } from "@/lib/testimonials";

const POOL = referenceVoices;
const COUNT = 3;

function shufflePick(items: ClientVoice[], count: number): ClientVoice[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

export function HomeTestimonialsSkeleton() {
  return (
    <div
      className="mt-12 grid gap-6 lg:grid-cols-3"
      aria-busy="true"
      aria-label="Kundenstimmen werden geladen"
    >
      {Array.from({ length: COUNT }, (_, i) => (
        <div
          key={i}
          className="flex min-h-[22rem] flex-col rounded-lg border border-ink/10 bg-white p-7 sm:p-8"
          aria-hidden
        >
          <div className="h-10 w-32 rounded bg-ink/8" />
          <div className="mt-7 flex-1 space-y-3">
            <div className="h-4 w-full rounded bg-ink/8" />
            <div className="h-4 w-[90%] rounded bg-ink/8" />
            <div className="h-4 w-[70%] rounded bg-ink/8" />
          </div>
          <div className="mt-6 h-10 w-40 rounded bg-ink/8" />
        </div>
      ))}
    </div>
  );
}

export function HomeTestimonials() {
  const [voices] = useState(() => shufflePick(POOL, COUNT));

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {voices.map((voice) => (
        <Testimonial key={voice.id} voice={voice} />
      ))}
    </div>
  );
}
