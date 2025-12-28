import Link from "next/link";
import { projects } from "@/data/project";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function ProjectsPreview() {
  const top = projects.slice(0, 3);

  return (
    <section id="projects" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Projekty
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Kilka najważniejszych projektów. Każdy ma stronę z filmem demo
                na YouTube.
              </p>
            </div>

            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/projects">Wszystkie</Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10">
          <ProjectGrid projects={top} />
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/projects">Zobacz wszystkie projekty</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
