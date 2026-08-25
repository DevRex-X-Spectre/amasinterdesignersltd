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
    src: "/assets/amtg-minerals-sign.jpg",
    alt: "Illuminated circular AMT'G Minerals logo sign",
    category: "Signage",
    projectSlug: "amtg-minerals",
    type: "image",
  },
  {
    src: "/assets/meat-frozen-foods-branding.jpg",
    alt: "Meat & Frozen Foods storefront branding",
    category: "Branding",
    projectSlug: "meat-and-frozen-foods",
    type: "image",
  },
  {
    src: "/assets/heroes-wall-of-fame.jpg",
    alt: "Heroes Wall of Fame commemorative lettering",
    category: "Fabrication",
    projectSlug: "heroes-wall-of-fame",
    type: "image",
  },
  {
    src: "/assets/zeeno-hub-channel-sign.jpg",
    alt: "Zeeno Hub 3D channel letter signboard",
    category: "Signage",
    projectSlug: "zeeno-hub",
    type: "image",
  },
  {
    src: "/assets/rightway-ministries-board.jpg",
    alt: "The Rightway Ministries outdoor welcome board",
    category: "Outdoor Advertising",
    projectSlug: "rightway-ministries",
    type: "image",
  },
  {
    src: "/assets/stanel-cafe-jos-sign.jpg",
    alt: "Stanel Café Jos indoor illuminated logo",
    category: "Signage",
    projectSlug: "stanel-cafe-jos",
    type: "image",
  },
  {
    src: "/assets/cedar-grove-hotel-fascia.jpg",
    alt: "Cedar Grove Hotel & Suites illuminated fascia",
    category: "Signage",
    projectSlug: "cedar-grove-hotel",
    type: "image",
  },
  {
    src: "/assets/grand-pure-soya-oil-totem.jpg",
    alt: "Grand Pure Soya Oil roadside totem",
    category: "Outdoor Advertising",
    projectSlug: "grand-pure-soya-oil",
    type: "image",
  },
  {
    src: "/assets/comforts-laundry-signboard.jpg",
    alt: "Comfort's Laundry service signboard",
    category: "Signage",
    projectSlug: "comforts-laundry",
    type: "image",
  },
  {
    src: "/assets/salvation-ministries-globe-sign.jpg",
    alt: "Salvation Ministries globe identity sign during install",
    category: "Fabrication",
    projectSlug: "salvation-ministries",
    type: "image",
  },
  {
    src: "/assets/teest-hotel-lettering.jpg",
    alt: "Teest Hotel & Suites dimensional lettering",
    category: "Signage",
    projectSlug: "teest-hotel-suites",
    type: "image",
  },
  {
    src: "/assets/diamond-dreams-mall-fascia.jpg",
    alt: "Diamond Dreams Mall illuminated fascia",
    category: "Signage",
    projectSlug: "diamond-dreams-mall",
    type: "image",
  },
  {
    src: "/assets/oak-prime-school-pylon.jpg",
    alt: "Oak-Prime Future Leaders School pylon sign",
    category: "Fabrication",
    projectSlug: "oak-prime-school",
    type: "image",
  },
  {
    src: "/assets/diamond-dreams-mall-lettering.jpg",
    alt: "Diamond Dreams Mall illuminated lettering detail",
    category: "Signage",
    projectSlug: "diamond-dreams-mall",
    type: "image",
  },
  {
    src: "/assets/vochmal-foods-branding.jpg",
    alt: "Vochmal Foods window branding installation",
    category: "Branding",
    projectSlug: "vochmal-foods",
    type: "image",
  },
  {
    src: "/assets/fyi-gas-pylon.jpg",
    alt: "FYI Gas pylon identity structure",
    category: "Fabrication",
    projectSlug: "fyi-gas",
    type: "image",
  },
  {
    src: "/assets/grand-pure-soya-oil-advertising.jpg",
    alt: "Grand Pure Soya Oil outdoor advertising totem",
    category: "Outdoor Advertising",
    projectSlug: "grand-pure-soya-oil",
    type: "image",
  },
  {
    src: "/assets/phm-superrix-logo.jpg",
    alt: "Phm Superrix Exclusive acrylic interior logo",
    category: "Signage",
    projectSlug: "phm-superrix",
    type: "image",
  },
  {
    src: "/assets/light-microfinance-bank-sign.jpg",
    alt: "Light Microfinance Bank identity sign",
    category: "Signage",
    projectSlug: "light-microfinance-bank",
    type: "image",
  },
  {
    src: "/assets/gbong-gwom-jos-palace-lettering.jpg",
    alt: "Gbong Gwom Jos Palace identity lettering installation",
    category: "Signage",
    projectSlug: "gbong-gwom-jos-palace",
    type: "image",
  },
  {
    src: "/assets/de-anchor-barbershop-board.jpg",
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
    src: "/assets/heroes-wall-of-fame.jpg",
    alt: "Heroes Wall of Fame commemorative lettering",
  },
  {
    src: "/assets/stanel-cafe-jos-sign.jpg",
    alt: "Stanel Café Jos indoor illuminated logo",
  },
  {
    src: "/assets/salvation-ministries-globe-sign.jpg",
    alt: "Salvation Ministries globe identity sign",
  },
  {
    src: "/assets/diamond-dreams-mall-fascia.jpg",
    alt: "Diamond Dreams Mall illuminated fascia",
  },
  {
    src: "/assets/grand-pure-soya-oil-totem.jpg",
    alt: "Grand Pure Soya Oil roadside totem",
  },
  {
    src: "/assets/teest-hotel-lettering.jpg",
    alt: "Teest Hotel & Suites dimensional lettering",
  },
  {
    src: "/assets/amtg-minerals-sign.jpg",
    alt: "AMT'G Minerals illuminated circular sign",
  },
  {
    src: "/assets/oak-prime-school-pylon.jpg",
    alt: "Oak-Prime Future Leaders School pylon",
  },
  {
    src: "/assets/zeeno-hub-channel-sign.jpg",
    alt: "Zeeno Hub 3D channel letter signboard",
  },
  {
    src: "/assets/de-anchor-barbershop-board.jpg",
    alt: "De Anchor Barbershop roadside identity board",
  },
] as const;
