import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { withBase } from "@/lib/paths";
import { site } from "@/lib/site";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.founder.linkedin }],
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "de_CH",
    type: "website",
    siteName: site.name,
    url: site.url,
    images: [{ url: "/thomas-giger.jpg", width: 2048, height: 2048 }],
  },
  icons: {
    icon: withBase("/inspiroo-mark.png"),
    apple: withBase("/apple-touch-icon.png"),
  },
};

const founder = {
  "@type": "Person",
  "@id": `${site.url}/#thomas-giger`,
  name: site.founder.name,
  jobTitle: site.founder.headline,
  image: `${site.url}/thomas-giger.jpg`,
  sameAs: [site.founder.linkedin],
  worksFor: { "@id": `${site.url}/#organisation` },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universität Zürich" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organisation`,
      name: site.legalName,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      image: `${site.url}/inspiroo-logo.png`,
      logo: `${site.url}/inspiroo-logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressCountry: "CH",
      },
      founder: { "@id": founder["@id"] },
      areaServed: { "@type": "Country", name: "Schweiz" },
      knowsAbout: [
        "Strategieberatung",
        "Unternehmensentwicklung",
        "Sparring für Geschäftsleitungen",
        "Verwaltungsrat",
        "Digitale Transformation",
      ],
      sameAs: [site.linkedin],
      description: site.description,
    },
    founder,
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de-CH" className={`${sourceSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
