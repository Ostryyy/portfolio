import { Reveal } from "@/components/animations/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Kontakt
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Napisz do mnie — odpowiem szybko.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <Card className="mt-10">
            <CardHeader>
              <CardTitle>Wyślij wiadomość</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="Imię" />
                <Input placeholder="E-mail" type="email" />
              </div>
              <Textarea placeholder="Wiadomość" className="min-h-[140px]" />
              <Button className="w-full md:w-auto">Wyślij</Button>

              <p className="text-xs text-muted-foreground">...</p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
