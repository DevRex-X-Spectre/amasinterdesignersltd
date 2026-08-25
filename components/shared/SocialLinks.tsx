"use client";

import { Icon } from "@iconify/react";
import { site } from "@/data/site";

const items = [
  {
    key: "facebook",
    icon: "simple-icons:facebook",
    href: site.social.facebook.href,
    label: "Facebook",
  },
  {
    key: "instagram",
    icon: "simple-icons:instagram",
    href: site.social.instagram.href,
    label: "Instagram",
  },
  {
    key: "tiktok",
    icon: "simple-icons:tiktok",
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
        const classes = `text-muted transition-colors hover:text-white ${iconClassName}`.trim();
        if (!item.href) {
          return (
            <span
              key={item.key}
              className={`${classes} cursor-not-allowed opacity-50`}
              title={`${item.label} URL coming soon`}
              aria-disabled="true"
            >
              <Icon icon={item.icon} aria-hidden />
              <span className="sr-only">{item.label} (link coming soon)</span>
            </span>
          );
        }
        return (
          <a
            key={item.key}
            href={item.href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            <Icon icon={item.icon} aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
