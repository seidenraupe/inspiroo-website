import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type DraftHintProps = {
  children: React.ReactNode;
  className?: string;
};

export function DraftHint({ children, className }: DraftHintProps) {
  if (!site.showDraftHints) return null;
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-dashed border-violet/40 bg-violet/5 px-3 py-1 text-xs text-violet",
        className,
      )}
    >
      {children}
    </p>
  );
}
