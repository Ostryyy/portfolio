"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projekty" },
  { id: "contact", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = React.useState<string>("");
  const [hideOnFooter, setHideOnFooter] = React.useState(false);

  React.useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const io = new IntersectionObserver(
      (entries) => {
        setHideOnFooter(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.05 }
    );

    io.observe(footer);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    const ids = links.map((l) => l.id);

    const getActive = () => {
      const offset = 90;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      }
      setActive(current);
    };

    getActive();

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(getActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b bg-background/70 backdrop-blur transition-transform duration-300",
        hideOnFooter ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Arkadiusz.dev
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => {
            const href = pathname === "/" ? `#${l.id}` : `/#${l.id}`;

            return (
              <a
                key={l.id}
                href={href}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    const el = document.getElementById(l.id);
                    if (!el) return;
                    const top =
                      el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className={cn(
                  "transition",
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            );
          })}
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
