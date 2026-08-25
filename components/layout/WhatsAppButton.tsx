"use client";

import { Icon } from "@/components/icons/Icon";
import { whatsappHref } from "@/data/site";

export function WhatsAppButton() {
  const href = whatsappHref("Good day, AMAS Inter Designers. I would like to make an enquiry about your services. Please let me know how you can assist. Thank you.");

  const className =
    "fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-transform duration-500 hover:scale-125";

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Icon icon="solar:phone-calling-linear" className="text-2xl" />
    </a>
  );
}
