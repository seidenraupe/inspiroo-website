import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <BrandMark />
          <p className="measure mt-6 text-sm leading-relaxed text-ink/65">
            Unternehmensberatung für Startups und KMUs. Von der Analyse zur
            Aktion — mit kritischer Aussensicht, zielgerichteten
            Steuerungs-Instrumenten und pragmatischen Massnahmen.
          </p>
        </div>
        <div>
          <p className="eyebrow">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/70 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Kontakt</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>{site.legalName}</li>
            <li>
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-5 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}, CH-{site.address.zip}{" "}
            {site.address.city}
          </p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-ink">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-ink">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
