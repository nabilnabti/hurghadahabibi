import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import FeaturedActivities from "@/components/FeaturedActivities";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoReviews from "@/components/VideoReviews";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <DestinationsSection />
      <FeaturedActivities />
      <StatsSection />
      <TestimonialsSection />
      <VideoReviews />
      <CTASection />
    </main>
  );
}
