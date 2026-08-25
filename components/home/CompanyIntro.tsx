import { Icon } from "@iconify/react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { ClipImage } from "@/components/motion/ClipImage";
import { Reveal } from "@/components/motion/Reveal";

const points = [
  {
    icon: "solar:pallete-2-linear",
    title: "It has to look like you",
    body: "We design from your brand. The sign should feel like it belongs on that building, not like it was copied from a catalogue.",
  },
  {
    icon: "solar:widget-linear",
    title: "Built in the workshop",
    body: "Letters, lighting, and metalwork are made here. What you approve on paper is what leaves the floor.",
  },
  {
    icon: "solar:verified-check-linear",
    title: "We put it up",
    body: "The same people who make the sign install it. You are not left waiting on a separate crew.",
  },
];

export function CompanyIntro() {
  return (
    <section id="intro" className="relative z-20 bg-background py-32">
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <ClipImage className="group relative order-2 rounded-2xl md:order-1">
          <div className="absolute inset-0 z-10 bg-accent/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <Image
            src="/assets/salvation-ministries-globe-sign.jpg"
            alt="Large identity sign fabricated by AMAS Inter Designers"
            width={900}
            height={1200}
            className="h-[600px] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </ClipImage>
        <div className="order-1 flex flex-col justify-center md:order-2">
          <Reveal>
            <span className="mb-4 block text-sm font-medium tracking-widest text-accent uppercase">
              AMAS Inter Designers
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-display mb-8 text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
              We make the work you see on the street.
            </h2>
          </Reveal>
          <div className="space-y-8">
            {points.map((point) => (
              <Reveal key={point.title} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-surface text-white">
                  <Icon icon={point.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="font-display mb-2 text-xl font-medium tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-muted">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Magnetic>
              <Button href="/about" variant="outline" className="group w-fit">
                More about us
                <Icon
                  icon="solar:arrow-right-linear"
                  className="ml-2 text-xl transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
