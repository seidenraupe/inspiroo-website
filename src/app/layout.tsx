import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name }],
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "de_CH",
    type: "website",
    siteName: site.name,
    url: site.url,
  },
  icons: {
    icon: "/inspiroo-mark.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}/inspiroo-mark.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "CH",
  },
  founder: {
    "@type": "Person",
    name: site.founder.name,
  },
  areaServed: "CH",
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de-CH"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
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
