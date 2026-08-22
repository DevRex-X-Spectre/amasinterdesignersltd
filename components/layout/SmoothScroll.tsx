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
