import { Reveal } from "@/components/animations/reveal";
import { TechMarquee } from "@/components/animations/marquee";

const techRow1 = [
  "Angular",
  "RxJS",
  "NgRx",
  "Signals",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "shadcn/ui",
];

const techRow2 = [
  "Node.js",
  "REST APIs",
  "SSE",
  "Performance",
  "UX/UI",
  "Testing",
  "CI/CD",
  "Git",
  "Clean Code",
];

export function TechSection() {
  return (
    <section id="tech" className="scroll-mt-24 border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tech Stack
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Dynamicznie, nowocześnie i czytelnie — bez nudnych statycznych
            ikonek.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          <Reveal delay={0.05}>
            <TechMarquee items={techRow1} />
          </Reveal>

          <Reveal delay={0.08}>
            <TechMarquee items={techRow2} reverse />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
