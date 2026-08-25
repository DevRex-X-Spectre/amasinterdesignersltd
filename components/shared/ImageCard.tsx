"use client";

import { Icon } from "@/components/icons/Icon";
import Image from "next/image";
import Link from "next/link";

type ImageCardProps = {
  href: string;
  image: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
};

export function ImageCard({
  href,
  image,
  alt,
  title,
  category,
  description,
}: ImageCardProps) {
  return (
    <Link
      href={href}
      className="image-card-3d group relative flex cursor-pointer flex-col rounded-2xl bg-gradient-to-br from-[#142e63] via-surface to-[#071a3d] p-4 transition-all duration-500"
    >
      <div className="relative z-10 mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-background shadow-[0_10px_20px_rgba(0,0,0,0.34)] [transform:translateZ(18px)]">
        <span className="absolute top-3 left-3 z-10 rounded border border-border bg-background/80 px-2 py-1 text-xs text-muted backdrop-blur">
          {category}
        </span>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-16deg] transition-transform duration-700 ease-out group-hover:translate-x-full" />
        <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-center gap-2 bg-gradient-to-t from-background/80 to-transparent py-4 text-xs tracking-[0.2em] text-white uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View
          <Icon icon="solar:arrow-right-linear" />
        </span>
      </div>
      <div className="relative z-10 mt-auto [transform:translateZ(8px)]">
        <div className="font-display mb-1 text-xs tracking-widest text-muted uppercase">
          {category}
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <h3 className="truncate text-base font-medium transition-colors group-hover:text-white">
            {title}
          </h3>
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-border transition-all duration-500 group-hover:rotate-[-20deg] group-hover:bg-white group-hover:text-background">
            <Icon icon="solar:arrow-right-linear" />
          </span>
        </div>
        {description ? (
          <p className="mt-2 line-clamp-2 text-sm font-light text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
