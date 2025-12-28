import { projects } from "@/data/project";
import { ProjectGrid } from "@/components/projects/project-grid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Click a project to see details, tech stack, and (when available) a YouTube demo.
        </p>

        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </main>
  );
}
