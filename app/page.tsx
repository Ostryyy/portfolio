export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm text-white/60">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Software Engineer
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          Angular • React • Next.js • TypeScript
        </p>
        <div className="mt-10 flex gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
          >
            Zobacz projekty
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white hover:bg-white/5"
          >
            Kontakt
          </a>
        </div>
      </div>
    </main>
  );
}
