import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request Pricing",
  description:
    "Request pricing from AMAS Inter Designers Ltd. for signage, branding, printing, or fabrication.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote"
        title="Tell us about the job"
        description="Required fields are marked. Fill this in and your request will open in WhatsApp for the company consultant."
      />
      <section className="bg-background py-20">
        <Container className="max-w-4xl">
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}
