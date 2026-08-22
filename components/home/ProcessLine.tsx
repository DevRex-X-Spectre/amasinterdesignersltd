"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProcessLine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = "scaleX(1)";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="absolute top-5 right-10 left-10 hidden h-px bg-border md:block">
      <div ref={ref} className="process-line h-full bg-accent" />
    </div>
  );
}
