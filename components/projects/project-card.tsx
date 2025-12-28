import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@data/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-4">
            <span>{project.title}</span>
            <span className="text-xs text-muted-foreground">View</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{project.short}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
