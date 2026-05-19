import type { Metadata } from "next";
import { getActivitiesByCategory } from "@/data/activities";
import ActivityCard from "@/components/ActivityCard";

export const metadata: Metadata = {
  title: "Excursions en Egypte | Hurghada Habibi",
  description:
    "Explorez les merveilles de l'Egypte : pyramides du Caire, temples de Luxor, El Gouna. Excursions guidees en francais depuis Hurghada.",
};

export default function ExcursionsPage() {
  const activities = getActivitiesByCategory("excursions");

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-orange to-orange-dark text-white">
        <div className="absolute inset-0 bg-[url('/images/destinations/le-caire.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {activities.length} excursions disponibles
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Excursions en Egypte
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Des pyramides du Caire aux temples de Luxor, explorez les tresors
              de l&apos;Egypte ancienne avec nos guides francophones. Formules Eco,
              VAN, Avion ou Overnight.
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
