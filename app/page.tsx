import { Hero } from "@/components/sections/hero";
import { TechSection } from "@/components/sections/tech";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechSection />
      <ProjectsPreview />
      <ContactSection />
    </main>
  );
}
