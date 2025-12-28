"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const NAV_OFFSET = 80;

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export function HashScroll() {
  const pathname = usePathname();

  React.useEffect(() => {
    const t = window.setTimeout(() => {
      if (window.location.hash) scrollToHash(window.location.hash);
    }, 50);

    return () => window.clearTimeout(t);
  }, [pathname]);

  React.useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
