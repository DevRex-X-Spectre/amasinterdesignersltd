import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { FaqList } from "@/components/shared/FaqList";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions about quotes, production, and installation at AMAS Inter Designers Ltd.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions people actually ask"
        description="How a job works, how to get a price, and what to have ready before you write."
      />
      <section className="bg-background py-20">
        <Container className="max-w-3xl">
          <FaqList items={faqs} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
