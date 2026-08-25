"use client";

import { Icon } from "@/components/icons/Icon";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/shared/Container";
import { Marquee } from "@/components/shared/Marquee";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const reduced = usePrefersReducedMotion();

  const changeTo = (index: number, movement: 1 | -1) => {
    setDirection(movement);
    setActive((index + testimonials.length) % testimonials.length);
  };
  const previous = () => changeTo(active - 1, -1);
  const next = () => changeTo(active + 1, 1);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const handleTouchEnd = (touchEnd: number) => {
    if (touchStart === null) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 45) {
      if (distance > 0) next();
      else previous();
    }
    setTouchStart(null);
  };

  const card = (item: (typeof testimonials)[number], className = "") => (
    <article className={`relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-surface via-surface to-background p-7 shadow-[0_16px_40px_rgba(0,0,0,0.18)] ${className}`.trim()}>
      <div className="absolute top-0 left-7 h-1 w-16 bg-accent" />
      <div className="mb-5 flex items-start justify-between">
        <div className="flex gap-0.5 text-accent [&_svg]:fill-current" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, star) => (
            <Icon key={star} icon="solar:star-bold" className="text-[0.9rem]" aria-hidden />
        ))}
        </div>
        <span aria-hidden className="font-display text-5xl leading-[0.6] font-semibold text-accent/25">“</span>
      </div>
      <p className="mb-8 max-w-[34ch] text-sm leading-7 font-light text-white/80">
        “{item.quote}”
      </p>
      <div className="mt-auto">
        <p className="font-display text-sm font-semibold tracking-tight text-white">{item.name}</p>
        <p className="mt-1 text-xs tracking-wide text-accent/80 uppercase">{item.company}</p>
      </div>
    </article>
  );

  return (
    <section className="bg-background py-24">
      <Container className="mb-12 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            What our clients say
          </h2>
        </Reveal>
      </Container>
      <Container>
        <Reveal>
          <div className="hidden md:block">
            <Marquee>
              {loop.map((item, index) => (
                <div key={`${item.name}-${index}`} className="inline-flex h-[280px] w-[390px] shrink-0 px-2">
                  {card(item)}
                </div>
              ))}
            </Marquee>
          </div>
          <div
            className="md:hidden"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
          >
            <div className="relative mx-auto h-[340px] max-w-sm overflow-hidden px-3 [perspective:1100px]">
              {[-2, -1, 0, 1, 2].map((offset) => {
                const item = testimonials[(active + offset + testimonials.length) % testimonials.length];
                const distance = Math.abs(offset);
                return (
                  <div
                    key={`${item.name}-${offset}`}
                    className={`absolute inset-x-3 top-0 h-[310px] origin-bottom transition-all duration-700 ease-out ${offset === 0 ? (direction === 1 ? "animate-testimonial-in-right" : "animate-testimonial-in-left") : ""}`}
                    style={{
                      transform: `translateX(${offset * 12}px) translateY(${distance * 13}px) rotate(${offset * 1.4}deg) scale(${1 - distance * 0.045})`,
                      zIndex: 10 - distance,
                      opacity: distance > 1 ? 0.42 : 1 - distance * 0.16,
                      filter: distance > 0 ? `brightness(${1 - distance * 0.08})` : "none",
                      boxShadow:
                        distance === 0
                          ? "0 22px 42px rgba(0, 0, 0, 0.34)"
                          : "0 10px 18px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {card(item, offset === 0 ? "shadow-[0_18px_50px_rgba(0,0,0,0.28)]" : "")}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-5">
              <button type="button" onClick={previous} className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition-colors hover:border-accent hover:text-accent" aria-label="Previous testimonial">
                <Icon icon="solar:arrow-left-linear" aria-hidden />
              </button>
              <button type="button" onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition-colors hover:border-accent hover:text-accent" aria-label="Next testimonial">
                <Icon icon="solar:arrow-right-linear" aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
