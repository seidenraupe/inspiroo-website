"use client";

import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics";
import {
  bookingEmbedNamespace,
  bookingOrigin,
  calEmbedUi,
} from "@/lib/cal";

const EMBED_SRC = "https://app.cal.com/embed/embed.js";

type CalApi = ((...args: unknown[]) => void) & {
  q: unknown[][];
  ns?: Record<string, CalApi>;
  loaded?: boolean;
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

/** Cal.com-Stub wie im offiziellen Embed-Snippet, einmal pro Seite. */
function ensureCal(): CalApi {
  if (window.Cal) return window.Cal;

  const Cal = function Cal(...args: unknown[]) {
    const cal = window.Cal!;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      const script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      document.head.appendChild(script);
      cal.loaded = true;
    }
    if (args[0] === "init") {
      function calNs(...ar: unknown[]) {
        (calNs as CalApi).q.push(ar);
      }
      const api = calNs as CalApi;
      api.q = [];
      const namespace = args[1];
      if (typeof namespace === "string") {
        cal.ns = cal.ns || {};
        cal.ns[namespace] = cal.ns[namespace] || api;
        cal.ns[namespace].q.push(args);
        cal.q.push(["initNamespace", namespace]);
      } else {
        cal.q.push(args);
      }
      return;
    }
    cal.q.push(args);
  } as CalApi;
  Cal.q = [];
  Cal.ns = {};
  window.Cal = Cal;
  return Cal;
}

type CalBookingProps = {
  calLink: string;
};

/** Inline-Kalender von Cal.com, optisch an inspiroo gebunden – Teil des Website-Deploys. */
export function CalBooking({ calLink }: CalBookingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const Cal = ensureCal();
    if (!Cal.ns?.[bookingEmbedNamespace]) {
      Cal("init", bookingEmbedNamespace, { origin: bookingOrigin });
    }
    const api = Cal.ns?.[bookingEmbedNamespace];
    if (!api) return;

    el.replaceChildren();
    api("inline", {
      elementOrSelector: el,
      calLink,
      config: {
        layout: "month_view",
        theme: "light",
        "ui.color-scheme": "light",
      },
    });
    api("ui", calEmbedUi);

    const fitHeight = (height: number) => {
      if (height < 1) return;
      const fitted = height + 48;
      el.style.height = `${fitted}px`;
      el.style.minHeight = "0";
      const frame = el.querySelector("iframe");
      if (frame instanceof HTMLElement) {
        frame.style.height = `${fitted}px`;
        frame.style.minHeight = "0";
      }
    };

    const onDimension = (event: { detail?: { data?: { iframeHeight?: number } } }) => {
      const height = event.detail?.data?.iframeHeight;
      if (typeof height === "number") fitHeight(height);
    };
    const onBooked = () => {
      trackEvent("booking_success", { method: "cal_embed", placement: "kontakt" });
    };
    api("on", { action: "__dimensionChanged", callback: onDimension });
    api("on", { action: "bookingSuccessfulV2", callback: onBooked });

    return () => {
      api("off", { action: "__dimensionChanged", callback: onDimension });
      api("off", { action: "bookingSuccessfulV2", callback: onBooked });
      el.replaceChildren();
    };
  }, [calLink]);

  return (
    <div
      ref={containerRef}
      className="cal-booking w-full overflow-hidden [&_cal-inline]:!h-auto [&_cal-inline]:!min-h-0 [&_.cal-inline-container]:min-h-0"
      data-cal-namespace={bookingEmbedNamespace}
    />
  );
}