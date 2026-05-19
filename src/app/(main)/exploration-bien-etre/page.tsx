import type { Metadata } from "next";
import { getActivitiesByCategory } from "@/data/activities";
import ActivityCard from "@/components/ActivityCard";

export const metadata: Metadata = {
  title: "Exploration & Bien-etre | Hurghada Habibi",
  description:
    "Safari desert en quad, buggy, chameau, spa, spectacles et aventures. Explorez le desert egyptien et detendez-vous a Hurghada.",
};

export default function ExplorationBienEtrePage() {
  const activities = getActivitiesByCategory("exploration");

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/activities/super-safari-desert.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {activities.length} activites disponibles
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Exploration &amp; Bien-etre
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Safaris dans le desert, balades a cheval, quad, buggy, spa et
              spectacles. Vivez des aventures inoubliables et des moments de
              detente absolue.
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
