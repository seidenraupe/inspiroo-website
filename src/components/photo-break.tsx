import { ContentImage } from "@/components/content-image";

type PhotoBreakProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function PhotoBreak({ src, alt, caption }: PhotoBreakProps) {
  return (
    <figure className="relative overflow-hidden bg-ink">
      <ContentImage
        src={src}
        alt={alt}
        width={1456}
        height={816}
        className="h-[min(32rem,52vh)] w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/10" />
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 px-5 py-6 text-sm text-cream/85 sm:px-8">
          <span className="mx-auto block max-w-6xl">{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
