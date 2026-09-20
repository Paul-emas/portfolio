"use client";

import { useEffect, useState } from "react";

type SplashState = "visible" | "exit" | "hidden";

export function IntroSplash() {
  const [state, setState] = useState<SplashState>("visible");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      const hideTimer = window.setTimeout(() => setState("hidden"), 180);
      return () => window.clearTimeout(hideTimer);
    }

    const exitTimer = window.setTimeout(() => setState("exit"), 650);
    const hideTimer = window.setTimeout(() => setState("hidden"), 1100);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (state === "hidden") {
    return null;
  }

  return (
    <div aria-hidden="true" className="intro-splash" data-state={state}>
      <p className="font-display text-4xl tracking-tighter text-(--ink) sm:text-6xl">
        Paul Emas
      </p>
    </div>
  );
}