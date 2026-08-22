import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of signage, branding, fabrication, and installation work by AMAS Inter Designers Ltd.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The work, as photographed"
        description="Finished signs, branding, metalwork, and installs. Click a photo to open it larger."
      />
      <section className="bg-background py-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
