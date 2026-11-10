"use client";

import dynamic from "next/dynamic";

import { HomeTestimonialsSkeleton } from "@/components/home-testimonials";

const HomeTestimonials = dynamic(
  () => import("@/components/home-testimonials").then((mod) => mod.HomeTestimonials),
  { ssr: false, loading: () => <HomeTestimonialsSkeleton /> },
);

export function HomeTestimonialsLazy() {
  return <HomeTestimonials />;
}
