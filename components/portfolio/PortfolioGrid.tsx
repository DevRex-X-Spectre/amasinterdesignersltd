"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/projects";
import { ImageCard } from "@/components/shared/ImageCard";

const filters = ["All", ...projectCategories] as const;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`border px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
              filter === item
                ? "border-accent bg-accent text-white"
                : "border-border text-muted hover:border-white hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <ImageCard
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            image={project.image}
            alt={project.title}
            title={project.title}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
}
