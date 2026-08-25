"use client";

import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import { site } from "@/data/site";

const brandIcons = {
  facebook: SiFacebook,
  instagram: SiInstagram,
  tiktok: SiTiktok,
} as const;

const items = [
  {
    key: "facebook",
    href: site.social.facebook.href,
    label: "Facebook",
  },
  {
    key: "instagram",
    href: site.social.instagram.href,
    label: "Instagram",
  },
  {
    key: "tiktok",
    href: site.social.tiktok.href,
    label: "TikTok",
  },
] as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({
  className = "",
  iconClassName = "text-xl",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`.trim()}>
      {items.map((item) => {
        const BrandIcon = brandIcons[item.key];
        const hoverColor = {
          facebook: "hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#4f9cff]",
          instagram: "hover:border-[#E4405F] hover:bg-[#E4405F]/10 hover:text-[#ff6b85]",
          tiktok: "hover:border-[#25F4EE] hover:bg-[#25F4EE]/10 hover:text-[#25F4EE]",
        }[item.key];
        return (
          <a
            key={item.key}
            href={item.href}
            className={`group flex h-11 w-11 items-center justify-center rounded-full text-muted transition-[transform,color,background-color] duration-300 hover:-translate-y-1 hover:scale-110 hover:rotate-3 focus-visible:-translate-y-1 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${hoverColor}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            <BrandIcon aria-hidden className={`transition-transform duration-300 group-hover:scale-110 ${iconClassName}`} />
          </a>
        );
      })}
    </div>
  );
}
