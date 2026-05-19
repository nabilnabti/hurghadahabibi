"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { activities, getFeaturedActivities } from "@/data/activities";
import { getWhatsAppUrl } from "@/data/contact";

export default function V2Activities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredIds = new Set(getFeaturedActivities().map((a) => a.id));
  const sorted = [
    ...activities.filter((a) => featuredIds.has(a.id)),
    ...activities.filter((a) => !featuredIds.has(a.id)),
  ];

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -300 : 300;
    el.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(updateArrows, 350);
  };

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <span className="flex items-center gap-0.5">
        {Array.from({ length: full }).map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-[#FFD700]" viewBox="0 0 20 20">
            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
          </svg>
        ))}
        {hasHalf && (
          <svg className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#555" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfStar)"
              d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z"
            />
          </svg>
        )}
        <span className="ml-1 text-xs text-gray-400">{rating}</span>
      </span>
    );
  };

  return (
    <section className="relative bg-[#0A0A0A] py-16 sm:py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl text-[#FFD700] tracking-wide">
            ACTIVIT&Eacute;S POPULAIRES
          </h2>
          <div className="mt-3 w-20 h-1 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Carousel wrapper */}
        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Défiler à gauche"
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 sm:w-12 sm:h-12 rounded-full
              bg-black/70 border border-[#FFD700]/30
              flex items-center justify-center
              transition-all duration-300
              hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700]
              text-[#FFD700]
              ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}
              -translate-x-1/2 sm:translate-x-0
            `}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Défiler à droite"
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 sm:w-12 sm:h-12 rounded-full
              bg-black/70 border border-[#FFD700]/30
              flex items-center justify-center
              transition-all duration-300
              hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700]
              text-[#FFD700]
              ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}
              translate-x-1/2 sm:translate-x-0
            `}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            onScroll={updateArrows}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sorted.map((activity) => (
              <div
                key={activity.id}
                className="w-[260px] sm:w-[280px] flex-none snap-center bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFD700]/30 transition-all duration-300 group/card"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    sizes="280px"
                  />
                  {/* Price badge */}
                  <div className="absolute top-3 right-3 bg-[#FFD700] text-black font-bold text-sm px-3 py-1.5 rounded-full shadow-lg shadow-[#FFD700]/20">
                    {activity.price}&euro;
                  </div>
                  {/* Featured badge */}
                  {activity.featured && (
                    <div className="absolute top-3 left-3 bg-black/70 text-[#FFD700] text-xs font-bold px-2.5 py-1 rounded-full border border-[#FFD700]/50">
                      ★ TOP
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-white font-semibold text-base leading-snug line-clamp-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {activity.location}
                  </p>
                  <div className="flex items-center justify-between">
                    {renderStars(activity.rating)}
                    <span className="text-gray-500 text-xs">({activity.reviewCount})</span>
                  </div>
                  <a
                    href={getWhatsAppUrl(`Bonjour, je souhaite réserver : ${activity.title} (${activity.price}€)`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-center bg-[#FFD700] text-black rounded-full py-2.5 font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/25 hover:scale-[1.02] active:scale-95"
                  >
                    R&eacute;server
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
