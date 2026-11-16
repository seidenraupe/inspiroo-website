"use client";

import { useState } from "react";

import { CaseStudy } from "@/components/case-study";
import { pickHomeCaseStudies } from "@/lib/pick-home-case-studies";

export function HomeFeaturedCaseStudies() {
  const [items] = useState(() => pickHomeCaseStudies());

  return (
    <div className="mt-8 divide-y divide-ink/10 border-b border-ink/10">
      {items.map((item) => (
        <CaseStudy key={item.id} item={item} outboundPlacement="home_featured" />
      ))}
    </div>
  );
}