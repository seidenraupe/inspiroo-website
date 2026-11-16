import { caseStudies, type CaseStudy } from "@/lib/references";
import { shuffle } from "@/lib/shuffle";

function pickN<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

/** Startseite: 2 Klartext-Fallstudien + 1 anonymisierte, Reihenfolge zufällig. */
export function pickHomeCaseStudies(
  pool: CaseStudy[] = caseStudies,
): CaseStudy[] {
  const named = pool.filter((item) => !item.anonymized);
  const anonymous = pool.filter((item) => item.anonymized);

  if (named.length < 2 || anonymous.length < 1) {
    return pool.slice(0, 3);
  }

  return shuffle([...pickN(named, 2), ...pickN(anonymous, 1)]);
}