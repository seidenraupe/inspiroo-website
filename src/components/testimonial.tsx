import { ContentImage } from "@/components/content-image";
import { DraftHint } from "@/components/draft-hint";
import { cn } from "@/lib/utils";

type TestimonialProps = {
  quote: string;
  body?: string;
  name?: string;
  role: string;
  variant?: "card" | "inline";
  className?: string;
};

export function Testimonial({
  quote,
  body,
  name,
  role,
  variant = "card",
  className,
}: TestimonialProps) {
  return (
    <figure
      className={cn(
        "flex flex-col",
        variant === "card" && "rounded-lg border border-ink/10 bg-white p-7 sm:p-8",
        variant === "inline" && "border-l-2 border-violet/60 pl-6",
        className,
      )}
    >
      <blockquote className="flex-1">
        <p
          className={cn(
            "font-semibold text-balance text-ink",
            variant === "card" ? "text-xl leading-snug" : "text-lg leading-snug",
          )}
        >
          «{quote}»
        </p>
        {body ? <p className="mt-4 text-base leading-relaxed text-ink/70">{body}</p> : null}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <ContentImage
          src="/images/testimonial-platzhalter.svg"
          alt="Platzhalter für das Porträt der zitierten Person"
          width={56}
          height={56}
          className="size-12 shrink-0 rounded-full"
        />
        <div className="text-sm leading-snug">
          {name ? <p className="font-semibold text-ink">{name}</p> : null}
          <p className="text-ink/60">{role}</p>
        </div>
      </figcaption>
      <DraftHint className="mt-5 self-start">
        Illustratives Muster – kein echtes Kundenfeedback
      </DraftHint>
    </figure>
  );
}
