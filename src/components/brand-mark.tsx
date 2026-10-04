import Image from "next/image";
import Link from "next/link";

import { withBase } from "@/lib/paths";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
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
        src={withBase("/inspiroo-logo.png")}
        alt="inspiroo — advisory services, pragmatisch visionär"
        width={1200}
        height={628}
        className="h-11 w-auto sm:h-12"
        priority
      />
    </Link>
  );
}
