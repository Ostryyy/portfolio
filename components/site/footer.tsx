import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="font-semibold tracking-tight">Arkadiusz.dev</div>
            <div className="text-sm text-muted-foreground">
              © {year} • Frontend Developer
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="ghost">
              <Link href="/projects">Projekty</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href="#contact">Kontakt</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#top">Back to top</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
