import { Icon } from "@iconify/react";
import Link from "next/link";
import { featuredServices } from "@/data/services";
import { Container } from "@/components/shared/Container";
import { ImageCard } from "@/components/shared/ImageCard";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesPreview() {
  return (
    <section className="bg-background py-32">
      <Container>
        <Reveal className="mb-16 flex items-end justify-between">
          <div>
            <span className="mb-2 block text-sm font-medium tracking-widest text-accent uppercase">
              Services
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              What we can make for you
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden items-center border-b border-transparent pb-2 text-sm text-muted transition-colors hover:border-white hover:text-white md:flex"
          >
            Explore All Services
            <Icon icon="solar:arrow-right-linear" className="ml-1" />
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <ImageCard
                href={`/services/${service.slug}`}
                image={service.image}
                alt={service.title}
                title={service.title}
                category={service.group}
                description={service.shortDescription}
              />
            </Reveal>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-8 flex items-center text-sm text-muted md:hidden"
        >
          Explore All Services
          <Icon icon="solar:arrow-right-linear" className="ml-1" />
        </Link>
      </Container>
    </section>
  );
}
