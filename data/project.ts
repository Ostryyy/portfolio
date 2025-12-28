export type Project = {
  slug: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  cover?: string;
  liveUrl?: string;
  repoUrl?: string;
  youtubeId?: string;
};

export const projects: Project[] = [
  {
    slug: "briefly-ai",
    title: "Briefly AI",
    short:
      "Aplikacja do streszczania / przetwarzania treści z job status (SSE).",
    description:
      "Next.js + backend + SSE. Fokus na wydajność, UX i czytelny status wykonywania zadań.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "SSE"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example",
    youtubeId: "XtT86XSm3nA",
  },
  {
    slug: "mediahub",
    title: "MediaHub",
    short: "Serwer multimediów z obsługą streamingu i Range requests.",
    description:
      "Streaming wideo, konwersja on-the-fly, nacisk na efektywność i UX odtwarzania.",
    tech: ["Python", "ffmpeg", "HTTP Range", "Angular", "TypeScript"],
  },
  {
    slug: "crypto-tracker",
    title: "Crypto Portfolio Tracker",
    short: "Tracker portfolio krypto z cenami i statystykami.",
    description:
      "React + integracje API, wykresy, szybkie odświeżanie danych i czytelne UI.",
    tech: ["React", "TypeScript", "APIs", "UI"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
