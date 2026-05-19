"use client";

import { useState } from "react";
import { activities } from "@/data/activities";
import type { Activity } from "@/data/activities";
import ActivityCard from "@/components/ActivityCard";

const categories = [
  { key: "all", label: "Toutes" },
  { key: "excursions", label: "Excursions" },
  { key: "aquatique", label: "Aquatique" },
  { key: "exploration", label: "Exploration" },
] as const;

export default function ToutesNosActivitesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? activities
      : activities.filter((a) => a.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Toutes nos activites
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl">
            Decouvrez l&apos;ensemble de nos excursions, activites aquatiques et
            aventures en Egypte. {activities.length} experiences vous attendent.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((cat) => {
            const count =
              cat.key === "all"
                ? activities.length
                : activities.filter((a) => a.category === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-orange text-white shadow-lg shadow-orange/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
                <span
                  className={`ml-1.5 text-xs ${
                    activeCategory === cat.key
                      ? "text-white/80"
                      : "text-gray-400"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          {filtered.length} activite{filtered.length > 1 ? "s" : ""} trouvee
          {filtered.length > 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((activity: Activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
    </main>
  );
}
