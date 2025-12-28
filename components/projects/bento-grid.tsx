import Link from "next/link";
import type { Project } from "@/data/project";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Props = {
  projects: Project[];
};

function BentoItem({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card p-6 transition",
        "hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),hsl(var(--foreground)/0.12),transparent_40%)]" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground">View</span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
          {project.short}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-6 text-sm font-medium text-foreground/90">
          Watch demo → <span className="text-muted-foreground">(YouTube)</span>
        </div>
      </div>
    </Link>
  );
}

export function ProjectsBentoGrid({ projects }: Props) {
  const items = projects.slice(0, 5);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {items[0] ? (
        <BentoItem project={items[0]} className="lg:col-span-7 lg:row-span-2" />
      ) : null}

      {items[1] ? (
        <BentoItem project={items[1]} className="lg:col-span-5" />
      ) : null}
      {items[2] ? (
        <BentoItem project={items[2]} className="lg:col-span-5" />
      ) : null}

      {items[3] ? (
        <BentoItem project={items[3]} className="lg:col-span-6" />
      ) : null}
      {items[4] ? (
        <BentoItem project={items[4]} className="lg:col-span-6" />
      ) : null}
    </div>
  );
}
