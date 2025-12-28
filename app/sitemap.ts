import { projects } from "@/data/project";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arkadiusz.dev";

  const routes = ["", "/projects"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
