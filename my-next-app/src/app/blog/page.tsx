import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Blog",
  description: "Articles and notes powered by MDX.",
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      <p className="text-foreground/80 mb-8">
        This is a placeholder blog index. For now, posts are listed from <code>src/app/blog/posts.ts</code>. When ready, create route groups like <code>src/app/blog/your-slug/page.tsx</code> and render MDX content there.
      </p>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/20">
            <Link href={`/blog/${p.slug}`} className="text-lg font-medium hover:underline">
              {p.title}
            </Link>
            {p.description && <p className="text-sm text-foreground/80 mt-1">{p.description}</p>}
            {p.date && <p className="text-xs text-foreground/60 mt-2">{p.date}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}


