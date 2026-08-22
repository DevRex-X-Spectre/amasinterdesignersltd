import type { Metadata } from "next";
import { serviceGroups, services } from "@/data/services";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { ImageCard } from "@/components/shared/ImageCard";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Signage, branding, printing, fabrication, and outdoor advertising from AMAS Inter Designers Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we can make for you"
        description="Signs, branding, print, metalwork, and outdoor boards. Pick a service to see what it usually includes."
      />
      {serviceGroups.map((group) => {
        const items = services.filter((service) => service.group === group);
        return (
          <section key={group} className="border-b border-border bg-background py-20">
            <Container>
              <h2 className="font-display mb-10 text-2xl font-semibold tracking-tight md:text-3xl">
                {group}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <ImageCard
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    image={service.image}
                    alt={service.title}
                    title={service.title}
                    category={service.group}
                    description={service.shortDescription}
                  />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
      <FinalCTA />
    </>
  );
}
