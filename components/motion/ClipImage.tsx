"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ClipImage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const inner = el.querySelector("img");

    const tween = gsap.fromTo(
      el,
      { clipPath: "inset(18% 12% 18% 12%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        ease: "power4.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      },
    );

    const zoom = inner
      ? gsap.fromTo(
          inner,
          { scale: 1.18 },
          {
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          },
        )
      : null;

    ScrollTrigger.refresh();

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      zoom?.scrollTrigger?.kill();
      zoom?.kill();
      gsap.set(el, { clearProps: "clipPath" });
    };
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`.trim()}>
      {children}
    </div>
  );
}
