"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Couleurs variées pour les avatars
const avatarColors = [
  "E8461C", "4AABE0", "2D8BC4", "34A853", "EA4335",
  "FBBC05", "9333EA", "E11D48", "0EA5E9", "F97316",
];

const testimonials = [
  {
    name: "Sophie Martin",
    rating: 5,
    text: "Excursion au Caire absolument incroyable ! Notre guide Ahmed parlait un français parfait et connaissait chaque recoin des pyramides. Organisation au top, je recommande à 200% !",
    date: "Mars 2026",
  },
  {
    name: "Julien Dupont",
    rating: 5,
    text: "Nager avec les dauphins restera le plus beau souvenir de notre voyage. L'équipe est très pro et respectueuse des animaux. Moment magique en famille !",
    date: "Février 2026",
  },
  {
    name: "Marie Lefèvre",
    rating: 5,
    text: "On a fait le Super Safari dans le désert, c'était fantastique. Le dîner BBQ sous les étoiles, la balade en chameau... Un moment hors du temps. Merci Hurghada Habibi !",
    date: "Avril 2026",
  },
  {
    name: "Thomas Bernard",
    rating: 5,
    text: "Le pack Zéro Tracas nous a changé la vie ! Visa, SIM et navette prêts à l'arrivée. Après 8h de vol avec les enfants, c'était un vrai soulagement. Service au top.",
    date: "Janvier 2026",
  },
  {
    name: "Camille Moreau",
    rating: 5,
    text: "Mahmya Island est un véritable paradis. Eaux turquoise, buffet délicieux et snorkeling magnifique. On y retourne l'année prochaine, c'est sûr !",
    date: "Mars 2026",
  },
  {
    name: "Nicolas Petit",
    rating: 5,
    text: "Luxor en montgolfière au lever du soleil... Je n'ai pas les mots. La vue sur la Vallée des Rois est à couper le souffle. Une expérience à vivre au moins une fois.",
    date: "Février 2026",
  },
  {
    name: "Émilie Roux",
    rating: 5,
    text: "Notre deuxième voyage avec Hurghada Habibi et toujours aussi satisfaits. Les prix sont imbattables et le service client via WhatsApp est hyper réactif. Bravo !",
    date: "Avril 2026",
  },
  {
    name: "Pierre Lambert",
    rating: 5,
    text: "La plongée sous-marine à Hurghada est incroyable. Les coraux, les poissons tropicaux... Mon instructeur était patient et professionnel. Parfait pour un baptême !",
    date: "Mars 2026",
  },
  {
    name: "Aurélie Dubois",
    rating: 5,
    text: "Sataya à Marsa Alam : 200 dauphins qui nagent autour de vous. Mon fils de 10 ans en parle encore tous les jours. Merci pour cette journée magique !",
    date: "Janvier 2026",
  },
  {
    name: "Mathieu Garcia",
    rating: 5,
    text: "Rapport qualité-prix excellent pour l'excursion au Caire en van. Petit groupe, guide passionné, déjeuner copieux. Bien mieux que les tours classiques. Je recommande !",
    date: "Février 2026",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#E8461C"
          stroke="#E8461C"
          strokeWidth="1"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const scrollSpeed = 0.8;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scrollBy = (direction: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction * 370, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#FEFBF6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-5 font-[family-name:var(--font-display)] font-serif">
            Ce que disent nos{" "}
            <span className="text-[#E8461C]">clients</span>
          </h2>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-3xl font-bold text-[#1A1A1A]">4.8</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#E8461C"
                    stroke="#E8461C"
                    strokeWidth="1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs text-gray-500 font-medium">sur</span>
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-xs font-semibold text-gray-700">Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel with arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Précédent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Suivant"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-5 md:gap-6 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicate testimonials for infinite scroll */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="relative flex-none w-[320px] sm:w-[360px] bg-white rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Decorative quotation mark */}
                <span className="absolute top-4 right-5 text-6xl leading-none text-[#E8461C]/[0.07] font-serif pointer-events-none select-none">
                  &ldquo;
                </span>

                <Stars count={t.rating} />

                <p className="text-gray-600 text-sm sm:text-[15px] mt-4 mb-5 line-clamp-4 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=${avatarColors[i % avatarColors.length]}&color=fff&size=80&bold=true&format=svg`}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full shadow-sm"
                    />
                    <div>
                      <div className="font-semibold text-[#1A1A1A] text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-400">{t.date}</div>
                    </div>
                  </div>
                  {/* Google icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-60">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
