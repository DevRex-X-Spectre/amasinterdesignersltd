import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { LocationMap } from "@/components/contact/LocationMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach AMAS Inter Designers Ltd. directly through WhatsApp, phone, and social channels.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="The fastest way to reach us is WhatsApp. You can also call or connect with us on social media."
      />
      <section className="bg-background py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="mb-4 block text-sm font-medium tracking-widest text-accent uppercase">Direct contact</span>
            <h2 className="font-display max-w-md text-3xl font-semibold tracking-tight md:text-4xl">Choose the channel that works for you.</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed font-light text-muted">Tell the consultant what you need, share a reference image on WhatsApp, or call for a quick conversation about your project.</p>
          </div>
          <ContactDetails />
        </Container>
      </section>
      <section className="border-t border-border bg-surface py-20">
        <Container>
          <div className="mb-8">
            <span className="mb-3 block text-sm font-medium tracking-widest text-accent uppercase">Our location</span>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Visit AMAS in Jos.</h2>
          </div>
          <LocationMap />
        </Container>
      </section>
    </>
  );
}
