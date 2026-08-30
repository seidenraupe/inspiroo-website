import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  inverted?: boolean;
};

export function BrandMark({ className, inverted = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      aria-label="inspiroo Startseite"
    >
      <Image
        src="/inspiroo-mark.png"
        alt=""
        width={44}
        height={44}
        className="size-9 rounded-full bg-ink object-cover ring-1 ring-white/10 sm:size-10"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.35rem] font-semibold tracking-tight sm:text-[1.5rem]",
            inverted ? "text-cream" : "text-ink",
          )}
        >
          inspi<span className="text-brand">roo</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] tracking-[0.18em] uppercase",
            inverted ? "text-cream/65" : "text-ink/55",
          )}
        >
          pragmatisch visionär
        </span>
      </span>
    </Link>
  );
}
