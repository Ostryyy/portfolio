import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/media/youtube-embed";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/project";
import { ScreenshotGallery } from "@/components/projects/screenshot-gallery";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project could not be found.",
    };
  }

  const ogImages = project.cover
    ? [{ url: project.cover }]
    : project.screenshots?.length
    ? [{ url: project.screenshots[0] }]
    : undefined;

  return {
    title: project.title,
    description: project.short,
    openGraph: {
      title: project.title,
      description: project.short,
      type: "article",
      images: ogImages,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<Params>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const screenshots = project.screenshots ?? [];
  const hasMedia =
    Boolean(project.youtubeId) ||
    screenshots.length > 0 ||
    Boolean(project.cover);

  const gallery = [
    ...(project.cover ? [project.cover] : []),
    ...screenshots,
  ].filter((v, i, arr) => arr.indexOf(v) === i);

  const hasScreenshots = gallery.length > 0;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:underline"
        >
          ← Back to projects
        </Link>

        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
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

              {!project.youtubeId && hasScreenshots ? (
                <Button asChild variant="secondary">
                  <a href="#screenshots">Screenshots</a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        {project.youtubeId ? (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Demo (YouTube)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A short walkthrough / demo video.
            </p>

            <div className="mt-6">
              <YouTubeEmbed
                youtubeId={project.youtubeId}
                title={`${project.title} demo`}
              />
            </div>
          </section>
        ) : hasScreenshots ? (
          <section id="screenshots" className="mt-12">
            <h2 className="text-xl font-semibold">Screenshots</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              UI snapshots showing the main flows and features. Click to
              enlarge.
            </p>

            <div className="mt-6">
              <ScreenshotGallery title={project.title} images={gallery} />
            </div>
          </section>
        ) : (
          <section className="mt-12">
            <div className="rounded-2xl border bg-muted/20 p-6">
              <h2 className="text-xl font-semibold">Demo</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Screenshots and a short video are coming soon. In the meantime,
                feel free to check the repository for implementation details.
              </p>

              {project.repoUrl ? (
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      View repository
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </section>
        )}

        {!hasMedia ? <div className="h-8" /> : null}
      </div>
    </main>
  );
}
