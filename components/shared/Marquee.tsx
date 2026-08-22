import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
  fade?: boolean;
};

export function Marquee({
  children,
  className = "",
  reverse = false,
  duration = 40,
  fade = true,
}: MarqueeProps) {
  return (
    <div className={`group/marquee relative overflow-hidden ${className}`.trim()}>
      {fade ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28"
          />
        </>
      ) : null}
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
    </div>
  );
}
