import { Reveal } from "@/components/motion/Reveal";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="border-b border-border bg-background pt-32 pb-16 md:pt-40 md:pb-20">
      <Container>
        <Reveal y={48} duration={1}>
          {eyebrow ? (
            <span className="mb-4 block text-sm font-medium tracking-widest text-accent uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-display max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base font-light text-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </header>
  );
}
