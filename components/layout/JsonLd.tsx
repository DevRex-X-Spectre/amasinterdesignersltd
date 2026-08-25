import { site } from "@/data/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.isPlaceholder ? undefined : site.contact.phone,
    address: site.contact.isPlaceholder
      ? undefined
      : {
          "@type": "PostalAddress",
          streetAddress: site.contact.address,
          addressCountry: "NG",
        },
    sameAs: [
      site.social.x.href,
      site.social.facebook.href,
      site.social.instagram.href,
    ].filter(Boolean),
    areaServed: "NG",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
