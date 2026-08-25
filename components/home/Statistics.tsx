import { stats } from "@/data/stats";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Statistics() {
  return (
    <section className="border-y border-border bg-surface py-24">
      <Container>
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Built on family experience
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-muted">
            From a family business established in the 1990s to an officially
            registered company continuing under the same name since 2011.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-border">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="px-4 text-center">
              <div className="font-display text-shimmer text-4xl font-semibold tracking-tight md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium">{stat.label}</div>
              <div className="mt-1 text-xs font-light text-muted">{stat.note}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
