import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ueber-mich",
    "/services",
    "/referenzen",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
