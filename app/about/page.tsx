import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/about";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { CheckList } from "@/components/shared/CheckList";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { LocationMap } from "@/components/contact/LocationMap";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AMAS Inter Designers Ltd. designs, builds, and installs signs, branding, print, and outdoor work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.heading}
        description={about.intro}
      />
      <section className="bg-background py-24">
        <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Reveal>
            <Image
              src="/assets/vochmal-foods-branding.jpg"
              alt="AMAS team installing window branding"
              width={900}
              height={1100}
              className="h-[520px] w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal>
            <span className="mb-4 block text-sm font-medium tracking-widest text-accent uppercase">
              Company story
            </span>
            <h2 className="font-display mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
              It starts with a wall, not a slogan.
            </h2>
            <p className="text-sm leading-relaxed font-light text-muted">
              {about.story}
            </p>
            <p className="mt-6 text-sm leading-relaxed font-light text-muted">
              {about.history}
            </p>
            <p className="mt-6 text-sm leading-relaxed font-light text-muted">
              {about.different}
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="border-y border-border bg-surface py-24">
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[about.mission, about.vision].map((item) => (
            <Reveal
              key={item.title}
              className="rounded-2xl bg-background p-8 shadow-[0_16px_36px_rgba(0,0,0,0.16)]"
            >
              <h3 className="font-display mb-4 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed font-light text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </Container>
      </section>
      <section className="bg-background py-24">
        <Container>
          <Reveal className="mb-12">
            <span className="mb-2 block text-sm font-medium tracking-widest text-accent uppercase">
              Core values
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              How we like to work.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value) => (
              <Reveal
                key={value.title}
                className="rounded-2xl bg-surface p-6 shadow-[0_16px_36px_rgba(0,0,0,0.16)]"
              >
                <h3 className="font-display mb-3 text-lg font-medium">
                  {value.title}
                </h3>
                <p className="text-sm font-light text-muted">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-surface py-24">
        <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
              What we can make
            </h2>
            <CheckList items={about.capabilities} />
            <Button href="/services" className="mt-10 w-fit">
              See the services
            </Button>
          </Reveal>
          <Reveal>
            <Image
              src="/assets/oak-prime-school-pylon.jpg"
              alt="Oak-Prime school pylon fabricated by AMAS"
              width={900}
              height={1100}
              className="h-[480px] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </Container>
      </section>
      <section className="border-t border-border bg-background py-24">
        <Container>
          <Reveal className="mb-10">
            <span className="mb-3 block text-sm font-medium tracking-widest text-accent uppercase">Where we work</span>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Find us in Jos.</h2>
          </Reveal>
          <Reveal>
            <LocationMap />
          </Reveal>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
