import { Icon } from "@iconify/react";
import { whyChoose } from "@/data/why-choose";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/motion/Reveal";

export function WhyChooseUs() {
  return (
    <section className="border-t border-border bg-background py-20">
      <Container className="grid grid-cols-2 gap-8 divide-border md:grid-cols-4 md:gap-4 md:divide-x">
        {whyChoose.map((item) => (
          <Reveal
            key={item.title}
            className="flex flex-col items-center px-4 text-center"
          >
            <Icon icon={item.icon} className="mb-4 text-4xl text-white" />
            <h4 className="font-display mb-1 text-sm font-medium tracking-tight">
              {item.title}
            </h4>
            <p className="text-xs font-light text-muted">{item.description}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
