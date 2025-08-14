import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of selected work with details and demos.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* <h1 className="text-3xl font-semibold mb-6">Projects</h1> */}
      <Projects />
    </main>
  );
}


