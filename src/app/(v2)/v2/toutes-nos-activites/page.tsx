"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { activities } from "@/data/activities";
import type { Activity } from "@/data/activities";
import V2Header from "@/components/v2/V2Header";
import V2Footer from "@/components/v2/V2Footer";

const categories = [
  { key: "all", label: "Toutes" },
  { key: "excursions", label: "Excursions" },
  { key: "aquatique", label: "Aquatique" },
  { key: "exploration", label: "Exploration" },
] as const;

export default function V2ToutesNosActivitesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? activities
      : activities.filter((a) => a.category === activeCategory);

  return (
    <>
      <V2Header />
      <main className="min-h-screen bg-[#0A0A0A] pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111] py-14 md:py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#FFD700] blur-[120px]" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37] blur-[100px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl text-[#FFD700] tracking-wide mb-3">
              TOUTES NOS ACTIVITES
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl">
              Decouvrez l&apos;ensemble de nos excursions, activites aquatiques et
              aventures en Egypte. {activities.length} experiences vous attendent.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Category Pills */}
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
                      ? "bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/25"
                      : "bg-[#1A1A1A] text-white/60 border border-white/10 hover:border-[#FFD700]/30 hover:text-white"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`ml-1.5 text-xs ${
                      activeCategory === cat.key
                        ? "text-black/60"
                        : "text-white/30"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <p className="text-sm text-white/40 mb-6">
            {filtered.length} activite{filtered.length > 1 ? "s" : ""} trouvee
            {filtered.length > 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((activity: Activity) => (
              <Link
                key={activity.id}
                href={`/v2/activite/${activity.slug}`}
                className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#FFD700] text-black text-sm font-bold px-3 py-1 rounded-full">
                    {activity.price}&euro;
                  </div>
                  {activity.featured && (
                    <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-[#FFD700] text-xs font-bold px-2.5 py-1 rounded-full border border-[#FFD700]/30">
                      Populaire
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold group-hover:text-[#FFD700] transition-colors text-lg">
                    {activity.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-white/50 text-sm">{activity.location}</p>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white/60 text-xs">{activity.rating}</span>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-2 line-clamp-2">{activity.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <V2Footer />
    </>
  );
}
