"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { searchActivities, destinations } from "@/data/activities";
import V2Header from "@/components/v2/V2Header";
import V2Footer from "@/components/v2/V2Footer";

const categories = [
  { value: "", label: "Toutes les categories" },
  { value: "excursions", label: "Excursions" },
  { value: "aquatique", label: "Aquatique" },
  { value: "exploration", label: "Exploration" },
];

function V2SearchContent() {
  const searchParams = useSearchParams();

  const [destination, setDestination] = useState(searchParams.get("destination") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(350);
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const d = searchParams.get("destination");
    const c = searchParams.get("category");
    const q = searchParams.get("q");
    if (d) setDestination(d);
    if (c) setCategory(c);
    if (q) setQuery(q);
  }, [searchParams]);

  const results = useMemo(() => {
    return searchActivities({
      destination: destination || undefined,
      category: category || undefined,
      minPrice: minPrice > 0 ? minPrice : undefined,
      maxPrice: maxPrice < 350 ? maxPrice : undefined,
      query: query || undefined,
    });
  }, [destination, category, minPrice, maxPrice, query]);

  function resetFilters() {
    setDestination("");
    setCategory("");
    setMinPrice(0);
    setMaxPrice(350);
    setQuery("");
  }

  const hasActiveFilters = destination || category || minPrice > 0 || maxPrice < 350 || query;

  const filterContent = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label htmlFor="search" className="mb-1.5 block text-sm font-medium text-white/70">
          Recherche
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Dauphins, Pyramides..."
            className="w-full rounded-xl border border-white/10 bg-[#111] py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20"
          />
        </div>
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-white/70">
          Destination
        </label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20"
        >
          <option value="">Toutes les destinations</option>
          {destinations.map((d) => (
            <option key={d.id} value={d.slug}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-white/70">
          Categorie
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20"
        >
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price range */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/70">
          Fourchette de prix
        </label>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="relative">
              <input
                type="number"
                min={0}
                max={maxPrice}
                value={minPrice}
                onChange={(e) => setMinPrice(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 pr-8 text-sm text-white outline-none transition-colors focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20"
                placeholder="Min"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/30">&euro;</span>
            </div>
          </div>
          <span className="text-sm text-white/30">-</span>
          <div className="flex-1">
            <div className="relative">
              <input
                type="number"
                min={minPrice}
                max={350}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Math.min(350, Number(e.target.value)))}
                className="w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 pr-8 text-sm text-white outline-none transition-colors focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20"
                placeholder="Max"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/30">&euro;</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-xs text-white/30">
          <span>{minPrice}&euro;</span>
          <span>{maxPrice}&euro;</span>
        </div>
      </div>

      {/* Reset */}
      {hasActiveFilters && (
        <button
          onClick={resetFilters}
          className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-[#FFD700]"
        >
          Reinitialiser les filtres
        </button>
      )}
    </div>
  );

  return (
    <>
      <V2Header />
      <main className="min-h-screen bg-[#0A0A0A] pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111] py-14 sm:py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#FFD700] blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl text-[#FFD700] tracking-wide">
                RECHERCHER
              </h1>
              <p className="mt-3 text-sm text-white/50 sm:text-base">
                Trouvez l&apos;excursion parfaite parmi nos 50+ activites
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Mobile filter toggle */}
              <div className="mb-6 lg:hidden">
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="flex w-full items-center justify-between rounded-xl bg-[#1A1A1A] px-5 py-3.5 text-sm font-semibold text-white border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    Filtres
                    {hasActiveFilters && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD700] text-xs text-black font-bold">
                        !
                      </span>
                    )}
                  </span>
                  <svg
                    className={`h-5 w-5 text-white/40 transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    filtersOpen ? "mt-4 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-2xl bg-[#1A1A1A] p-5 border border-white/5">
                    {filterContent}
                  </div>
                </div>
              </div>

              {/* Desktop sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 rounded-2xl bg-[#1A1A1A] p-6 border border-white/5">
                  <h2 className="mb-5 font-[family-name:var(--font-bebas)] text-xl text-[#FFD700] tracking-wide">FILTRES</h2>
                  {filterContent}
                </div>
              </aside>

              {/* Results */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-white/50">
                    <span className="font-bold text-[#FFD700]">{results.length}</span>{" "}
                    activite{results.length !== 1 ? "s" : ""} trouvee{results.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {results.length > 0 ? (
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
                    {results.map((activity) => (
                      <Link
                        key={activity.id}
                        href={`/v2/activite/${activity.slug}`}
                        className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={activity.image}
                            alt={activity.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-3 right-3 bg-[#FFD700] text-black text-sm font-bold px-3 py-1 rounded-full">
                            {activity.price}&euro;
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-white font-semibold group-hover:text-[#FFD700] transition-colors">
                            {activity.title}
                          </h3>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-white/50 text-sm">{activity.location}</p>
                            <div className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-white/60 text-xs">{activity.rating}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-[#1A1A1A] px-6 py-16 text-center border border-white/5 sm:py-24">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFD700]/10">
                      <svg className="h-12 w-12 text-[#FFD700]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#FFD700] tracking-wide">
                      AUCUNE ACTIVITE TROUVEE
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-white/50">
                      Essayez de modifier vos filtres ou d&apos;elargir votre recherche pour
                      decouvrir nos activites.
                    </p>
                    <button
                      onClick={resetFilters}
                      className="mt-6 rounded-full bg-[#FFD700] px-8 py-3 text-sm font-bold text-black transition-all hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-[#FFD700]/20 active:scale-95"
                    >
                      Reinitialiser les filtres
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <V2Footer />
    </>
  );
}

export default function V2SearchPage() {
  return (
    <Suspense
      fallback={
        <>
          <V2Header />
          <main className="min-h-screen bg-[#0A0A0A] pt-20">
            <section className="relative overflow-hidden bg-[#111] py-14 sm:py-20">
              <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl text-[#FFD700] tracking-wide">
                    RECHERCHER
                  </h1>
                </div>
              </div>
            </section>
            <section className="py-16">
              <div className="mx-auto max-w-7xl px-4 text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-[#FFD700]" />
              </div>
            </section>
          </main>
          <V2Footer />
        </>
      }
    >
      <V2SearchContent />
    </Suspense>
  );
}
