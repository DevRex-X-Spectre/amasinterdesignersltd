"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export function ClipImage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const inner = el.querySelector("img");
    gsap.set(el, { clipPath: "inset(12% 8% 12% 8%)" });
    if (inner) gsap.set(inner, { scale: 1.12 });

    const tween = gsap.to(el, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.25,
      ease: "power3.out",
      paused: true,
    });

    const zoom = inner
      ? gsap.to(inner, {
          scale: 1,
          duration: 1.45,
          ease: "power3.out",
          paused: true,
        })
      : null;

    const play = () => {
      tween.play();
      zoom?.play();
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -15% 0px", threshold: 0.1 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      tween.kill();
      zoom?.kill();
      gsap.set(el, { clearProps: "clipPath" });
      if (inner) gsap.set(inner, { clearProps: "transform" });
    };
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`.trim()}>
      {children}
    </div>
  );
}
