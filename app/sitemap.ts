import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/gallery",
    "/quote",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/portfolio/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
