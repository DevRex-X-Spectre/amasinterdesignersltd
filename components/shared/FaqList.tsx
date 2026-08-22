"use client";

import { useState } from "react";
import type { Faq } from "@/data/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="rounded-2xl border border-border bg-surface">
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span className="font-display pr-6 text-base font-medium tracking-tight">
                {item.question}
              </span>
              <span className="text-accent">{expanded ? "-" : "+"}</span>
            </button>
            {expanded ? (
              <p className="px-6 pb-6 text-sm leading-relaxed font-light text-muted">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
