"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToCurrentHash() {
  const { hash } = window.location;
  if (!hash || hash === "#") return;

  const id = decodeURIComponent(hash.slice(1));
  const run = () => document.getElementById(id)?.scrollIntoView({ block: "start" });

  requestAnimationFrame(() => requestAnimationFrame(run));
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

/** Scroll bei Client-Navigation: ohne Hash nach oben, mit Hash zum Anker (Next.js-Export unzuverlässig). */
export function HashScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === "#") scrollToTop();
  }, [pathname]);

  useEffect(() => {
    scrollToCurrentHash();
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      scrollToCurrentHash();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}