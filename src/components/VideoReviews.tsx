"use client";

import { useRef, useState } from "react";

const videos = [
  { src: "/videos/review-1.mp4", label: "Avis client" },
  { src: "/videos/review-2.mp4", label: "Avis client" },
  { src: "/videos/review-3.mp4", label: "Avis client" },
  { src: "/videos/review-4.mp4", label: "Avis client" },
  { src: "/videos/review-5.mp4", label: "Avis client" },
  { src: "/videos/review-6.mp4", label: "Avis client" },
];

export default function VideoReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const scrollBy = (direction: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  const handlePlay = (index: number) => {
    // Pause other videos
    const container = scrollRef.current;
    if (container) {
      container.querySelectorAll("video").forEach((v, i) => {
        if (i !== index) {
          v.pause();
          v.currentTime = 0;
        }
      });
    }
    setPlayingIndex(index);
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#FEFBF6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#E8461C] mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Témoignages vidéo
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Ils racontent leur{" "}
            <span className="text-[#E8461C]">expérience</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Découvrez les avis de nos clients directement depuis Snapchat
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Précédent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
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
            className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
          >
            {videos.map((video, i) => (
              <div
                key={i}
                className="relative flex-none w-[200px] sm:w-[220px] md:w-[240px] snap-center"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-lg group">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    playsInline
                    loop
                    muted={playingIndex !== i}
                    preload="metadata"
                    onClick={(e) => {
                      const v = e.currentTarget;
                      if (v.paused) {
                        v.muted = false;
                        v.play();
                        handlePlay(i);
                      } else {
                        v.pause();
                        setPlayingIndex(null);
                      }
                    }}
                  />

                  {/* Play overlay */}
                  {playingIndex !== i && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-opacity"
                      onClick={() => {
                        const container = scrollRef.current;
                        if (!container) return;
                        const videoEl = container.querySelectorAll("video")[i];
                        if (videoEl) {
                          videoEl.muted = false;
                          videoEl.play();
                          handlePlay(i);
                        }
                      }}
                    >
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg backdrop-blur-sm hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#E8461C">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Snapchat badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <svg className="w-3.5 h-3.5" fill="#FFFC00" viewBox="0 0 512 512">
                      <path d="M256 0c-55.8 0-103.8 8.3-131.2 52.8C99.6 93.4 109.4 150 112 176.4c-1 .2-2.4-.2-4-.8-12.8-5.2-27.6-11.2-42.4-7.2-12 3.2-20 12.8-20 25.2 0 14 11.2 22.8 21.6 28.4 17.6 9.6 36 14.4 42 27.2 2 4.4 1.6 9.6-.8 16-28 59.2-70 98.8-120.4 104.8C-22 372 3.2 396 16 404c24 15.2 54 22.8 80.4 28.8 4 6.8 8.4 24 14.8 34 7.6 12.4 19.2 20.4 35.2 20.4 12 0 24.4-4.4 40-10 18-6.4 40-14 69.6-14s51.6 7.6 69.6 14c15.6 5.6 28 10 40 10 16 0 27.6-8 35.2-20.4 6.4-10 10.8-27.2 14.8-34 26.4-6 56.4-13.6 80.4-28.8 12.8-8 38-32 27.6-34-50.4-6-92.4-45.6-120.4-104.8-2.4-6.4-2.8-11.6-.8-16 6-12.8 24.4-17.6 42-27.2 10.4-5.6 21.6-14.4 21.6-28.4 0-12.4-8-22-20-25.2-14.8-4-29.6 2-42.4 7.2-1.6.6-3 1-4 .8 2.6-26.4 12.4-83-12.8-123.6C359.8 8.3 311.8 0 256 0z" />
                    </svg>
                    <span className="text-white text-[10px] font-semibold">Snapchat</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
