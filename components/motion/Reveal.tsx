"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  y = 28,
  duration = 0.9,
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

    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger, not IntersectionObserver: SmoothScroll calls
    // ScrollTrigger.update() on every Lenis frame, so the reveal is driven by
    // the same clock as the scroll instead of lagging a frame or two behind it.
    const ctx = gsap.context(() => {
      const targets =
        stagger && el.children.length > 0 ? Array.from(el.children) : el;

      gsap.set(targets, { y, opacity: 0, force3D: true });

      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        stagger: stagger ? 0.08 : 0,
        overwrite: "auto",
        immediateRender: false,
        onComplete: () => {
          gsap.set(targets, { clearProps: "transform,opacity,willChange" });
        },
        scrollTrigger: {
          trigger: el,
          // Starts while the block is still below the fold so it lands settled,
          // rather than animating after it is already sitting in view.
          start: "top 92%",
          once: true,
          fastScrollEnd: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, y, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
