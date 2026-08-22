"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { site } from "@/data/site";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export const INTRO_COMPLETE_EVENT = "amas-intro-complete";

function announceIntroComplete() {
  window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
}

function subscribe() {
  return () => {};
}

function getIntroSeen() {
  return sessionStorage.getItem("amas-intro") === "1";
}

export function Intro() {
  const wrap = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const seen = useSyncExternalStore(subscribe, getIntroSeen, () => true);
  const [done, setDone] = useState(false);
  const play = !reduced && !seen && !done;

  useEffect(() => {
    if (!play) {
      announceIntroComplete();
      return;
    }

    const root = wrap.current;
    const sheet = panel.current;
    const brand = mark.current;
    const rule = line.current;
    if (!root || !sheet || !brand || !rule) {
      announceIntroComplete();
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    sessionStorage.setItem("amas-intro", "1");

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        document.body.style.overflow = "";
        announceIntroComplete();
        setDone(true);
      },
    });

    gsap.set(brand, { y: 40, opacity: 0 });
    gsap.set(rule, { scaleX: 0 });

    tl.to(brand, { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" })
      .to(rule, { scaleX: 1, duration: 0.55, ease: "power3.inOut" }, "-=0.2")
      .to(brand, { y: -24, opacity: 0, duration: 0.45 }, "+=0.25")
      .to(sheet, { yPercent: -110, duration: 0.9 }, "-=0.15");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [play]);

  if (!play) return null;

  return (
    <div
      ref={wrap}
      className="fixed inset-0 z-[120] overflow-hidden"
      aria-hidden
    >
      <div ref={panel} className="flex h-full w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div
            ref={mark}
            className="font-display text-4xl font-semibold tracking-[0.28em] uppercase md:text-6xl"
          >
            {site.wordmark.primary}
            <span className="text-accent">{site.wordmark.accent}</span>
          </div>
          <div
            ref={line}
            className="mt-6 h-px w-40 origin-left bg-accent"
          />
        </div>
      </div>
    </div>
  );
}
