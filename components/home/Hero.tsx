"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroSlides } from "@/data/gallery";
import { Button } from "@/components/shared/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { INTRO_COMPLETE_EVENT } from "@/components/motion/Intro";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

function SplitLine({
  text,
  className,
  delayClass = "",
}: {
  text: string;
  className: string;
  delayClass?: string;
}) {
  return (
    <h1 className={`${className} ${delayClass}`.trim()}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <span className="hero-word inline-block will-change-transform">
            {word}
            {index < text.split(" ").length - 1 ? "\u00a0" : ""}
          </span>
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const kenTween = useRef<gsap.core.Tween | null>(null);

  const go = useCallback((delta: number) => {
    setIndex((current) => {
      const length = heroSlides.length;
      return (current + delta + length) % length;
    });
  }, []);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduced]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useLayoutEffect(() => {
    const root = textRef.current;
    if (!root) return;
    const words = root.querySelectorAll(".hero-word");
    const rest = root.querySelectorAll(".hero-text");

    if (reduced) {
      gsap.set([words, rest], { y: 0, yPercent: 0, rotateZ: 0, opacity: 1 });
      return;
    }

    gsap.set(words, { yPercent: 120, rotateZ: 4 });
    gsap.set(rest, { y: 36, opacity: 0 });

    let tl: gsap.core.Timeline | null = null;
    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      tl?.kill();
      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(words, {
        yPercent: 0,
        rotateZ: 0,
        duration: 1.05,
        stagger: 0.05,
      }).to(
        rest,
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1 },
        "-=0.65",
      );
    };

    const introPending = !window.sessionStorage.getItem("amas-intro");
    let timeout: number | undefined;

    if (!introPending) {
      play();
    } else {
      window.addEventListener(INTRO_COMPLETE_EVENT, play, { once: true });
      timeout = window.setTimeout(play, 3000);
    }

    return () => {
      window.removeEventListener(INTRO_COMPLETE_EVENT, play);
      if (timeout) window.clearTimeout(timeout);
      tl?.kill();
    };
  }, [reduced]);

  useEffect(() => {
    const section = sectionRef.current;
    const slides = slidesRef.current;
    if (!section || !slides || reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.to(slides, {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced]);

  useEffect(() => {
    const root = slidesRef.current;
    if (!root || reduced) return;
    const images = root.querySelectorAll("img");
    const active = images[index];
    if (!active) return;

    kenTween.current?.kill();
    kenTween.current = gsap.fromTo(
      active,
      { scale: 1.08 },
      { scale: 1, duration: 6.5, ease: "none" },
    );

    return () => {
      kenTween.current?.kill();
    };
  }, [index, reduced]);

  useEffect(() => {
    const slides = slidesRef.current;
    if (!slides || reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 16;
      gsap.to(slides, { x, y, duration: 1.4, ease: "power3.out" });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const slide = heroSlides[index];

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured AMAS work"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/25 to-[#0D0D0D]" />
        <div ref={slidesRef} className="absolute inset-0 will-change-transform">
          {heroSlides.map((item, i) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className={`object-cover transition-opacity duration-[1400ms] ease-in-out ${
                i === index ? "opacity-70" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        ref={textRef}
        className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <div className="mb-3 overflow-hidden">
          <p className="hero-text text-xs font-medium tracking-[0.32em] text-accent uppercase">
            AMAS Inter Designers
          </p>
        </div>
        <div className="mb-3">
          <SplitLine
            text="Signs people notice."
            className="font-display text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl"
          />
        </div>
        <div className="mb-8">
          <SplitLine
            text="Made to go on the wall."
            className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-muted md:text-7xl"
          />
        </div>
        <div className="mb-10 overflow-hidden">
          <p className="hero-text mx-auto max-w-xl text-base font-light text-muted md:text-lg">
            We design, build, and install signs, branding, and outdoor work for
            shops, hotels, schools, and public sites.
          </p>
        </div>
        <div className="hero-text flex flex-col items-center gap-4 sm:flex-row">
          <Magnetic>
            <Button href="/quote" className="btn-shine group">
              Request a Quote
              <Icon
                icon="solar:arrow-right-linear"
                className="ml-2 text-xl transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href="/portfolio" variant="outline">
              View Our Work
            </Button>
          </Magnetic>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 flex items-center justify-center px-6 py-6">
        <div className="flex gap-2" role="tablist" aria-label="Slide indicators">
          {heroSlides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                i === index ? "bg-accent" : "bg-white/30 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {heroSlides.length}: {slide.alt}
      </p>
    </section>
  );
}
