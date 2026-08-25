import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { JsonLd } from "@/components/layout/JsonLd";
import { Intro } from "@/components/motion/Intro";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: {
    canonical: site.url,
  },
  title: {
    default: `${site.name} | Signage, Branding & Fabrication`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: new URL(site.logo, site.url).toString(),
        width: 1254,
        height: 1254,
        alt: "AMAS Inter Designers Ltd. logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [new URL(site.logo, site.url).toString()],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-white">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-accent focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Intro />
        <SmoothScroll>
            <Navbar />
            <main id="main" className="flex-1 pb-24">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
