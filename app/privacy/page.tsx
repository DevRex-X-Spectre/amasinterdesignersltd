import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AMAS Inter Designers Ltd. intends to treat information on this public site.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="A holding policy until the legal version is written. This is not legal advice."
      />
      <section className="bg-background py-20">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed font-light text-muted">
          <p>
            We will publish a full privacy policy here. For now, this page
            explains how this public site is meant to treat information you send.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">
            Information you send
          </h2>
          <p>
            Quote and contact forms check your answers in the browser only. They
            do not go to a server until a backend is connected. Please do not
            send sensitive personal data through them until that is in place.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">
            Analytics and cookies
          </h2>
          <p>
            No analytics tool is set up on this site yet. If tracking is added
            later, we will update this page.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">
            Contact
          </h2>
          <p>
            How to reach us about privacy will be listed on the Contact page
            once those details are confirmed.
          </p>
        </Container>
      </section>
    </>
  );
}
