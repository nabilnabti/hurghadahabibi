"use client";

import { useRef, useState, useCallback } from "react";

const VIDEO_NUMBERS = [
  1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46,
];

export default function V2VideoReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -220 : 220;
    el.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(updateArrows, 350);
  };

  const handleVideoClick = (num: number) => {
    const clickedVideo = videoRefs.current.get(num);
    if (!clickedVideo) return;

    if (playingId === num) {
      clickedVideo.pause();
      setPlayingId(null);
    } else {
      // Pause currently playing
      if (playingId !== null) {
        const prev = videoRefs.current.get(playingId);
        if (prev) prev.pause();
      }
      clickedVideo.play();
      setPlayingId(num);
    }
  };

  const setVideoRef = (num: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(num, el);
    } else {
      videoRefs.current.delete(num);
    }
  };

  return (
    <section className="relative bg-[#0A0A0A] py-16 sm:py-24 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl text-[#FFD700] tracking-wide">
            ILS ONT V&Eacute;CU L&rsquo;EXP&Eacute;RIENCE
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg">
            Avis clients depuis Snapchat
          </p>
          <div className="mt-3 w-20 h-1 bg-[#FFD700] mx-auto rounded-full" />
        </div>

        {/* Carousel */}
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

          {/* Videos */}
          <div
            ref={scrollRef}
            onScroll={updateArrows}
            className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {VIDEO_NUMBERS.map((num) => (
              <div
                key={num}
                className="w-[180px] sm:w-[200px] flex-none snap-center"
              >
                <div
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black cursor-pointer border border-white/5 hover:border-[#FFD700]/30 transition-all duration-300"
                  onClick={() => handleVideoClick(num)}
                >
                  {/* Video */}
                  <video
                    ref={(el) => setVideoRef(num, el)}
                    src={`/videos/review-${num}.mp4`}
                    playsInline
                    loop
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Snapchat badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 z-10">
                    {/* Snapchat ghost */}
                    <svg className="w-4 h-4 text-[#FFFC00]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.04-.012.06-.012.08-.012.16 0 .3.075.37.197a.42.42 0 01.012.49c-.045.075-.134.15-.237.21-.196.09-.57.24-.94.3a.953.953 0 00-.09.03c-.18.06-.39.12-.45.36-.03.12-.015.24.015.36.12.585.36 1.17.63 1.65.57 1.005 1.305 1.545 1.71 1.8.18.105.24.18.252.255a.263.263 0 01-.075.27c-.32.33-.84.51-1.59.615a1.067 1.067 0 00-.195.045c-.06.03-.12.09-.18.15-.12.135-.24.315-.48.315-.03 0-.06 0-.105-.015-.405-.12-.765-.18-1.11-.18-.135 0-.27.015-.405.045a4.12 4.12 0 01-.66.21c-.21.06-.435.09-.675.09-1.365 0-2.535-.75-3.6-1.275-.42-.195-.81-.39-1.17-.495a3.7 3.7 0 00-.825-.15c-.36 0-.72.06-1.05.15-.36.105-.75.3-1.17.495C7.71 16.05 6.54 16.8 5.175 16.8c-.24 0-.465-.03-.675-.09a4.12 4.12 0 01-.66-.21c-.135-.03-.27-.045-.405-.045-.345 0-.705.06-1.11.18-.045.015-.075.015-.105.015-.24 0-.36-.18-.48-.315-.06-.06-.12-.12-.18-.15a1.067 1.067 0 00-.195-.045c-.75-.105-1.27-.285-1.59-.615a.263.263 0 01-.075-.27c.015-.075.075-.15.255-.255.405-.255 1.14-.795 1.71-1.8.27-.48.51-1.065.63-1.65.03-.12.045-.24.015-.36-.06-.24-.27-.3-.45-.36a.953.953 0 00-.09-.03c-.37-.06-.744-.21-.94-.3a.684.684 0 01-.237-.21.42.42 0 01.012-.49.403.403 0 01.37-.197c.02 0 .04 0 .08.012.263.094.622.23.922.214.198 0 .326-.045.401-.09a8.3 8.3 0 01-.033-.57c-.104-1.628-.23-3.654.3-4.847C5.653 1.069 9.01.793 10 .793h2.206z" />
                    </svg>
                    <span className="text-[#FFFC00] text-[10px] font-bold tracking-wider uppercase">
                      Snapchat
                    </span>
                  </div>

                  {/* Play overlay */}
                  {playingId !== num && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-[#FFD700]/90 flex items-center justify-center shadow-lg shadow-[#FFD700]/30 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
