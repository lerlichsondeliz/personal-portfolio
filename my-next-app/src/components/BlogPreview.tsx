import Link from "next/link";
import { posts } from "@/app/blog/posts";

export default function BlogPreview() {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl font-semibold">Latest from My Blog</h2>
        <Link href="/blog" className="text-sm text-secondary underline underline-offset-4">Read More Posts</Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((p) => (
          <li key={p.slug} className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/20 force-card">
            <Link href={`/blog/${p.slug}`} className="font-medium hover:underline">
              {p.title}
            </Link>
            {p.description && <p className="text-sm text-foreground/80 mt-1">{p.description}</p>}
            {p.date && <p className="text-xs text-foreground/60 mt-2">{p.date}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}


