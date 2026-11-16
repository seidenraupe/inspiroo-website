"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { gaTrackAttrs } from "@/lib/ga-track";
import {
  CHECK_QUESTIONS,
  CHECK_RESULTS,
  type FormatKey,
} from "@/lib/standortcheck";
import { cn } from "@/lib/utils";

const FORMAT_KEYS: FormatKey[] = ["boxen-stopp", "co-pilot", "navigator", "masterplan"];

function evaluate(answers: Record<number, FormatKey>) {
  const scores = Object.fromEntries(FORMAT_KEYS.map((key) => [key, 0])) as Record<
    FormatKey,
    number
  >;
  for (const key of Object.values(answers)) scores[key] += 1;

  const sorted = [...FORMAT_KEYS].sort((a, b) => scores[b] - scores[a]);
  const primaryKey = sorted[0];
  const secondaryKey = sorted[1];
  const hasCloseSecond =
    scores[secondaryKey] > 0 && scores[primaryKey] - scores[secondaryKey] <= 1;

  return {
    primary: CHECK_RESULTS[primaryKey],
    secondary: hasCloseSecond ? CHECK_RESULTS[secondaryKey] : null,
  };
}

export function Standortcheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, FormatKey>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const currentQuestion = CHECK_QUESTIONS[currentStep];
  const selectedOption = answers[currentQuestion?.id];
  const progressPercent = Math.round(
    ((isCompleted ? CHECK_QUESTIONS.length : currentStep) / CHECK_QUESTIONS.length) * 100,
  );

  function scrollToCheck() {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleNext() {
    if (!selectedOption) return;
    if (currentStep < CHECK_QUESTIONS.length - 1) {
      setCurrentStep((step) => step + 1);
      scrollToCheck();
      return;
    }
    const result = evaluate({ ...answers, [currentQuestion.id]: selectedOption });
    trackEvent("standortcheck_result", { format: result.primary.key });
    setIsCompleted(true);
    scrollToCheck();
  }

  function handleBack() {
    if (isCompleted) {
      setIsCompleted(false);
      return;
    }
    if (currentStep > 0) setCurrentStep((step) => step - 1);
  }

  function handleReset() {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    scrollToCheck();
  }

  const evaluation = isCompleted ? evaluate(answers) : null;

  return (
    <section
      id="kurz-check"
      ref={containerRef}
      aria-labelledby="standortcheck-heading"
      className="mx-auto max-w-3xl scroll-mt-24 rounded-lg border border-ink/10 bg-white p-6 sm:p-10"
    >
      <div>
        <p className="eyebrow">Standortbestimmung · 2 Minuten</p>
        <h2
          id="standortcheck-heading"
          className="mt-3 text-3xl text-balance sm:text-4xl"
        >
          Wo steht Ihr Unternehmen aktuell – und wo liegt der grösste Hebel?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Sechs kurze Fragen aus der Führungspraxis. Keine E-Mail-Adresse nötig – Sie
          sehen Ihre Auswertung direkt im Anschluss. Die Antworten bleiben in Ihrem
          Browser und werden nicht gespeichert.
        </p>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between text-sm text-ink/60">
          <span>
            {isCompleted
              ? "Auswertung abgeschlossen"
              : `Frage ${currentStep + 1} von ${CHECK_QUESTIONS.length}`}
          </span>
          <span aria-hidden="true">{progressPercent} %</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Fortschritt Standortbestimmung"
          className="h-1.5 w-full overflow-hidden rounded-full bg-sand"
        >
          <div
            className="h-full bg-navy transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {!isCompleted && currentQuestion ? (
        <div className="mt-8">
          <fieldset>
            <legend className="mb-5 text-lg leading-snug font-semibold text-ink sm:text-xl">
              {currentQuestion.id}. {currentQuestion.question}
            </legend>
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption === option.key;
                return (
                  <label
                    key={option.key}
                    className={cn(
                      "flex cursor-pointer items-start gap-3.5 rounded-lg border p-4 transition-colors",
                      isSelected
                        ? "border-navy bg-sand ring-1 ring-navy"
                        : "border-ink/15 hover:border-ink/40 hover:bg-cream",
                    )}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion.id}`}
                      value={option.key}
                      checked={isSelected}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.key }))
                      }
                      className="mt-1 size-4 shrink-0 accent-navy"
                    />
                    <span className="text-base leading-relaxed text-ink/85">{option.text}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-6">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-sm font-medium text-ink/70 transition-colors hover:bg-sand hover:text-ink disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeft className="size-4" />
              Zurück
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!selectedOption}
              className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentStep === CHECK_QUESTIONS.length - 1 ? "Auswertung anzeigen" : "Weiter"}
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      ) : null}

      {isCompleted && evaluation ? (
        <div aria-live="polite" className="mt-8">
          <div className="rounded-lg border border-ink/10 bg-cream p-6 sm:p-8">
            <span className="inline-block rounded-full bg-navy px-3 py-1 text-xs font-semibold tracking-[0.12em] text-cream uppercase">
              Empfohlenes Format · {evaluation.primary.title}
            </span>
            <h3 className="mt-4 text-2xl text-balance sm:text-3xl">{evaluation.primary.headline}</h3>
            <p className="mt-4 text-base leading-relaxed text-ink/75">{evaluation.primary.summary}</p>
            <div className="mt-5 rounded-lg border border-ink/10 bg-white p-4">
              <p className="text-sm font-semibold text-ink">Was wir konkret tun</p>
              <p className="mt-1 text-base leading-relaxed text-ink/75">{evaluation.primary.action}</p>
            </div>
            {evaluation.secondary ? (
              <p className="mt-4 text-sm leading-relaxed text-ink/60 italic">
                Hinweis: {evaluation.secondary.secondaryHint}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/kontakt/?thema=${evaluation.primary.key}#nachricht`}
                className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand"
                {...gaTrackAttrs("standortcheck_cta", {
                  action: "discuss",
                  format: evaluation.primary.key,
                })}
              >
                15 Min. unverbindlich besprechen
              </Link>
              <Link
                href={`/zusammenarbeit/#${evaluation.primary.key}`}
                className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
                {...gaTrackAttrs("standortcheck_cta", {
                  action: "format_detail",
                  format: evaluation.primary.key,
                })}
              >
                Format «{evaluation.primary.title}» im Detail
              </Link>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              Antworten anpassen
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm font-medium text-ink/70 underline decoration-ink/25 underline-offset-4 hover:text-ink hover:decoration-ink"
            >
              Check neu starten
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
