import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { ContrastBand } from "@/components/home/ContrastBand";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TrustedBy } from "@/components/home/TrustedBy";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ContrastBand />
      <ServicesPreview />
      <WhyChooseUs />
      <TrustedBy />
      <FeaturedProjects />
      <HowWeWork />
      <Statistics />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
