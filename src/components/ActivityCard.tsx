import Image from "next/image";
import Link from "next/link";
import type { Activity } from "@/data/activities";

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? "text-[#E8461C]"
                : star - 0.5 <= rating
                ? "text-[#E8461C]"
                : "text-gray-200"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-500 font-medium">
        {rating} ({reviewCount} avis)
      </span>
    </div>
  );
}

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Link
      href={`/activite/${activity.slug}`}
      className="group bg-white rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-[0_20px_40px_-12px_rgba(232,70,28,0.15)] hover:-translate-y-1 transition-all duration-500 ease-out"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient overlay on bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        {/* Location badge - glassmorphism */}
        <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#E8461C]">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {activity.location.split(",")[0]}
        </span>

        {/* Featured badge - gradient pill */}
        {activity.featured && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-[#E8461C] to-[#FF6B42] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Populaire
          </span>
        )}

        {/* Duration badge - dark glass */}
        <span className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {activity.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-[#1A1A1A] text-lg mb-1.5 group-hover:text-[#E8461C] transition-colors duration-300 line-clamp-2 leading-snug">
          {activity.title}
        </h3>

        <p className="text-gray-400 text-sm flex items-center gap-1.5 mb-3">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {activity.location}
        </p>

        <StarRating rating={activity.rating} reviewCount={activity.reviewCount} />

        {/* Footer */}
        <div className="flex items-end justify-between mt-auto pt-4 mt-4 border-t border-gray-100/80">
          <div>
            <span className="text-xs text-gray-400 tracking-wide uppercase">A partir de</span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-bold text-[#E8461C]">{activity.price}&euro;</span>
              <span className="text-xs text-gray-400">/pers.</span>
            </div>
          </div>
          <span className="text-sm font-semibold text-[#E8461C] border border-[#E8461C]/30 px-4 py-2 rounded-full group-hover:bg-[#E8461C] group-hover:text-white group-hover:border-[#E8461C] transition-all duration-300">
            Voir d&eacute;tails
          </span>
        </div>
      </div>
    </Link>
  );
}
