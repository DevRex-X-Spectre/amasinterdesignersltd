export const serviceGroups = [
  "Signage",
  "Branding",
  "Printing",
  "Fabrication",
  "Advertising",
] as const;

export type ServiceGroup = (typeof serviceGroups)[number];

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroup;
  shortDescription: string;
  description: string;
  includes: string[];
  image: string;
  featured: boolean;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "signage-design-production",
    title: "Signage Design & Production",
    group: "Signage",
    shortDescription: "Indoor and outdoor signs, from the first drawing to the install.",
    description:
      "We design the sign around your brand, build it in the workshop, and install it on site. Shops, offices, schools, and public buildings.",
    includes: [
      "Concept and layout",
      "Material and lighting specification",
      "Production and finishing",
      "Delivery and installation",
    ],
    image: "/assets/comforts-laundry-signboard.jpg",
    featured: true,
    icon: "solar:shop-linear",
  },
  {
    slug: "channel-letter-signage",
    title: "3D & Channel Letter Signage",
    group: "Signage",
    shortDescription: "Raised letters you can read from the street, day or night.",
    description:
      "3D and channel letter signs for shopfronts, hotels, and buildings. Clean edges, the right colour, and mounting that sits true.",
    includes: [
      "3D letter fabrication",
      "Front-lit and halo-lit options",
      "Brand colour matching",
      "On-site mounting",
    ],
    image: "/assets/zeeno-hub-channel-sign.jpg",
    featured: true,
    icon: "solar:text-bold-linear",
  },
  {
    slug: "led-illuminated-signs",
    title: "LED & Illuminated Signs",
    group: "Signage",
    shortDescription: "Lit signs and logos that still read after dark.",
    description:
      "LED logos, lightboxes, and backlit lettering for reception walls and building fronts. Built so they still look even at night.",
    includes: [
      "LED and neon-style lighting",
      "Indoor and outdoor-rated builds",
      "Power and mounting planning",
      "Night-time testing",
    ],
    image: "/assets/amtg-minerals-sign.jpg",
    featured: true,
    icon: "solar:lightbulb-linear",
  },
  {
    slug: "acrylic-signage",
    title: "Acrylic Signage",
    group: "Signage",
    shortDescription: "Cut acrylic logos for reception walls and interiors.",
    description:
      "Clear, frosted, or coloured acrylic for offices, receptions, and shops. Clean edges and fixings that do not shout.",
    includes: [
      "Laser-cut acrylic",
      "Stand-off and flush mounts",
      "Backlit acrylic options",
      "Interior brand marks",
    ],
    image: "/assets/phm-superrix-logo.jpg",
    featured: false,
    icon: "solar:layers-linear",
  },
  {
    slug: "billboard-outdoor-advertising",
    title: "Billboard & Outdoor Advertising",
    group: "Advertising",
    shortDescription: "Boards you can read from the road.",
    description:
      "Billboards, pylons, and site boards for roads, campuses, and commercial plots. Printed, framed, and installed.",
    includes: [
      "Billboard and pylon graphics",
      "Weather-resistant print",
      "Structure and frame work",
      "Site installation",
    ],
    image: "/assets/grand-pure-soya-oil-totem.jpg",
    featured: true,
    icon: "solar:map-linear",
  },
  {
    slug: "branding-corporate-identity",
    title: "Branding & Corporate Identity",
    group: "Branding",
    shortDescription: "Your brand on the building, not just on a business card.",
    description:
      "We take your colours and logo and put them on the facade, the interior, the wayfinding, and the print, so the whole place looks like one company.",
    includes: [
      "Brand application on site",
      "Wayfinding and name systems",
      "Colour and finish matching",
      "Multi-asset rollout",
    ],
    image: "/assets/meat-frozen-foods-branding.jpg",
    featured: false,
    icon: "solar:medal-star-linear",
  },
  {
    slug: "vehicle-branding",
    title: "Vehicle Branding",
    group: "Branding",
    shortDescription: "Graphics for cars, vans, and fleet vehicles.",
    description:
      "Vinyl wraps and vehicle graphics, cut and applied so they can live on the road, not only look good in a photo.",
    includes: [
      "Partial and full wraps",
      "Fleet consistency",
      "Weather-rated vinyl",
      "Applied on the vehicle",
    ],
    image: "/assets/vochmal-foods-branding.jpg",
    featured: false,
    icon: "solar:bus-linear",
  },
  {
    slug: "large-format-printing",
    title: "Large Format Printing",
    group: "Printing",
    shortDescription: "Wide print for walls, windows, and outdoor boards.",
    description:
      "Window graphics, wall wraps, banners, and outdoor print. Cut to the site, with colour that matches what you signed off.",
    includes: [
      "Window and wall graphics",
      "Outdoor boards",
      "Colour-managed print",
      "Trim and finishing",
    ],
    image: "/assets/vochmal-foods-branding.jpg",
    featured: false,
    icon: "solar:printer-linear",
  },
  {
    slug: "vinyl-graphics",
    title: "Vinyl Graphics",
    group: "Printing",
    shortDescription: "Cut vinyl for glass, walls, and vehicles.",
    description:
      "From a simple name on the door to a full set of window and wall graphics. Cut vinyl, applied on site.",
    includes: [
      "Cut vinyl lettering",
      "Window manifestation",
      "Wall and door graphics",
      "Removal and reapplication",
    ],
    image: "/assets/de-anchor-barbershop-board.jpg",
    featured: false,
    icon: "solar:scissors-linear",
  },
  {
    slug: "flex-banner-printing",
    title: "Flex & Banner Printing",
    group: "Printing",
    shortDescription: "Banners for events, sites, and campaigns.",
    description:
      "Flex and banner print, finished with eyelets, poles, or frames, then hung if you need us on site.",
    includes: [
      "Flex and banner print",
      "Eyelets and finishing",
      "Short-run and volume jobs",
      "On-site hanging",
    ],
    image: "/assets/rightway-ministries-board.jpg",
    featured: false,
    icon: "solar:gallery-wide-linear",
  },
  {
    slug: "metal-fabrication",
    title: "Metal Fabrication",
    group: "Fabrication",
    shortDescription: "Steel and aluminium pylons, frames, and totems.",
    description:
      "Metalwork for pylons, frames, totems, and building signs. Cut, welded, finished, and assembled on site.",
    includes: [
      "Pylon and totem structures",
      "Frames and supports",
      "Cut, weld, and finish",
      "On-site assembly",
    ],
    image: "/assets/fyi-gas-pylon.jpg",
    featured: false,
    icon: "solar:widget-4-linear",
  },
  {
    slug: "laser-cutting-engraving",
    title: "Laser Cutting & Engraving",
    group: "Fabrication",
    shortDescription: "Fine cutting and engraving in acrylic, wood, and metal.",
    description:
      "Laser-cut logos, engraved plaques, and fine lettering when the edge has to be exact.",
    includes: [
      "Laser-cut logos and letters",
      "Engraved plaques",
      "Acrylic, wood, and metal",
      "Fine-detail finishing",
    ],
    image: "/assets/oak-prime-school-pylon.jpg",
    featured: false,
    icon: "solar:tuning-2-linear",
  },
  {
    slug: "interior-exterior-branding",
    title: "Interior & Exterior Branding",
    group: "Branding",
    shortDescription: "The whole site, inside and out, looking like one brand.",
    description:
      "Facade, reception, wayfinding, and outdoor identity treated as one job, so the building reads the same from the gate to the desk.",
    includes: [
      "Facade branding",
      "Reception and interior marks",
      "Wayfinding",
      "Multi-location consistency",
    ],
    image: "/assets/stanel-cafe-jos-sign.jpg",
    featured: false,
    icon: "solar:buildings-linear",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3) {
  const current = getService(slug);
  if (!current) return services.slice(0, limit);
  return services
    .filter((service) => service.slug !== slug)
    .sort((a, b) => Number(b.group === current.group) - Number(a.group === current.group))
    .slice(0, limit);
}

export const featuredServices = services.filter((service) => service.featured);
