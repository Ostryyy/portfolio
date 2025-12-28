import Link from "next/link";
import { projects } from "@/data/project";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { ProjectsBentoGrid } from "@/components/projects/bento-grid";
import { GlowWrapper } from "@/components/projects/glow-wrapper";

export function ProjectsPreview() {
  return (
    <section id="projects" className="scroll-mt-24 border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Projekty
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Kafelki bento + każdy projekt ma stronę z demo na YouTube.
              </p>
            </div>

            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/projects">Wszystkie</Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10">
          <GlowWrapper>
            <ProjectsBentoGrid projects={projects} />
          </GlowWrapper>
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
