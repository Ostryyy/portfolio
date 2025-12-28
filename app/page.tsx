import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-2">
          <Badge>Angular</Badge>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Frontend Developer
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Portfolio z nowoczesnym UI, animacjami i stronami projektów + filmami z YouTube.
        </p>

        <div className="mt-8 flex gap-3">
          <Button>Zobacz projekty</Button>
          <Button variant="outline">Kontakt</Button>
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Test shadcn/ui ✅</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Jeśli widzisz kartę i przyciski w ładnym dark theme — wszystko działa.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
