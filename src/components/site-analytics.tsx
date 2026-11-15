"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { GoogleAnalytics } from "@next/third-parties/google";

type SiteAnalyticsProps = {
  gaId: string;
};

function PageViewTracker({ gaId }: SiteAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    window.gtag?.("config", gaId, { page_path: pagePath });
  }, [gaId, pathname, searchParams]);

  return null;
}

/** GA4 inkl. Seitenwechsel bei Client-Navigation. */
export function SiteAnalytics({ gaId }: SiteAnalyticsProps) {
  return (
    <>
      <GoogleAnalytics gaId={gaId} />
      <PageViewTracker gaId={gaId} />
    </>
  );
}