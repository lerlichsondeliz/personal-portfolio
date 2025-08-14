import Hero from "@/components/Hero";
import AboutTeaser from "@/components/AboutTeaser";
import FeaturedProjects from "@/components/FeaturedProjects";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="animate-fade-in">
      <Hero />
      <FeaturedProjects />
      <AboutTeaser />
      <BlogPreview />
      <Contact />
    </main>
  );
}
