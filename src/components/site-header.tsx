"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { firstCallHref, navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.98rem] transition-colors",
                  active ? "font-semibold text-ink" : "text-ink/65 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={firstCallHref}
            className="inline-flex h-10 items-center rounded-md bg-navy px-4 text-[0.95rem] font-semibold text-cream transition-colors hover:bg-brand"
          >
            Erstgespräch
          </a>
        </nav>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <BrandMark />
            </SheetHeader>
            <nav className="mt-8 flex flex-col px-4" aria-label="Mobilnavigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-ink/10 py-4 text-2xl font-semibold text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3 px-4">
              <a
                href={firstCallHref}
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-md bg-navy font-semibold text-cream"
              >
                Erstgespräch vereinbaren
              </a>
              <a
                href={site.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink/15 text-ink"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
