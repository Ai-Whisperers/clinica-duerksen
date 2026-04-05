import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { AboutPreview } from "@/components/home/about-preview";
import { Reviews } from "@/components/home/reviews";
import { CTABanner } from "@/components/layout/cta-banner";
import { LocationPreview } from "@/components/home/location";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <Reviews />
      <CTABanner />
      <LocationPreview />
    </>
  );
}