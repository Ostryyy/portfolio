"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Spotlight({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--sx", `${x}%`);
    el.style.setProperty("--sy", `${y}%`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn("relative isolate overflow-hidden", className)}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_var(--sx,50%)_var(--sy,30%),oklch(from_var(--foreground)_l_c_h_/_0.20),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_-10%,oklch(from_var(--foreground)_l_c_h_/_0.14),transparent_60%)]" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
