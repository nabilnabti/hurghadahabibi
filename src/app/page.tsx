import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import FeaturedActivities from "@/components/FeaturedActivities";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <DestinationsSection />
      <FeaturedActivities />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
