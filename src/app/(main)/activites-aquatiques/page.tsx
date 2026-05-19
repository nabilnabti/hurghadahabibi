import type { Metadata } from "next";
import { getActivitiesByCategory } from "@/data/activities";
import ActivityCard from "@/components/ActivityCard";

export const metadata: Metadata = {
  title: "Activites Aquatiques | Hurghada Habibi",
  description:
    "Plongee, snorkeling, iles paradisiaques, dauphins et sports nautiques en Mer Rouge. Les meilleures activites aquatiques a Hurghada et Marsa Alam.",
};

export default function ActivitesAquatiquesPage() {
  const activities = getActivitiesByCategory("aquatique");

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue to-blue-dark text-white">
        <div className="absolute inset-0 bg-[url('/images/destinations/marsa-alam.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {activities.length} activites disponibles
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Activites Aquatiques
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Plongez dans les eaux cristallines de la Mer Rouge ! Iles
              paradisiaques, snorkeling sur les recifs coralliens, nage avec les
              dauphins et sports nautiques.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
    </main>
  );
}
