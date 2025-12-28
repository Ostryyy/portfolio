import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Arkadiusz.dev
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#tech" className="hover:text-foreground">
            Tech
          </a>
          <a href="#projects" className="hover:text-foreground">
            Projekty
          </a>
          <a href="#contact" className="hover:text-foreground">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/projects">Wszystkie projekty</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
