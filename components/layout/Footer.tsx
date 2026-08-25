import Link from "next/link";
import { footerQuickLinks, site, whatsappHref } from "@/data/site";
import { services } from "@/data/services";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Wordmark } from "@/components/shared/Wordmark";
import { Container } from "@/components/shared/Container";

export function Footer() {
  const serviceLinks = services.slice(0, 6);

  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <Container className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
        <div>
          <Wordmark className="mb-4" />
          <p className="max-w-xs text-xs leading-relaxed font-light text-muted">
            {site.description}
          </p>
        </div>
        <div>
          <h4 className="font-display mb-6 text-sm font-medium tracking-wider uppercase">
            Explore
          </h4>
          <ul className="space-y-3 text-sm font-light text-muted">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                {link.href === "/quote" ? (
                  <a
                    href={whatsappHref("Good day, AMAS Inter Designers. I would like to request pricing for a signage or branding project. Please let me know how I can provide the project details. Thank you.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display mb-6 text-sm font-medium tracking-wider uppercase">
            Services
          </h4>
          <ul className="space-y-3 text-sm font-light text-muted">
            {serviceLinks.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="transition-colors hover:text-white">
                All services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display mb-6 text-sm font-medium tracking-wider uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-sm font-light text-muted">
            <li>{site.contact.phone}</li>
            <li>{site.contact.address}</li>
            <li>{site.contact.hours}</li>
          </ul>
          <SocialLinks className="mt-6" />
        </div>
      </Container>
      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p className="text-xs font-light text-muted">
          © 2026 {site.legalName}. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-xs font-light text-muted">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </Container>
    </footer>
  );
}
