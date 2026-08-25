"use client";

import { Icon } from "@/components/icons/Icon";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { site, whatsappHref } from "@/data/site";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function ContactDetails() {
  return (
    <div className="space-y-4">
      <a href={whatsappHref("Good day, AMAS Inter Designers. I would like to make an enquiry about your services. Please let me know how you can assist. Thank you.")} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-[#25D366]/10 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#25D366]/15">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white"><SiWhatsapp className="text-xl" aria-hidden /></div>
          <div><div className="text-xs tracking-widest text-muted uppercase">WhatsApp Consultant</div><div className="mt-1 text-lg font-medium">{site.contact.phone}</div></div>
        </div>
        <Icon icon="solar:arrow-right-up-linear" className="text-xl text-[#25D366] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
      <a href={site.contact.phoneHref} className="group flex items-center justify-between bg-surface p-5 shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#112858]">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-background text-white"><Icon icon="solar:phone-linear" className="text-xl" /></div>
          <div><div className="text-xs tracking-widest text-muted uppercase">Call the company</div><div className="mt-1 text-lg font-medium">{site.contact.phone}</div></div>
        </div>
        <Icon icon="solar:arrow-right-up-linear" className="text-xl text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
      <div className="border-t border-border pt-8">
        <div className="mb-3 text-xs tracking-widest text-muted uppercase">Social channels</div>
        <SocialLinks iconClassName="text-2xl" />
      </div>
    </div>
  );
}
