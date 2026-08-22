import { Icon } from "@iconify/react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/shared/Container";
import { Marquee } from "@/components/shared/Marquee";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

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
          <Marquee>
            {loop.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="inline-flex w-[350px] shrink-0 flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <div className="mb-4 flex text-accent">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Icon key={star} icon="solar:star-bold" className="text-sm" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed font-light text-muted">
                  “{item.quote}”
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted">{item.company}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </Reveal>
      </Container>
    </section>
  );
}
