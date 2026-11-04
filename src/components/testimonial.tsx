import { ContentImage } from "@/components/content-image";
import { DraftHint } from "@/components/draft-hint";
import { site } from "@/lib/site";
import type { ClientVoice } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

type TestimonialProps = {
  voice: ClientVoice;
  variant?: "card" | "inline";
  className?: string;
};

export function Testimonial({ voice, variant = "card", className }: TestimonialProps) {
  const pending = voice.quote === null;
  if (pending && !site.showDraftHints) return null;

  const text = voice.quote ?? voice.sample;

  return (
    <figure
      className={cn(
        "flex flex-col",
        variant === "card" && "rounded-lg border border-ink/10 bg-white p-7 sm:p-8",
        variant === "inline" && "border-l-2 border-violet/60 pl-6",
        className,
      )}
    >
      {variant === "card" ? <CompanyLogo voice={voice} className="mb-7" /> : null}
      <blockquote className="flex-1">
        <p
          className={cn(
            "leading-snug font-semibold text-balance",
            variant === "card" ? "text-xl" : "text-lg",
            pending ? "text-ink/55" : "text-ink",
          )}
        >
          «{text}»
        </p>
        {voice.body ? (
          <p className="mt-4 text-base leading-relaxed text-ink/70">{voice.body}</p>
        ) : null}
      </blockquote>
      <figcaption
        className={cn(
          "mt-6 flex gap-3",
          variant === "inline" ? "flex-col items-start" : "items-center gap-4",
        )}
      >
        {variant === "inline" ? <CompanyLogo voice={voice} className="h-10" /> : null}
        <div className="text-sm leading-snug">
          <p className="font-semibold text-ink">{voice.person}</p>
          <p className="text-ink/60">
            {voice.role ? `${voice.role}, ` : null}
            {voice.company}
          </p>
        </div>
      </figcaption>
      {pending ? (
        <DraftHint className="mt-5 self-start">
          Statement angefragt – Text ist ein illustratives Muster
        </DraftHint>
      ) : null}
    </figure>
  );
}

function CompanyLogo({ voice, className }: { voice: ClientVoice; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-14 shrink-0 items-center",
        voice.logo.onDark && "self-start rounded-md bg-navy px-3",
        className,
      )}
    >
      <ContentImage
        src={voice.logo.src}
        alt={`Logo ${voice.company}`}
        width={voice.logo.width}
        height={voice.logo.height}
        className="h-auto max-h-10 w-auto max-w-[9.5rem] object-contain"
      />
    </div>
  );
}
