import Image from "next/image";
import Link from "next/link";

import { withBase } from "@/lib/paths";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Header: eng beschnitten und grösser, damit «pragmatisch visionär» lesbar bleibt. */
  variant?: "default" | "header";
};

export function BrandMark({ className, variant = "default" }: BrandMarkProps) {
  const header = variant === "header";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      aria-label="inspiroo Startseite"
    >
      <Image
        src={withBase(header ? "/inspiroo-logo-header.png" : "/inspiroo-logo.png")}
        alt="inspiroo — advisory services, pragmatisch visionär"
        width={header ? 1058 : 1200}
        height={header ? 410 : 628}
        className={
          header
            ? "h-[4.75rem] w-auto max-w-none sm:h-[5.75rem]"
            : "h-14 w-auto max-w-[12.5rem] object-contain object-left sm:h-16 sm:max-w-[15rem]"
        }
        priority={header}
      />
    </Link>
  );
}
