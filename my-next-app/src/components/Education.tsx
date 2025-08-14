import education from "@/data/education.json";
import type { EducationEntry } from "@/types/portfolio";

export default function Education() {
  const items = education as EducationEntry[];
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/20 force-card"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{item.school}</h3>
              <span className="text-xs text-foreground/70 whitespace-nowrap">{item.dates}</span>
            </div>
            <p className="text-sm text-foreground/80 mb-1">{item.degree}</p>
            {item.location && (
              <p className="text-xs text-foreground/70 mb-3">{item.location}</p>
            )}
            {item.description && (
              <p className="text-sm text-foreground/85 mb-3">{item.description}</p>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/85">
                {item.highlights.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      {/* How to add a new education: Add another object to `src/data/education.json` with fields: school, degree, dates, description(optional), highlights[](optional), location(optional). */}
    </section>
  );
}


