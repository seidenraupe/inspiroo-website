"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { trackEvent } from "@/lib/analytics";

/** Formular ohne JavaScript: Redirect mit `?sent=1` → einmaliges GA-Event. */
export function ContactThanksTracker() {
  const searchParams = useSearchParams();
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    if (searchParams.get("sent") !== "1") return;
    tracked.current = true;
    trackEvent("contact_form_submit", {
      method: "web3forms_redirect",
      placement: "contact_form",
    });
  }, [searchParams]);

  return null;
}