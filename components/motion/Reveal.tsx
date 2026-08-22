"use client";

import { useEffect, useRef, type ReactNode } from "react";
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
  y = 72,
  duration = 1.15,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { clearProps: "all" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const targets = stagger && el.children.length > 0 ? el.children : el;

    const tween = gsap.fromTo(
      targets,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power4.out",
        stagger: stagger ? 0.1 : 0,
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
          toggleActions: "play none none none",
        },
      },
    );

    ScrollTrigger.refresh();

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(targets, { clearProps: "all" });
    };
  }, [delay, y, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
