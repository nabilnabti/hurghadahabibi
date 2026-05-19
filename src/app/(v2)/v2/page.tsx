import type { Metadata } from "next";
import V2Header from "@/components/v2/V2Header";
import V2Hero from "@/components/v2/V2Hero";
import V2Categories from "@/components/v2/V2Categories";
import V2Services from "@/components/v2/V2Services";
import V2Activities from "@/components/v2/V2Activities";
import V2VideoReviews from "@/components/v2/V2VideoReviews";
import V2Stats from "@/components/v2/V2Stats";
import V2CTA from "@/components/v2/V2CTA";
import V2Footer from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "Hurghada Habibi | Tes meilleurs souvenirs commencent ici !",
  description:
    "Beach clubs, yacht parties, sorties en mer, soirées de folie. Découvre les meilleures expériences à Hurghada avec Hurghada Habibi. 100% Good Vibes.",
};

export default function V2Page() {
  return (
    <>
      <V2Header />
      <V2Hero />
      <V2Activities />
      <V2Categories />
      <V2Services />
      <V2VideoReviews />
      <V2Stats />
      <V2CTA />
      <V2Footer />
    </>
  );
}
