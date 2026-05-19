"use client";

const stats = [
  { value: "500+", label: "Clients Satisfaits" },
  { value: "53", label: "Activités" },
  { value: "100%", label: "Good Vibes" },
  { value: "24/7", label: "Disponible" },
];

export default function V2Stats() {
  return (
    <section className="bg-gradient-to-b from-[#1A1A1A] to-[#111] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {/* Animated gold number */}
              <span className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl text-[#FFD700] tracking-wider animate-pulse-gold">
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-sm sm:text-base text-white/70 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframes for the gold glow pulse */}
      <style jsx>{`
        @keyframes pulse-gold {
          0%,
          100% {
            text-shadow: 0 0 8px rgba(255, 215, 0, 0.4),
              0 0 20px rgba(255, 215, 0, 0.1);
          }
          50% {
            text-shadow: 0 0 16px rgba(255, 215, 0, 0.7),
              0 0 40px rgba(255, 215, 0, 0.3);
          }
        }
        .animate-pulse-gold {
          animation: pulse-gold 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
