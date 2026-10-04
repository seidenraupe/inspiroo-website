import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Unternehmensberatung für Startups und KMUs. Von der Analyse zur
            Aktion — mit kritischer Aussensicht, zielgerichteten
            Steuerungs-Instrumenten und pragmatischen Massnahmen.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-violet uppercase">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/75 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-violet uppercase">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>{site.legalName}</li>
            <li>
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.legalName}, CH-{site.address.zip} {site.address.city}</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-cream">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-cream">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
