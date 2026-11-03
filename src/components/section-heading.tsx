import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  body?: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  body,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="eyebrow">{kicker}</p>
      <Tag
        className={cn(
          "mt-4 text-balance",
          Tag === "h1" ? "text-4xl sm:text-5xl lg:text-[3.5rem]" : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Tag>
      {body ? <p className="measure mt-5 text-ink/70">{body}</p> : null}
    </div>
  );
}
