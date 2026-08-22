"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ringEl = ring.current;
    const dotEl = dot.current;
    if (!ringEl || !dotEl) return;

    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      gsap.set(dotEl, { x: event.clientX, y: event.clientY });
    };

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.16;
      pos.y += (mouse.y - pos.y) * 0.16;
      gsap.set(ringEl, { x: pos.x, y: pos.y });
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor='hover']")) {
        ringEl.classList.add("is-hover");
      }
    };
    const onOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor='hover']")) {
        ringEl.classList.remove("is-hover");
      }
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden>
      <div ref={ring} className="site-cursor-ring" />
      <div ref={dot} className="site-cursor-dot" />
    </div>
  );
}
