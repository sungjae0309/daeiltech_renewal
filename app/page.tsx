import HeroSection from "@/components/home/HeroSection";
import SolutionFinderSection from "@/components/home/SolutionFinderSection";
import TrustSection from "@/components/home/TrustSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import BrandsSection from "@/components/home/BrandsSection";
import SupportSection from "@/components/home/SupportSection";
import NewsSection from "@/components/home/NewsSection";
import ContactCTASection from "@/components/home/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionFinderSection />
      <TrustSection />
      <FeaturedProductsSection />
      <BrandsSection />
      <SupportSection />
      <NewsSection />
      <ContactCTASection />
    </>
  );
}
