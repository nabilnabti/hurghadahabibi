import Link from "next/link";
import { destinations } from "@/data/activities";

export default function DestinationsSection() {
  const mainDestinations = destinations.filter((d) =>
    ["hurghada", "le-caire", "luxor", "marsa-alam"].includes(d.slug)
  );

  return (
    <section className="relative py-20 md:py-28 bg-warm overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #E8461C, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #4AABE0, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#E8461C] mb-4">
            Ou partir ?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
            Explorez nos{" "}
            <span className="gradient-text-blue">destinations</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Des pyramides du Caire aux recifs coralliens de la Mer Rouge,
            decouvrez les joyaux de l&apos;Egypte
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {mainDestinations.map((dest, index) => (
            <Link
              key={dest.id}
              href={`/destination/${dest.slug}`}
              className="group relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[350px] lg:min-h-[450px] block border border-white/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-warm-lg"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

              {/* Subtle warm tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E8461C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <h3 className="text-2xl sm:text-2xl font-bold text-white mb-2.5 font-display tracking-wide text-shadow">
                  {dest.name}
                </h3>
                <span
                  className="inline-flex items-center gap-2 text-sm text-white/95 px-4 py-1.5 rounded-full transition-all duration-300 group-hover:bg-white/25"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {dest.activityCount} activites
                </span>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom wave to transition to next section */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C300,100 900,0 1200,40 L1200,120 L0,120 Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
