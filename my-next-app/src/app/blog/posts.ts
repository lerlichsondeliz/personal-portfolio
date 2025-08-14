/**
 * Registry of blog posts.
 * How to add a new blog post:
 * - Create a new MDX file in this folder, e.g. `my-post.mdx`.
 * - Add an entry below with its slug, title, description, and date.
 *   The page will be available at `/blog/my-post`.
 */

export type BlogPost = {
  slug: string; // matches the file name without extension
  title: string;
  description?: string;
  date?: string; // ISO or human string
};

export const posts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    description: "Kicking off the blog with MDX in Next.js App Router.",
    date: "2025-01-01",
  },
];


