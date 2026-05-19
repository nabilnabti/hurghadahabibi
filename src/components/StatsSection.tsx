const stats = [
  {
    value: "N°1",
    label: "Agence à Hurghada",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    value: "100K+",
    label: "Clients satisfaits",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "53",
    label: "Activités",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Guides francophones",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top wave */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ height: "60px" }}>
        <path d="M0 60L0 30C240 0 480 0 720 20C960 40 1200 50 1440 30L1440 60Z" fill="white" />
      </svg>

      {/* Background gradient */}
      <div
        className="py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #4AABE0 0%, #2D8BC4 40%, #1a6fa0 70%, #155d8a 100%)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center text-white group"
              >
                {/* Icon circle with pulse */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:bg-white/25 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-0 group-hover:opacity-30" style={{ animationDuration: "2s" }} />
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1.5 tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ height: "60px" }}>
        <path d="M0 0L0 30C240 60 480 60 720 40C960 20 1200 10 1440 30L1440 0Z" fill="white" />
      </svg>
    </section>
  );
}
