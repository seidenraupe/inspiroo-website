import { SectionHeading } from "@/components/section-heading";
import { process } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading kicker={process.kicker} title={process.title} />
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <li key={step.title}>
              <span className="flex size-10 items-center justify-center rounded-full border border-navy text-sm font-semibold text-navy">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
