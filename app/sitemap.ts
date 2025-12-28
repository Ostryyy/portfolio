import { projects } from "@/data/project";

export default function sitemap() {
  const baseUrl = "http://localhost:3000";

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
