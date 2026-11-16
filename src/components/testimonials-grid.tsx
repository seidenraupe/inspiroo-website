"use client";

import { useEffect, useState } from "react";

import { Testimonial } from "@/components/testimonial";
import { shuffle } from "@/lib/shuffle";
import type { ClientVoice } from "@/lib/testimonials";

type TestimonialsGridProps = {
  /** Feste SSR-Reihenfolge; im Browser wird einmal neu gemischt. */
  initialVoices: readonly ClientVoice[];
  limit?: number;
  className?: string;
};

export function TestimonialsGrid({ initialVoices, limit, className }: TestimonialsGridProps) {
  const [voices, setVoices] = useState<ClientVoice[]>(() => [...initialVoices]);

  useEffect(() => {
    const base = [...initialVoices];
    const pool = limit ? shuffle(base).slice(0, limit) : shuffle(base);
    // Nach dem Mount mischen, damit das statische HTML alle Stimmen enthält.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- einmalig pro Besuch
    setVoices(pool);
  }, [initialVoices, limit]);

  return (
    <div className={className ?? "mt-12 grid gap-6 lg:grid-cols-3"}>
      {voices.map((voice) => (
        <Testimonial key={voice.id} voice={voice} />
      ))}
    </div>
  );
}