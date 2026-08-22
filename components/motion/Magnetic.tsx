"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || reduced) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(el, { x, y, duration: 0.45, ease: "power3.out" });
  }

  function onLeave() {
    const el = ref.current;
    if (!el || reduced) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "power3.out" });
  }

  return (
    <div
      ref={ref}
      className={`inline-block will-change-transform ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
