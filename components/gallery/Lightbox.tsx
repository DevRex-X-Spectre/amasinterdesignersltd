"use client";

import { Icon } from "@/components/icons/Icon";
import Image from "next/image";
import { useEffect } from "react";
import type { GalleryItem } from "@/data/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onIndex]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-6 right-6 text-white"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <Icon icon="solar:close-circle-linear" className="text-3xl" />
      </button>
      <button
        type="button"
        className="absolute left-4 flex h-12 w-12 items-center justify-center border border-border text-white md:left-8"
        onClick={(event) => {
          event.stopPropagation();
          onIndex((index - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
      >
        <Icon icon="solar:arrow-left-linear" className="text-2xl" />
      </button>
      <div
        className="relative h-[80vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>
      <button
        type="button"
        className="absolute right-4 flex h-12 w-12 items-center justify-center border border-border text-white md:right-8"
        onClick={(event) => {
          event.stopPropagation();
          onIndex((index + 1) % items.length);
        }}
        aria-label="Next image"
      >
        <Icon icon="solar:arrow-right-linear" className="text-2xl" />
      </button>
    </div>
  );
}
