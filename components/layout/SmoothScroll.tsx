"use client";

import "@/components/icons/register-icons";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

function LenisScrollTrigger() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    // Hero and gallery images settle after hydration and shift everything below
    // them. Without this the reveal trigger points are measured against stale
    // positions and sections fire early or late.
    if (document.readyState === "complete") return;
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.35,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      <LenisScrollTrigger />
      {children}
    </ReactLenis>
  );
}
