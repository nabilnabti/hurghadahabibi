"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { destinations } from "@/data/activities";

export default function HeroSection() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    router.push(`/recherche?${params.toString()}`);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80&fit=crop"
        alt="Plage paradisiaque à Hurghada"
        fill
        className="object-cover scale-105"
        priority
      />

      {/* Warm gradient overlay — plus sombre pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 text-center">
        {/* Main heading */}
        <h1 className="font-display animate-fade-in-up mb-6 md:mb-8">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
            Vivez l&apos;aventure
          </span>
          <span className="relative inline-block mt-2">
            <span className="relative z-10 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
              à Hurghada
            </span>
            {/* Animated stabilo highlight — street art style, en boucle */}
            <span
              className="absolute bottom-0 sm:bottom-1 left-[-6px] right-[-6px] h-[48%] opacity-80 animate-[stabilo_3s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(92deg, #E8461C 0%, #FF6B42 40%, #E8461C 70%, #FF6B42 100%)',
                transform: 'skewX(-2deg)',
                borderRadius: '4px 2px 6px 2px',
                filter: 'url(#rough)',
              }}
            />
            {/* SVG filter for rough/hand-drawn edges */}
            <svg className="absolute w-0 h-0">
              <filter id="rough">
                <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
              </filter>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto mb-8 md:mb-12 animate-fade-in-up tracking-wide font-light drop-shadow-md"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Découvrez les meilleures excursions et expériences
          <br className="hidden sm:block" />
          avec des guides 100% francophones
        </p>

        {/* Search form - Glassmorphism card */}
        <form
          onSubmit={handleSearch}
          className="animate-fade-in-up max-w-4xl mx-auto rounded-3xl p-4 sm:p-5 shadow-2xl"
          style={{
            animationDelay: "0.4s",
            animationFillMode: "both",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
            {/* Destination select */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E8461C] pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full h-14 pl-12 pr-10 bg-gray-50/80 text-gray-900 text-sm sm:text-base rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E8461C]/30 border border-gray-200/60 transition-all duration-300 hover:border-[#E8461C]/30"
              >
                <option value="">Ou souhaitez-vous aller ?</option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Date input — compatible iOS */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4AABE0] pointer-events-none z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              {!date && (
                <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base pointer-events-none z-10">
                  Date du séjour
                </span>
              )}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-gray-50/80 text-gray-900 text-sm sm:text-base rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4AABE0]/30 border border-gray-200/60 transition-all duration-300 hover:border-[#4AABE0]/30 [&::-webkit-date-and-time-value]:text-left"
                style={{ colorScheme: 'light', minHeight: '56px' }}
              />
            </div>

            {/* Search button */}
            <button
              type="submit"
              className="h-14 px-8 sm:px-12 text-white font-semibold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 btn-glow shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Rechercher
            </button>
          </div>
        </form>

        {/* Trust badges */}
        <div
          className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-5 animate-fade-in-up"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <span className="flex items-center gap-2 text-white/95 text-xs sm:text-sm px-4 py-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            4.8/5 sur Google
          </span>
          <span className="flex items-center gap-2 text-white/95 text-xs sm:text-sm px-4 py-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            +100 000 clients
          </span>
          <span className="flex items-center gap-2 text-white/95 text-xs sm:text-sm px-4 py-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Guides francophones
          </span>
          <span className="flex items-center gap-2 text-white/95 text-xs sm:text-sm px-4 py-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Paiement securise
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-10 animate-bounce-gentle">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Explorer</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="#FEFBF6"
          />
        </svg>
      </div>
    </section>
  );
}
