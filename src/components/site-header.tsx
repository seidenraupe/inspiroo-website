"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors",
                  active
                    ? "font-medium text-brand"
                    : "text-ink/70 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button render={<Link href="/kontakt" />} size="lg" className="h-10 px-4">
            Gespräch vereinbaren
          </Button>
        </div>
        <Sheet>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-lg border border-ink/10 bg-white lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <BrandMark />
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobilnavigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-3 text-lg text-ink hover:bg-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button render={<Link href="/kontakt" />} className="mt-6 h-11 w-full">
              {site.phone}
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
