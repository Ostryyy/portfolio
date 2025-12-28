import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/media/youtube-embed";
import { getProjectBySlug } from "@/data/project";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:underline"
        >
          ← Wróć do listy
        </Link>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-muted-foreground">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </Button>
              ) : null}

              {project.repoUrl ? (
                <Button asChild variant="outline">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
        {project.youtubeId ? (
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Demo (YouTube)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tutaj wideo, gdzie przedstawiasz projekt.
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId={project.youtubeId}
                title={`${project.title} demo`}
              />
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
