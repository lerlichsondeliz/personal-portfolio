import about from "@/data/about.json";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-black/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">About {about.name.split(" ")[0]}</h2>
          <p className="text-foreground/85 max-w-2xl">
            {about.summary}
          </p>
        </div>
        <Link href="/about" className="rounded-md bg-primary text-white px-4 py-2 text-sm hover:opacity-90">Learn More About Me</Link>
      </div>
    </section>
  );
}


