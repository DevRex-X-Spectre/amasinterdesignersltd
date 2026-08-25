export const site = {
  name: "AMAS Inter Designers Ltd.",
  legalName: "AMAS Inter Designers Ltd.",
  wordmark: {
    primary: "AMAS",
    accent: "Inter",
  },
  logo: "/assets/logo.png",
  tagline: "Signs, branding, and outdoor work, made and installed.",
  description:
    "AMAS Inter Designers Ltd. designs, builds, and installs signs, branding, print, and outdoor work for businesses, schools, hotels, and public sites.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.amasinterdesigners.com",
  locale: "en_NG",
  contact: {
    phone: "Phone coming soon",
    phoneHref: undefined as string | undefined,
    email: "Email coming soon",
    emailHref: undefined as string | undefined,
    address: "Address coming soon",
    hours: "Hours coming soon",
    whatsappHref: undefined as string | undefined,
    isPlaceholder: true,
  },
  social: {
    x: { href: undefined as string | undefined, label: "X" },
    facebook: { href: undefined as string | undefined, label: "Facebook" },
    instagram: { href: undefined as string | undefined, label: "Instagram" },
  },
} as const;

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
  { href: "/quote", label: "Request a Quote" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
] as const;
