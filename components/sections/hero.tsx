import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
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
            Frontend Developer
            <span className="block text-muted-foreground">
              Buduję szybkie, dopracowane UI i aplikacje webowe.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Angular (duże aplikacje), React/Next.js (nowoczesne projekty),
            nacisk na UX, performance i czysty kod.
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

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/2 top-[-120px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}
