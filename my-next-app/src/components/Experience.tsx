import experience from "@/data/experience.json";
import type { ExperienceEntry } from "@/types/portfolio";

export default function Experience() {
  const items = experience as ExperienceEntry[];
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, idx) => (
          <article key={idx} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/20 force-card">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="text-xs text-foreground/70 whitespace-nowrap">
                {item.startDate} – {item.endDate}
              </span>
            </div>
            <p className="text-sm text-foreground/80 mb-3">{item.company}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/85">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {/* How to add a new experience: Add another object to `src/data/experience.json` matching the schema: { role, company, startDate, endDate, description[] }. The UI updates automatically. */}
    </section>
  );
}


