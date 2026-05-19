"use client";

import { useRef } from "react";
import Link from "next/link";
import { getFeaturedActivities } from "@/data/activities";
import ActivityCard from "./ActivityCard";

export default function FeaturedActivities() {
  const featured = getFeaturedActivities();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-gray-50 overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #E8461C, transparent)' }} />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #4AABE0, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#E8461C] mb-4">
            A ne pas manquer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
            Nos activites{" "}
            <span className="gradient-text-orange">populaires</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Les experiences les plus appreciees par nos voyageurs
          </p>
        </div>

        {/* Navigation arrows - visible on larger screens */}
        <div className="hidden lg:flex items-center justify-end gap-3 mb-6 -mt-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#E8461C] hover:text-white text-gray-600 cursor-pointer group"
            style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
            aria-label="Precedent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#E8461C] hover:text-white text-gray-600 cursor-pointer group"
            style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
            aria-label="Suivant"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Mobile: horizontal scroll carousel / Desktop: grid */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {featured.map((activity) => (
            <div
              key={activity.id}
              className="min-w-[300px] sm:min-w-[320px] lg:min-w-0 snap-start"
            >
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>

        {/* Mobile scroll hint dots */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-6">
          <span className="w-8 h-1.5 rounded-full bg-[#E8461C]" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/recherche"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-95 text-sm sm:text-base btn-glow"
          >
            Voir toutes les activites
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
