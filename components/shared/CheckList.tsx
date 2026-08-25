"use client";

import { Icon } from "@/components/icons/Icon";

export function CheckList({
  items,
  columns = 2,
}: {
  items: readonly string[];
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`grid grid-cols-1 gap-4 ${columns === 2 ? "sm:grid-cols-2" : ""}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-accent">
            <Icon icon="solar:check-circle-bold" className="text-lg" />
          </span>
          <span className="text-sm leading-relaxed text-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}
