import { projects } from "@/data/project";
import { ProjectGrid } from "@/components/projects/project-grid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Projekty
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Kliknij projekt, żeby zobaczyć szczegóły oraz film z YouTube.
        </p>

        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </main>
  );
}
