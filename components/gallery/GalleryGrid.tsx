"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { projectCategories } from "@/data/projects";
import { Lightbox } from "./Lightbox";

const filters = ["All", ...projectCategories] as const;

function tileSpan(index: number, total: number) {
  const remainder = total % 6;
  const remainderStart = total - remainder;

  if (remainder !== 0 && index >= remainderStart) {
    if (remainder === 1) return "col-span-2 lg:col-span-12 lg:row-span-2";
    if (remainder === 2 || remainder === 4) {
      return "col-span-1 lg:col-span-6 lg:row-span-2";
    }
    if (remainder === 3) return "col-span-1 lg:col-span-4 lg:row-span-2";
    const pos = index - remainderStart;
    if (pos === 0) return "col-span-2 lg:col-span-8 lg:row-span-2";
    if (pos === 1 || pos === 2) return "col-span-1 lg:col-span-4 lg:row-span-1";
    return "col-span-1 lg:col-span-6 lg:row-span-2";
  }

  const pos = index % 6;
  if (pos === 0) return "col-span-2 lg:col-span-8 lg:row-span-2";
  if (pos === 1 || pos === 2) return "col-span-1 lg:col-span-4 lg:row-span-1";
  return "col-span-1 lg:col-span-4 lg:row-span-2";
}

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

  return (
    <div>
      <div className="-mx-6 mb-10 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
        {filters.map((item) => {
          const count =
            item === "All"
              ? galleryItems.length
              : galleryItems.filter((entry) => entry.category === item).length;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`shrink-0 border px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
                filter === item
                  ? "border-accent bg-accent text-white"
                  : "border-border text-muted hover:border-white hover:text-white"
              }`}
            >
              {item}
              <span className="ml-2 text-[10px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {items.length === 0 ? (
        <p className="border border-dashed border-border bg-surface px-6 py-16 text-center text-sm font-light text-muted">
          No work in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-flow-dense lg:auto-rows-[200px] xl:auto-rows-[240px]">
          {items.map((item, index) => (
            <GalleryTile
              key={item.src}
              item={item}
              span={tileSpan(index, items.length)}
              onOpen={() => setActive(index)}
            />
          ))}
        </div>
      )}

      {active !== null ? (
        <Lightbox
          items={items}
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
  span,
  onOpen,
}: {
  item: GalleryItem;
  span: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative h-full min-h-[220px] overflow-hidden rounded-2xl bg-surface text-left shadow-[0_18px_40px_rgba(0,0,0,0.24)] ${span}`}
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          muted
          playsInline
          preload="metadata"
          aria-hidden
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      <span className="absolute top-3 left-3 rounded border border-white/15 bg-background/70 px-2 py-1 text-[10px] tracking-widest text-muted uppercase backdrop-blur">
        {item.category}
      </span>
      {item.type === "video" ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-background/60 text-white backdrop-blur transition-transform duration-500 group-hover:scale-110">
            <Icon icon="solar:play-linear" className="ml-0.5 h-6 w-6" />
          </span>
        </span>
      ) : null}
      <span className="absolute right-4 bottom-4 left-4 line-clamp-2 translate-y-1 text-sm text-white opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {item.alt}
      </span>
    </button>
  );
}
