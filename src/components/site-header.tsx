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
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-5xl items-center justify-between gap-6 px-5 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">
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
                  "text-[0.92rem] transition-colors",
                  active ? "text-ink" : "text-ink/55 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="text-[0.92rem] text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Gespräch
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <BrandMark />
            </SheetHeader>
            <nav className="mt-10 flex flex-col gap-1" aria-label="Mobilnavigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-1 py-3 font-heading text-3xl text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button render={<Link href="/kontakt" />} className="mt-8 h-11 w-full">
              {site.phone}
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
