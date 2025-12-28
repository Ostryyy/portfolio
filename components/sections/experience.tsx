import { Reveal } from "@/components/animations/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/data/resume";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Commercial work in Angular/TypeScript, testing, and API integration.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6">
          {experience.map((item, idx) => (
            <Reveal key={`${item.company}-${item.title}-${idx}`} delay={0.05 * idx}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <span>
                      {item.title}
                      {item.company ? (
                        <span className="text-muted-foreground"> • {item.company}</span>
                      ) : null}
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">
                      {item.start} — {item.end}
                    </span>
                  </CardTitle>
                </CardHeader>
                {item.bullets.length ? (
                  <CardContent>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
