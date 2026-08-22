import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Holding terms for the AMAS Inter Designers Ltd. public website."
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="Holding terms until a lawyer has reviewed them. This is not a final contract."
      />
      <section className="bg-background py-20">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed font-light text-muted">
          <p>
            This site is here so you can see our work and ask us to make
            something. These terms will be replaced with a lawyer-reviewed
            version before a public launch if that is needed.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">
            Quotes
          </h2>
          <p>
            Sending a quote request does not start a contract. We only begin
            production after a written agreement and any deposit that is due.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">
            Content
          </h2>
          <p>
            Photographs on this site show work we made. Names you can read on
            the signs are there to identify the job. Client comments on the
            home page are written for this site and can be replaced with
            approved quotes.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">
            Liability
          </h2>
          <p>
            Limits of liability, governing law, and how disputes are handled
            will be added by legal counsel.
          </p>
        </Container>
      </section>
    </>
  );
}
