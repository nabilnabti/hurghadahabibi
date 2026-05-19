"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { searchActivities, destinations } from "@/data/activities";
import ActivityCard from "@/components/ActivityCard";

const categories = [
  { value: "", label: "Toutes les categories" },
  { value: "excursions", label: "Excursions" },
  { value: "aquatique", label: "Aquatique" },
  { value: "exploration", label: "Exploration" },
];

function SearchPageContent() {
  const searchParams = useSearchParams();

  const [destination, setDestination] = useState(searchParams.get("destination") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [date, setDate] = useState(searchParams.get("date") || "");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(350);
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync URL params on mount
  useEffect(() => {
    const d = searchParams.get("destination");
    const c = searchParams.get("category");
    const q = searchParams.get("q");
    const dt = searchParams.get("date");
    if (d) setDestination(d);
    if (c) setCategory(c);
    if (q) setQuery(q);
    if (dt) setDate(dt);
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
        <label htmlFor="search" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Recherche
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
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
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-[#1A1A1A] placeholder-gray-400 outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20"
          />
        </div>
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Destination
        </label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20"
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
        <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Categorie
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20"
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
        <label className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
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
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-8 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20"
                placeholder="Min"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">&euro;</span>
            </div>
          </div>
          <span className="text-sm text-gray-400">-</span>
          <div className="flex-1">
            <div className="relative">
              <input
                type="number"
                min={minPrice}
                max={350}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Math.min(350, Number(e.target.value)))}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-8 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20"
                placeholder="Max"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">&euro;</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>{minPrice}&euro;</span>
          <span>{maxPrice}&euro;</span>
        </div>
      </div>

      {/* Reset */}
      {hasActiveFilters && (
        <button
          onClick={resetFilters}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#E8461C]"
        >
          Reinitialiser les filtres
        </button>
      )}
    </div>
  );

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Rechercher une activite
            </h1>
            <p className="mt-3 text-sm text-white/60 sm:text-base">
              Trouvez l&apos;excursion parfaite parmi nos {results.length > 0 ? "50+" : ""} activites
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Mobile filter toggle */}
            <div className="mb-6 lg:hidden">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex w-full items-center justify-between rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#1A1A1A] shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                  Filtres
                  {hasActiveFilters && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8461C] text-xs text-white">
                      !
                    </span>
                  )}
                </span>
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""}`}
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
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  {filterContent}
                </div>
              </div>
            </div>

            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-lg font-bold text-[#1A1A1A]">Filtres</h2>
                {filterContent}
              </div>
            </aside>

            {/* Results */}
            <div className="lg:col-span-3">
              {/* Results count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">
                  <span className="font-bold text-[#1A1A1A]">{results.length}</span>{" "}
                  activite{results.length !== 1 ? "s" : ""} trouvee{results.length !== 1 ? "s" : ""}
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
                  {results.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm sm:py-24">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                    <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] sm:text-xl">
                    Aucune activite trouvee
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-gray-500">
                    Essayez de modifier vos filtres ou d&apos;elargir votre recherche pour
                    decouvrir nos activites.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-6 rounded-full bg-[#E8461C] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#d13d16] hover:shadow-lg active:scale-95"
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
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="flex-1">
          <section className="bg-gradient-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                  Rechercher une activite
                </h1>
              </div>
            </div>
          </section>
          <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#E8461C]" />
            </div>
          </section>
        </main>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
