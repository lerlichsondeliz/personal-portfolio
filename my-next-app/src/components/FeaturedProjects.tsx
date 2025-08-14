import projects from "@/data/projects.json";
import type { Project } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
  const items = (projects as Project[]).slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link href="/projects" className="text-sm text-secondary underline underline-offset-4">View All Projects</Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, idx) => (
          <article key={p.slug ?? String(idx)} className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/20 force-card">
            {p.image && (
              <div className="mb-3 rounded-lg overflow-hidden border border-black/5 dark:border-white/10">
                <Image src={p.image} alt={p.title} width={600} height={380} className="w-full h-36 object-cover bg-white dark:bg-transparent" />
              </div>
            )}
            <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-foreground/85 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack.slice(0, 4).map((t) => (
                <span key={t} className="text-[11px] rounded-full bg-secondary/15 text-secondary px-2 py-1">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


