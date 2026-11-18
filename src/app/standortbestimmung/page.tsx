import type { Metadata } from "next";

import {
  StandortbestimmungRedirect,
  standortcheckEntryHref,
} from "@/components/standortbestimmung-redirect";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Standortbestimmung: Wo steht Ihr KMU?",
  description:
    "Kurzer Standortcheck für KMU in der Schweiz – in etwa 2 Minuten zur passenden Zusammenarbeitsform. Von Thomas Giger, inspiroo Winterthur.",
  alternates: {
    canonical: `${site.url}/standortbestimmung/`,
  },
};

export default function StandortbestimmungPage() {
  const target = standortcheckEntryHref();
  return <StandortbestimmungRedirect target={target} />;
}