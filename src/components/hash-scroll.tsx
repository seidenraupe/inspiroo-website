"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/** Ohne `scroll-smooth` — sonst springt `scrollTo` nicht zuverlässig nach oben. */
function forceScrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function scrollToCurrentHash(maxAttempts = 12): boolean {
  const { hash } = window.location;
  if (!hash || hash === "#") return false;

  const id = decodeURIComponent(hash.slice(1));
  const attempt = (remaining: number) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ block: "start" });
      return;
    }
    if (remaining > 0) {
      requestAnimationFrame(() => attempt(remaining - 1));
    }
  };

  requestAnimationFrame(() => requestAnimationFrame(() => attempt(maxAttempts)));
  return true;
}

function scheduleScrollToTop() {
  forceScrollToTop();
  const raf1 = requestAnimationFrame(() => {
    forceScrollToTop();
    requestAnimationFrame(forceScrollToTop);
  });
  const timeouts = [0, 50, 120, 300].map((delay) =>
    window.setTimeout(forceScrollToTop, delay),
  );

  return () => {
    cancelAnimationFrame(raf1);
    timeouts.forEach(clearTimeout);
  };
}

/**
 * Stellt Scroll nach Client-Navigation sicher. Next.js scrollt bei manchen
 * Routen nicht nach oben, wenn das Ziel-Fragment schon im Viewport liegt —
 * die alte Scrollposition bleibt dann stehen (v. a. nach tiefer Home-Scroll).
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (scrollToCurrentHash()) return;
    forceScrollToTop();
  }, [pathname]);

  useEffect(() => {
    if (scrollToCurrentHash()) return;
    return scheduleScrollToTop();
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