"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { whatsappHref } from "@/data/site";
import { Wordmark } from "@/components/shared/Wordmark";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-background/95" : "bg-background/90"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:h-[88px] sm:px-6 lg:px-8">
        <Wordmark priority />

        <div className="hidden items-center gap-7 text-sm font-medium text-white/90 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors hover:text-white ${active ? "text-white" : ""} after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
                  active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={whatsappHref("Hello AMAS Inter Designers, I would like to request pricing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Request Pricing
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon
              icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
              className="text-3xl"
            />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="py-3 text-lg text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={whatsappHref("Hello AMAS Inter Designers, I would like to request pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-4 inline-flex items-center justify-center bg-accent px-8 py-4 text-sm font-medium text-white"
            >
              Request Pricing
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
