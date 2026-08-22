import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from AMAS Inter Designers Ltd. for signage, branding, printing, or fabrication.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote"
        title="Tell us about the job"
        description="Required fields are marked. Fill this in and we will take it from there. The form is ready to connect to a backend when that is set up."
      />
      <section className="bg-background py-20">
        <Container className="max-w-4xl">
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}
