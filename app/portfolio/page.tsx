import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected signage, branding, fabrication, and outdoor work by AMAS Inter Designers Ltd.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work you can walk up to"
        description="Names come from the signs in the photos. We will add longer write-ups once each client has signed them off."
      />
      <section className="bg-background py-20">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
