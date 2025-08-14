import about from "@/data/about.json";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-primary/80">Hello, I am</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {about.name}
          </h1>
          <p className="text-lg text-foreground/80">
            {about.degree} · {about.location}
          </p>
          <p className="text-foreground/80">
            {about.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <span key={skill} className="text-xs rounded-full bg-primary/10 text-primary px-3 py-1">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <Link href="/projects" className="rounded-md bg-primary text-white px-4 py-2 text-sm hover:opacity-90 transition-opacity">View Projects</Link>
            <Link href="#contact" className="rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm">Contact Me</Link>
            <a
              href="/pdfs/Lukas Roman Erlichson-Deliz_DevResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="size-48 md:size-64 rounded-full overflow-hidden border border-black/5 dark:border-white/10 relative">
            <Image src="/images/myPFP.jpg" alt={about.name} fill className="object-cover scale-[1.5]" />
          </div>
        </div>
      </div>
    </section>
  );
}


