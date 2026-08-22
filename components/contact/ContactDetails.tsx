"use client";

import { Icon } from "@iconify/react";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/shared/SocialLinks";

const details = [
  { icon: "solar:phone-linear", label: "Phone", value: site.contact.phone },
  { icon: "solar:letter-linear", label: "Email", value: site.contact.email },
  { icon: "solar:map-point-linear", label: "Address", value: site.contact.address },
  { icon: "solar:clock-circle-linear", label: "Hours", value: site.contact.hours },
];

export function ContactDetails() {
  return (
    <div>
      <h2 className="font-display mb-8 text-2xl font-semibold tracking-tight">
        Details
      </h2>
      <ul className="space-y-6">
        {details.map((item) => (
          <li key={item.label} className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface">
              <Icon icon={item.icon} className="text-xl" />
            </div>
            <div>
              <div className="text-xs tracking-widest text-muted uppercase">
                {item.label}
              </div>
              <div className="mt-1 text-sm">{item.value}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <div className="mb-3 text-xs tracking-widest text-muted uppercase">
          Social
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}
