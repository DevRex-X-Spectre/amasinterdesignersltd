export const projectCategories = [
  "Signage",
  "Branding",
  "Printing",
  "Fabrication",
  "Outdoor Advertising",
  "Vehicle Branding",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  image: string;
  images: string[];
  serviceSlugs: string[];
  featured: boolean;
  overview: string;
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "amtg-minerals",
    title: "AMT'G Minerals",
    category: "Signage",
    client: "AMT'G Minerals",
    image: "/assets/IMG-20260820-WA0026.jpg",
    images: ["/assets/IMG-20260820-WA0026.jpg"],
    serviceSlugs: ["led-illuminated-signs", "acrylic-signage"],
    featured: true,
    overview:
      "Circular illuminated logo sign produced for AMT'G Minerals. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "heroes-wall-of-fame",
    title: "Heroes Wall of Fame",
    category: "Fabrication",
    client: "Sector 3 OPHK / MNJTF",
    image: "/assets/IMG-20260820-WA0029.jpg",
    images: ["/assets/IMG-20260820-WA0029.jpg"],
    serviceSlugs: ["metal-fabrication", "signage-design-production"],
    featured: true,
    overview:
      "Commemorative wall lettering and plaques for the Heroes Wall of Fame, Sector 3 OPHK / MNJTF. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "meat-and-frozen-foods",
    title: "Meat & Frozen Foods",
    category: "Branding",
    client: "Meat & Frozen Foods",
    image: "/assets/IMG-20260820-WA0028.jpg",
    images: ["/assets/IMG-20260820-WA0028.jpg"],
    serviceSlugs: ["interior-exterior-branding", "signage-design-production"],
    featured: false,
    overview:
      "Full facade branding and dimensional lettering for a retail food storefront. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "zeeno-hub",
    title: "Zeeno Hub",
    category: "Signage",
    client: "Zeeno Hub",
    image: "/assets/IMG-20260820-WA0030.jpg",
    images: ["/assets/IMG-20260820-WA0030.jpg"],
    serviceSlugs: ["channel-letter-signage", "signage-design-production"],
    featured: true,
    overview:
      "3D channel-letter signboard produced for Zeeno Hub. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "rightway-ministries",
    title: "The Rightway Ministries",
    category: "Outdoor Advertising",
    client: "The Rightway Ministries",
    image: "/assets/IMG-20260820-WA0031.jpg",
    images: ["/assets/IMG-20260820-WA0031.jpg"],
    serviceSlugs: ["billboard-outdoor-advertising", "signage-design-production"],
    featured: false,
    overview:
      "Outdoor welcome board for The Rightway Ministries. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "stanel-cafe-jos",
    title: "Stanel Café Jos",
    category: "Signage",
    client: "Stanel Café Jos",
    image: "/assets/IMG-20260820-WA0033.jpg",
    images: ["/assets/IMG-20260820-WA0033.jpg"],
    serviceSlugs: ["led-illuminated-signs", "acrylic-signage"],
    featured: true,
    overview:
      "Indoor illuminated circular logo for Stanel Café Jos. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "cedar-grove-hotel",
    title: "Cedar Grove Hotel & Suites",
    category: "Signage",
    client: "Cedar Grove Hotel & Suites",
    image: "/assets/IMG-20260820-WA0058.jpg",
    images: ["/assets/IMG-20260820-WA0058.jpg"],
    serviceSlugs: ["channel-letter-signage", "led-illuminated-signs"],
    featured: false,
    overview:
      "Illuminated hotel fascia produced for Cedar Grove Hotel & Suites. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "grand-pure-soya-oil",
    title: "Grand Pure Soya Oil",
    category: "Outdoor Advertising",
    client: "Grand Cereal",
    image: "/assets/IMG-20260820-WA0059.jpg",
    images: [
      "/assets/IMG-20260820-WA0059.jpg",
      "/assets/IMG-20260820-WA0088.jpg",
    ],
    serviceSlugs: ["billboard-outdoor-advertising"],
    featured: true,
    overview:
      "Roadside totem for Grand Pure Soya Oil. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "comforts-laundry",
    title: "Comfort's Laundry",
    category: "Signage",
    client: "Comfort's Laundry and Drycleaning Services",
    image: "/assets/IMG-20260820-WA0066.jpg",
    images: ["/assets/IMG-20260820-WA0066.jpg"],
    serviceSlugs: ["signage-design-production", "large-format-printing"],
    featured: false,
    overview:
      "Service board produced for Comfort's Laundry and Drycleaning Services. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "salvation-ministries",
    title: "Salvation Ministries",
    category: "Fabrication",
    client: "Salvation Ministries",
    image: "/assets/IMG-20260820-WA0067.jpg",
    images: ["/assets/IMG-20260820-WA0067.jpg"],
    serviceSlugs: ["metal-fabrication", "signage-design-production"],
    featured: true,
    overview:
      "Large globe identity sign fabricated for Salvation Ministries. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "teest-hotel-suites",
    title: "Teest Hotel & Suites",
    category: "Signage",
    client: "Teest Hotel & Suites",
    image: "/assets/IMG-20260820-WA0068.jpg",
    images: ["/assets/IMG-20260820-WA0068.jpg"],
    serviceSlugs: ["channel-letter-signage"],
    featured: true,
    overview:
      "Dimensional fascia lettering produced for Teest Hotel & Suites. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "diamond-dreams-mall",
    title: "Diamond Dreams Mall",
    category: "Signage",
    client: "Diamond Dreams",
    image: "/assets/IMG-20260820-WA0073.jpg",
    images: [
      "/assets/IMG-20260820-WA0073.jpg",
      "/assets/IMG-20260820-WA0081.jpg",
    ],
    serviceSlugs: ["led-illuminated-signs", "channel-letter-signage"],
    featured: true,
    overview:
      "Illuminated mall fascia for Diamond Dreams Mall. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "oak-prime-school",
    title: "Oak-Prime Future Leaders School",
    category: "Fabrication",
    client: "Oak-Prime Future Leaders School",
    image: "/assets/IMG-20260820-WA0074.jpg",
    images: ["/assets/IMG-20260820-WA0074.jpg"],
    serviceSlugs: ["metal-fabrication", "signage-design-production"],
    featured: false,
    overview:
      "Monument / pylon sign produced for Oak-Prime Future Leaders School. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "vochmal-foods",
    title: "Vochmal Foods",
    category: "Branding",
    client: "Vochmal Bakery",
    image: "/assets/IMG-20260820-WA0082.jpg",
    images: ["/assets/IMG-20260820-WA0082.jpg"],
    serviceSlugs: ["interior-exterior-branding", "large-format-printing"],
    featured: false,
    overview:
      "Window branding programme for Vochmal Foods. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "fyi-gas",
    title: "FYI Gas",
    category: "Fabrication",
    client: "FYI Gas",
    image: "/assets/IMG-20260820-WA0085.jpg",
    images: ["/assets/IMG-20260820-WA0085.jpg"],
    serviceSlugs: ["metal-fabrication", "signage-design-production"],
    featured: false,
    overview:
      "Pylon identity structure produced for FYI Gas. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "phm-superrix",
    title: "Phm Superrix Exclusive",
    category: "Signage",
    client: "Phm Superrix Exclusive",
    image: "/assets/IMG-20260820-WA0089.jpg",
    images: ["/assets/IMG-20260820-WA0089.jpg"],
    serviceSlugs: ["acrylic-signage", "led-illuminated-signs"],
    featured: false,
    overview:
      "Shaped acrylic interior logo for Phm Superrix Exclusive. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "light-microfinance-bank",
    title: "Light Microfinance Bank",
    category: "Signage",
    client: "Light Microfinance Bank",
    image: "/assets/IMG-20260820-WA0095.jpg",
    images: ["/assets/IMG-20260820-WA0095.jpg"],
    serviceSlugs: ["signage-design-production", "acrylic-signage"],
    featured: false,
    overview:
      "Identity sign produced for Light Microfinance Bank. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "gbong-gwom-jos-palace",
    title: "Gbong Gwom Jos Palace",
    category: "Signage",
    client: "Plateau State Chieftency Affairs",
    image: "/assets/IMG-20260820-WA0096.jpg",
    images: ["/assets/IMG-20260820-WA0096.jpg"],
    serviceSlugs: ["signage-design-production", "metal-fabrication"],
    featured: false,
    overview:
      "Palace identity lettering for Gbong Gwom Jos Palace and the Plateau State Council of Chiefs and Emirs. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
  {
    slug: "de-anchor-barbershop",
    title: "De Anchor Barbershop & Salon",
    category: "Outdoor Advertising",
    client: "De Anchor Barbershop & Salon",
    image: "/assets/IMG-20260820-WA0099.jpg",
    images: ["/assets/IMG-20260820-WA0099.jpg"],
    serviceSlugs: ["signage-design-production", "billboard-outdoor-advertising"],
    featured: false,
    overview:
      "Roadside identity board for De Anchor Barbershop & Salon, Jos. Project overview to be completed with client-approved copy.",
    challenge: "Challenge details to be added.",
    solution: "Solution details to be added.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);
  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => Number(b.category === current.category) - Number(a.category === current.category))
    .slice(0, limit);
}

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectsByService(serviceSlug: string, limit = 3) {
  return projects
    .filter((project) => project.serviceSlugs.includes(serviceSlug))
    .slice(0, limit);
}
