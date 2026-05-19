"use client";

import Image from "next/image";
import { v2Categories } from "@/data/v2-categories";
import { getWhatsAppUrl } from "@/data/contact";

export default function V2Categories() {
  return (
    <section id="experiences" className="bg-[#111] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-[family-name:var(--font-bebas)] text-center text-5xl sm:text-6xl lg:text-7xl text-[#FFD700] mb-12 tracking-wide">
          NOS EXPÉRIENCES
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {v2Categories.map((category) => (
            <a
              key={category.id}
              href={getWhatsAppUrl(`Bonjour, je suis interesse par vos experiences ${category.label} a Hurghada. Pouvez-vous me donner plus d'infos ?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] min-h-[200px] sm:min-h-[280px] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#FFD700] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(255,215,0,0.25)]"
            >
              {/* Background image */}
              <Image
                src={category.image}
                alt={category.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Icon badge top-left */}
              <div className="absolute top-3 left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-xl shadow-lg shadow-[#D4AF37]/30">
                {category.icon}
              </div>

              {/* Text content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl text-white tracking-wide leading-tight">
                  {category.label}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-white/70 line-clamp-2 leading-snug">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
