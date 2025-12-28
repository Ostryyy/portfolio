import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";

const tech = [
  "Angular",
  "RxJS",
  "NgRx",
  "Signals",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "shadcn/ui",
  "Node.js",
  "REST",
  "SSE",
];

export function TechSection() {
  return (
    <section id="tech" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tech Stack
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Technologie, w których czuję się pewnie i które realnie dowożę w
            projektach.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
