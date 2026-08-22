"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 1,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { clearProps: "all" });
      return;
    }

    const targets = stagger && el.children.length > 0 ? el.children : el;
    gsap.set(targets, { y, opacity: 0 });

    const tween = gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      stagger: stagger ? 0.08 : 0,
      paused: true,
      overwrite: "auto",
      onComplete: () => {
        gsap.set(targets, { clearProps: "transform,opacity" });
      },
    });

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          tween.play();
          io.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      tween.kill();
    };
  }, [delay, y, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
