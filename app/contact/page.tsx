import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AMAS Inter Designers Ltd. Phone, email, and address will be published here when confirmed.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Phone, email, address, and hours will sit here as soon as they are confirmed. You can still leave a message."
      />
      <section className="bg-background py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <ContactDetails />
            <div className="mt-12 flex min-h-[240px] items-center justify-center rounded-2xl border border-dashed border-border bg-surface text-center">
              <p className="max-w-xs px-6 text-sm font-light text-muted">
                A map will sit here once the address is confirmed.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display mb-6 text-2xl font-semibold tracking-tight">
              Send a message
            </h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
