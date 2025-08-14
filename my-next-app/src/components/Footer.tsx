import about from "@/data/about.json";
import Link from "next/link";

export default function Footer() {
  const { socials } = about;
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-foreground/70">© {new Date().getFullYear()} {about.name}</p>
        <div className="flex items-center gap-4">
          {socials.github && (
            <Link href={socials.github} target="_blank" rel="noreferrer" className="hover:underline">
              GitHub
            </Link>
          )}
          {socials.linkedin && (
            <Link href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
              LinkedIn
            </Link>
          )}
          {socials.email && (
            <a href={`mailto:${socials.email}`} className="hover:underline">Email</a>
          )}
        </div>
      </div>
    </footer>
  );
}


