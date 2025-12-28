import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";
import { Spotlight } from "@/components/animations/spotlight";

export function Hero() {
  return (
    <Spotlight className="border-b">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Angular</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              <span
                className={[
                  "bg-gradient-to-r from-white via-white/70 to-white",
                  "bg-clip-text text-transparent",
                  "animate-shimmer",
                ].join(" ")}
              >
                Frontend Developer
              </span>
              <span className="block text-muted-foreground">
                Nowoczesne UI, animacje i dopracowany UX.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Buduję aplikacje webowe w Angular/React/Next.js. Stawiam na
              wydajność, czytelny kod i świetne doświadczenie użytkownika.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/projects">Zobacz projekty</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Kontakt</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.08]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(from_var(--foreground)_l_c_h_/_0.16)_1px,transparent_1px),linear-gradient(to_bottom,oklch(from_var(--foreground)_l_c_h_/_0.16)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
      </section>
    </Spotlight>
  );
}
