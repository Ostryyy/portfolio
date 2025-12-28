import { Hero } from "@/components/sections/hero";
import { TechSection } from "@/components/sections/tech";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <div id="top" />
      <Hero />
      <TechSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsPreview />
      <ContactSection />
    </main>
  );
}
