import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The link may be outdated or the page has been moved.
        </p>

        <div className="mt-10 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">Projects</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
