import { ChevronDown } from "lucide-react";

import { leadershipProjects } from "@/lib/content";

/** CEO-Meilensteine: Texte eingeklappt, Inhalt bleibt im statischen HTML (<details>). */
export function LeadershipExperienceList() {
  return (
    <div className="border-t border-ink/10">
      {leadershipProjects.map((project) => (
        <details key={project.title} className="group border-b border-ink/10">
          <summary className="flex cursor-pointer list-none items-center gap-3 py-5 text-lg font-semibold text-ink hover:text-navy [&::-webkit-details-marker]:hidden">
            <ChevronDown
              className="size-4 shrink-0 text-ink/55 transition-transform group-open:rotate-180"
              aria-hidden
            />
            {project.title}
          </summary>
          <p className="pb-6 text-base leading-relaxed text-ink/75">{project.body}</p>
        </details>
      ))}
    </div>
  );
}