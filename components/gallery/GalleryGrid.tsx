"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { projectCategories } from "@/data/projects";
import { Lightbox } from "./Lightbox";

const filters = ["All", ...projectCategories] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const lightboxItems = items.filter((item) => item.type === "image");

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
              filter === item
                ? "border-accent bg-accent text-white"
                : "border-border text-muted hover:border-white hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[150px] lg:grid-cols-12">
        {items.map((item, index) => (
          <GalleryTile
            key={item.src}
            item={item}
            index={index}
            onOpen={() => {
              if (item.type === "image") {
                const index = lightboxItems.findIndex((entry) => entry.src === item.src);
                setActive(index);
              }
            }}
          />
        ))}
      </div>
      {active !== null ? (
        <Lightbox
          items={lightboxItems}
          index={active}
          onClose={() => setActive(null)}
          onIndex={setActive}
        />
      ) : null}
    </div>
  );
}

function GalleryTile({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
}) {
  const layoutClass =
    item.type === "video"
      ? "sm:col-span-2 lg:col-span-12 lg:row-span-2"
      : index === 0 || index === 5
        ? "lg:col-span-6 lg:row-span-2"
        : "lg:col-span-3 lg:row-span-1";

  if (item.type === "video") {
    return (
      <div className={`relative min-h-[260px] overflow-hidden rounded-2xl bg-surface shadow-[0_18px_40px_rgba(0,0,0,0.24)] ${layoutClass}`}>
        <video
          src={item.src}
          className="h-full w-full object-cover"
          controls
          preload="metadata"
          aria-label={item.alt}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative min-h-[260px] overflow-hidden rounded-2xl bg-surface shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:aspect-[4/3] lg:aspect-auto ${layoutClass}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
      <span className="absolute right-4 bottom-4 left-4 text-left text-sm text-white transition-transform duration-500 group-hover:-translate-y-1">
        {item.alt}
      </span>
    </button>
  );
}
