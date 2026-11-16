"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToCurrentHash() {
  const { hash } = window.location;
  if (!hash || hash === "#") return;

  const id = decodeURIComponent(hash.slice(1));
  const run = () => document.getElementById(id)?.scrollIntoView({ block: "start" });

  requestAnimationFrame(() => requestAnimationFrame(run));
}

/** Client-Navigation scrollt in Next.js nicht zuverlässig zu #anker – dieser Effekt ergänzt das. */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToCurrentHash();
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToCurrentHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}