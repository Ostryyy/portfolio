import { Reveal } from "@/components/animations/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses, education } from "@/data/resume";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Education
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Computer Science studies and continuous learning across frontend,
            full-stack, and AI/ML — focused on skills that translate into real
            production-ready projects.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="grid gap-8 lg:col-span-1">
            {education.map((item, idx) => (
              <Reveal
                key={`${item.company}-${item.title}-${idx}`}
                delay={0.05 * idx}
              >
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex flex-col gap-1">
                      <span className="text-base md:text-lg">
                        {item.title}
                        {item.company ? (
                          <span className="text-muted-foreground">
                            {" "}
                            • {item.company}
                          </span>
                        ) : null}
                      </span>
                      <span className="text-sm font-normal text-muted-foreground">
                        {item.start} — {item.end}
                      </span>
                    </CardTitle>
                  </CardHeader>

                  {item.bullets.length ? (
                    <CardContent className="pt-0">
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

          <div className="lg:col-span-2 lg:border-l lg:border-border lg:pl-8">
            <Reveal delay={0.1}>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Courses & Continuous Learning</CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid gap-6 md:grid-cols-2 items-stretch">
                    {courses.map((group) => (
                      <Card key={group.category} className="bg-muted/30 h-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            {group.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            {group.items.map((c) => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
