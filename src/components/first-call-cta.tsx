"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

import { firstCallHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type FirstCallCtaProps = {
  variant?: "navy" | "cream";
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function FirstCallCta({
  variant = "navy",
  children = "Unverbindliches Erstgespräch vereinbaren",
  className,
  onClick,
}: FirstCallCtaProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [mobileWrapped, setMobileWrapped] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mobileQuery = window.matchMedia("(max-width: 639px)");

    const update = () => {
      if (!mobileQuery.matches) {
        setMobileWrapped(false);
        return;
      }
      const style = getComputedStyle(el);
      const lineHeight =
        parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.4;
      setMobileWrapped(el.scrollHeight > lineHeight * 1.35);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    mobileQuery.addEventListener("change", update);
    return () => {
      observer.disconnect();
      mobileQuery.removeEventListener("change", update);
    };
  }, [children]);

  return (
    <a
      ref={ref}
      href={firstCallHref}
      onClick={onClick}
      className={cn(
        "inline-flex w-full min-h-12 items-center justify-center rounded-md px-7 py-3.5 text-center text-[0.95rem] leading-normal font-semibold sm:w-auto sm:px-7 sm:py-3.5 sm:text-base sm:leading-snug",
        variant === "navy" &&
          "bg-navy text-cream transition-colors hover:bg-brand",
        variant === "cream" &&
          "bg-cream text-navy transition-colors hover:bg-white",
        mobileWrapped && "max-sm:px-10 max-sm:py-5",
        className,
      )}
    >
      {children}
    </a>
  );
}
