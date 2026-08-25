export const site = {
  name: "AMAS Inter Designers Ltd.",
  legalName: "AMAS Inter Designers Ltd.",
  wordmark: {
    primary: "AMAS",
    accent: "INTER DESIGNERS LTD.",
    tagline: "",
  },
  logo: "/assets/logo.png",
  tagline: "Signs, branding, and outdoor work, made and installed.",
  description:
    "AMAS Inter Designers Ltd. designs, builds, and installs signs, branding, print, and outdoor work for businesses, schools, hotels, and public sites.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.amasinterdesigners.com",
  locale: "en_NG",
  contact: {
    phone: "+234 906 048 8721",
    phoneHref: "tel:+2349060488721",
    address: "AMAS Inter Designers Limited, VVQG+8QJ, Jos 930104, Plateau",
    latitude: 9.8886712,
    longitude: 8.8769014,
    coordinates: "9.8886712° N, 8.8769014° E",
    mapsHref:
      "https://www.google.com/maps/place/AMAS+Inter+Designers+Limited/@9.8886712,8.8769014,17z",
    hours: "8:00 AM - 6:00 PM, Monday - Saturday",
    whatsappHref: "https://wa.me/2349060488721",
    isPlaceholder: false,
  },
  social: {
    x: { href: undefined as string | undefined, label: "X" },
    facebook: {
      href: "https://www.facebook.com/share/1JuCvAhR3T/",
      label: "Facebook",
    },
    instagram: {
      href: "https://www.instagram.com/amas_inter_designers_ltd?igsi=dzBhdHlreHEwYWs0",
      label: "Instagram",
    },
    tiktok: {
      href: "https://www.tiktok.com/@amas_designers?_r=1&_t=ZS-99B7jro307w",
      label: "TikTok",
    },
  },
} as const;

export function whatsappHref(message?: string) {
  const base = site.contact.whatsappHref;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/quote", label: "Request Pricing" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
] as const;
