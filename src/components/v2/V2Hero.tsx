"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { destinations } from "@/data/activities";

const categories = [
  { emoji: "\u{1F3D6}\uFE0F", label: "Plages" },
  { emoji: "\u{1F6F3}\uFE0F", label: "Yacht Party" },
  { emoji: "\u{1F389}", label: "Night Life" },
  { emoji: "\u{1F3D6}\uFE0F", label: "Beach Club" },
  { emoji: "\u{1F42C}", label: "Sorties en Mer" },
  { emoji: "\u{1F3DC}\uFE0F", label: "Aventures" },
];

const trustBadges = [
  "100% Good Vibes \u2728",
  "Soleil \u2022 Plage \u2022 F\u00EAte",
  "S\u00E9curit\u00E9 & VIP \uD83D\uDC8E",
];

export default function V2Hero() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    router.push(`/recherche?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/destinations/hurghada.jpg"
        alt="Hurghada nightlife"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay with radial gradient */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.3)_0%,rgba(10,10,10,0.85)_70%,rgba(10,10,10,0.95)_100%)]" />

      {/* Animated gold particles — CSS only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Particle layer using pseudo-element keyframes */}
        <div className="absolute w-2 h-2 rounded-full bg-[#FFD700]/60 animate-[float_6s_ease-in-out_infinite] top-[15%] left-[10%] blur-[1px]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 animate-[float_8s_ease-in-out_infinite_1s] top-[25%] right-[15%] blur-[0.5px]" />
        <div className="absolute w-1 h-1 rounded-full bg-[#FFD700]/40 animate-[float_7s_ease-in-out_infinite_2s] top-[60%] left-[20%]" />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#D4AF37]/30 animate-[float_9s_ease-in-out_infinite_0.5s] top-[40%] right-[25%] blur-[1px]" />
        <div className="absolute w-1 h-1 rounded-full bg-[#FFD700]/50 animate-[float_5s_ease-in-out_infinite_3s] top-[70%] left-[60%]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#FFD700]/35 animate-[float_10s_ease-in-out_infinite_1.5s] top-[80%] right-[40%] blur-[0.5px]" />
        <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/45 animate-[float_7s_ease-in-out_infinite_4s] top-[10%] left-[50%]" />
        <div className="absolute w-1 h-1 rounded-full bg-[#FFD700]/55 animate-[float_6s_ease-in-out_infinite_2.5s] top-[50%] left-[80%]" />

        {/* Sparkle crosses */}
        <div className="absolute top-[20%] left-[30%] animate-[sparkle_3s_ease-in-out_infinite]">
          <div className="w-px h-4 bg-[#FFD700]/60 absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="w-4 h-px bg-[#FFD700]/60 absolute top-1/2 left-0 -translate-y-1/2" />
        </div>
        <div className="absolute top-[55%] right-[20%] animate-[sparkle_4s_ease-in-out_infinite_1s]">
          <div className="w-px h-3 bg-[#D4AF37]/50 absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="w-3 h-px bg-[#D4AF37]/50 absolute top-1/2 left-0 -translate-y-1/2" />
        </div>
        <div className="absolute top-[35%] left-[70%] animate-[sparkle_3.5s_ease-in-out_infinite_2s]">
          <div className="w-px h-3 bg-[#FFD700]/40 absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="w-3 h-px bg-[#FFD700]/40 absolute top-1/2 left-0 -translate-y-1/2" />
        </div>
      </div>

      {/* Keyframes style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.3); opacity: 1; }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(0.5) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.2) rotate(45deg); opacity: 1; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-24 pb-16">
        {/* Main title */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-[family-name:var(--font-bebas)] leading-[0.85] tracking-tight">
            <span className="block text-7xl sm:text-8xl md:text-9xl text-[#FFD700] drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]">
              HURGHADA
            </span>
            <span className="block text-7xl sm:text-8xl md:text-9xl text-[#FFD700] drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]">
              HABIBI
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div
          className={`mt-6 sm:mt-8 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
            Tes meilleurs souvenirs commencent ici !
          </p>
          <div className="mt-3 mx-auto w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
        </div>

        {/* Search form */}
        <form
          onSubmit={handleSearch}
          className={`mt-8 sm:mt-10 w-full max-w-2xl transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-3 bg-white/5 border border-[#FFD700]/20 backdrop-blur-md rounded-2xl sm:rounded-full p-3">
            <div className="flex-1 relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full h-12 pl-4 pr-8 bg-white/10 text-white text-sm rounded-xl sm:rounded-full appearance-none border border-white/10 focus:outline-none focus:border-[#FFD700]/50"
              >
                <option value="" className="bg-[#1A1A1A]">Toutes les destinations</option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.slug} className="bg-[#1A1A1A]">{d.name}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 relative min-h-[48px]">
              {!date && (
                <span className="absolute inset-0 flex items-center pl-4 text-white/50 text-sm pointer-events-none z-10">
                  Date du séjour
                </span>
              )}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute inset-0 w-full h-full pl-4 pr-4 bg-white/10 text-sm rounded-xl sm:rounded-full border border-white/10 focus:outline-none focus:border-[#FFD700]/50"
                style={{ color: date ? "white" : "transparent", fontSize: "16px", colorScheme: "dark" }}
              />
            </div>
            <button
              type="submit"
              className="h-12 px-8 bg-[#FFD700] text-black font-bold text-sm rounded-xl sm:rounded-full hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              RECHERCHER
            </button>
          </div>
        </form>

        {/* Category pills */}
        <div
          className={`mt-10 sm:mt-12 w-full transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide justify-start sm:justify-center px-2 -mx-2 snap-x snap-mandatory">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className="flex-shrink-0 snap-start flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#FFD700]/50 bg-white/5 text-white text-sm sm:text-base font-medium backdrop-blur-sm hover:bg-[#FFD700]/15 hover:border-[#FFD700] hover:shadow-[0_0_16px_rgba(255,215,0,0.2)] active:scale-95 transition-all duration-300"
              >
                <span className="text-lg">{cat.emoji}</span>
                <span className="whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div
          className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs sm:text-sm tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-10 sm:mt-12 transition-all duration-1000 delay-[900ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#experiences"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#FFD700] text-black text-base sm:text-lg font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            D\u00C9COUVRIR NOS EXP\u00C9RIENCES
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-12 sm:mt-16 transition-all duration-1000 delay-[1100ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5 text-[#FFD700]/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
