import type { Metadata } from "next";
import about from "@/data/about.json";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "About",
  description: "Experience, education, skills, and bio.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-28 pb-16">
      <section className="mb-10 grid gap-6 md:grid-cols-[200px_1fr] items-start">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-black/5 dark:border-white/10">
          <img src="/images/myPFP.jpg" alt={about.name} className="w-full h-full object-cover transform scale-[1.5]" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-2">About {about.name}</h1>
          <p className="text-foreground/80 mb-2">{about.degree} · {about.location}</p>
          <div className="space-y-3 text-foreground/85">
            <p>{about.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {about.skills.map((skill) => (
              <span key={skill} className="text-xs rounded-full bg-primary/10 text-primary px-3 py-1">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      <section id="education" className="scroll-mt-24">
        <Education />
      </section>
    </main>
  );
}


