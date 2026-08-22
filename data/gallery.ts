import type { ProjectCategory } from "./projects";

export type GalleryItem = {
  src: string;
  alt: string;
  category: ProjectCategory;
  projectSlug?: string;
  type: "image" | "video";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/IMG-20260820-WA0026.jpg",
    alt: "Illuminated circular AMT'G Minerals logo sign",
    category: "Signage",
    projectSlug: "amtg-minerals",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0028.jpg",
    alt: "Meat & Frozen Foods storefront branding",
    category: "Branding",
    projectSlug: "meat-and-frozen-foods",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0029.jpg",
    alt: "Heroes Wall of Fame commemorative lettering",
    category: "Fabrication",
    projectSlug: "heroes-wall-of-fame",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0030.jpg",
    alt: "Zeeno Hub 3D channel letter signboard",
    category: "Signage",
    projectSlug: "zeeno-hub",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0031.jpg",
    alt: "The Rightway Ministries outdoor welcome board",
    category: "Outdoor Advertising",
    projectSlug: "rightway-ministries",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0033.jpg",
    alt: "Stanel Café Jos indoor illuminated logo",
    category: "Signage",
    projectSlug: "stanel-cafe-jos",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0058.jpg",
    alt: "Cedar Grove Hotel & Suites illuminated fascia",
    category: "Signage",
    projectSlug: "cedar-grove-hotel",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0059.jpg",
    alt: "Grand Pure Soya Oil roadside totem",
    category: "Outdoor Advertising",
    projectSlug: "grand-pure-soya-oil",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0066.jpg",
    alt: "Comfort's Laundry service signboard",
    category: "Signage",
    projectSlug: "comforts-laundry",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0067.jpg",
    alt: "Salvation Ministries globe identity sign during install",
    category: "Fabrication",
    projectSlug: "salvation-ministries",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0068.jpg",
    alt: "Teest Hotel & Suites dimensional lettering",
    category: "Signage",
    projectSlug: "teest-hotel-suites",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0073.jpg",
    alt: "Diamond Dreams Mall illuminated fascia",
    category: "Signage",
    projectSlug: "diamond-dreams-mall",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0074.jpg",
    alt: "Oak-Prime Future Leaders School pylon sign",
    category: "Fabrication",
    projectSlug: "oak-prime-school",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0081.jpg",
    alt: "Diamond Dreams Mall illuminated lettering detail",
    category: "Signage",
    projectSlug: "diamond-dreams-mall",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0082.jpg",
    alt: "Vochmal Foods window branding installation",
    category: "Branding",
    projectSlug: "vochmal-foods",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0085.jpg",
    alt: "FYI Gas pylon identity structure",
    category: "Fabrication",
    projectSlug: "fyi-gas",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0088.jpg",
    alt: "Grand Pure Soya Oil outdoor advertising totem",
    category: "Outdoor Advertising",
    projectSlug: "grand-pure-soya-oil",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0089.jpg",
    alt: "Phm Superrix Exclusive acrylic interior logo",
    category: "Signage",
    projectSlug: "phm-superrix",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0095.jpg",
    alt: "Light Microfinance Bank identity sign",
    category: "Signage",
    projectSlug: "light-microfinance-bank",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0096.jpg",
    alt: "Gbong Gwom Jos Palace identity lettering installation",
    category: "Signage",
    projectSlug: "gbong-gwom-jos-palace",
    type: "image",
  },
  {
    src: "/assets/IMG-20260820-WA0099.jpg",
    alt: "De Anchor Barbershop & Salon roadside board",
    category: "Outdoor Advertising",
    projectSlug: "de-anchor-barbershop",
    type: "image",
  },
  {
    src: "/assets/VID-20260820-WA0100.mp4",
    alt: "AMAS Inter Designers production and installation footage",
    category: "Fabrication",
    type: "video",
  },
];

export const heroSlides = [
  {
    src: "/assets/IMG-20260820-WA0029.jpg",
    alt: "Heroes Wall of Fame commemorative lettering",
  },
  {
    src: "/assets/IMG-20260820-WA0033.jpg",
    alt: "Stanel Café Jos indoor illuminated logo",
  },
  {
    src: "/assets/IMG-20260820-WA0067.jpg",
    alt: "Salvation Ministries globe identity sign",
  },
  {
    src: "/assets/IMG-20260820-WA0073.jpg",
    alt: "Diamond Dreams Mall illuminated fascia",
  },
  {
    src: "/assets/IMG-20260820-WA0059.jpg",
    alt: "Grand Pure Soya Oil roadside totem",
  },
  {
    src: "/assets/IMG-20260820-WA0068.jpg",
    alt: "Teest Hotel & Suites dimensional lettering",
  },
  {
    src: "/assets/IMG-20260820-WA0026.jpg",
    alt: "AMT'G Minerals illuminated circular sign",
  },
  {
    src: "/assets/IMG-20260820-WA0074.jpg",
    alt: "Oak-Prime Future Leaders School pylon",
  },
  {
    src: "/assets/IMG-20260820-WA0030.jpg",
    alt: "Zeeno Hub 3D channel letter signboard",
  },
  {
    src: "/assets/IMG-20260820-WA0099.jpg",
    alt: "De Anchor Barbershop roadside identity board",
  },
] as const;
