"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  images: string[];
};

export function ScreenshotGallery({ title, images }: Props) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeImage]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((src, idx) => (
          <div
            key={src}
            className="overflow-hidden rounded-2xl border bg-muted/20"
          >
            <button
              type="button"
              onClick={() => setActiveImage(src)}
              className="relative aspect-video w-full cursor-zoom-in focus:outline-none"
              aria-label={`Open ${title} screenshot ${idx + 1}`}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${idx + 1}`}
                fill
                className="object-cover transition-transform hover:scale-[1.02]"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={idx === 0}
              />
            </button>
          </div>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-full max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-white/80">
                Click outside or press <span className="font-medium">Esc</span>{" "}
                to close
              </div>
              <button
                type="button"
                className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
                onClick={() => setActiveImage(null)}
              >
                Close
              </button>
            </div>

            <Image
              src={activeImage}
              alt={`${title} screenshot preview`}
              width={1920}
              height={1080}
              className="h-auto w-full rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
