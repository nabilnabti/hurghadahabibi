import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { activities, getActivityBySlug, getActivitiesByCategory } from "@/data/activities";
import V2Header from "@/components/v2/V2Header";
import V2Footer from "@/components/v2/V2Footer";
import BookingButton from "@/components/BookingButton";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return { title: "Activite introuvable" };
  return {
    title: `${activity.title} | Hurghada Habibi`,
    description: activity.description,
  };
}

export default async function V2ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  const similar = getActivitiesByCategory(activity.category)
    .filter((a) => a.id !== activity.id)
    .slice(0, 3);

  return (
    <>
      <V2Header />

      <main className="min-h-screen pt-20">
        {/* Hero image */}
        <div className="relative h-[40vh] sm:h-[50vh]">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />

          {/* Breadcrumb over image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-3">
                <Link href="/v2" className="hover:text-[#FFD700] transition-colors">Accueil</Link>
                <span>/</span>
                <span className="text-white/80 truncate max-w-[200px]">{activity.title}</span>
              </nav>
              <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
                {activity.title}
              </h1>
              <div className="flex items-center gap-4 mt-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-white/70 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {activity.location}
                </span>
                <span className="flex items-center gap-1.5 text-white/70 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  {activity.duration}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className={`w-4 h-4 ${s <= Math.floor(activity.rating) ? "text-[#FFD700]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-white/60">{activity.rating} ({activity.reviewCount} avis)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Price bar mobile */}
              <div className="lg:hidden flex items-center justify-between bg-[#1A1A1A] rounded-2xl p-5 border border-[#FFD700]/20">
                <div>
                  <p className="text-xs text-white/50">A partir de</p>
                  <p className="text-3xl font-bold text-[#FFD700]">{activity.price}&euro;<span className="text-sm font-normal text-white/50">/pers.</span></p>
                </div>
                {activity.childPrice !== undefined && activity.childPrice > 0 && (
                  <div className="text-right">
                    <p className="text-xs text-white/50">Enfant</p>
                    <p className="text-lg font-bold text-white">{activity.childPrice}&euro;</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
                <h2 className="font-[family-name:var(--font-bebas)] text-2xl text-[#FFD700] tracking-wide mb-3">DESCRIPTION</h2>
                <p className="text-white/70 leading-relaxed">{activity.description}</p>
              </div>

              {/* Programme */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
                <h2 className="font-[family-name:var(--font-bebas)] text-2xl text-[#FFD700] tracking-wide mb-4">PROGRAMME</h2>
                <div className="relative pl-6 border-l-2 border-[#FFD700]/30">
                  {activity.program.split(". ").filter(Boolean).map((step, i) => (
                    <div key={i} className="relative mb-4 last:mb-0">
                      <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-[#FFD700] border-2 border-[#1A1A1A]" />
                      <p className="text-white/70 text-sm leading-relaxed">{step.endsWith(".") ? step : `${step}.`}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclus / Non inclus */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
                  <h2 className="font-[family-name:var(--font-bebas)] text-xl text-green-400 tracking-wide mb-3">INCLUS</h2>
                  <ul className="space-y-2">
                    {activity.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
                  <h2 className="font-[family-name:var(--font-bebas)] text-xl text-red-400 tracking-wide mb-3">NON INCLUS</h2>
                  <ul className="space-y-2">
                    {activity.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Infos pratiques */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
                <h2 className="font-[family-name:var(--font-bebas)] text-2xl text-[#FFD700] tracking-wide mb-4">INFOS PRATIQUES</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Duree</p>
                      <p className="text-sm text-white font-medium">{activity.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Disponibilite</p>
                      <p className="text-sm text-white font-medium">{activity.availability}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Langues</p>
                      <p className="text-sm text-white font-medium">{activity.languages.join(", ")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Annulation</p>
                      <p className="text-sm text-white font-medium">{activity.cancellation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#FFD700]/20">
                  <div className="mb-6">
                    <p className="text-sm text-white/50 mb-1">A partir de</p>
                    <p className="text-4xl font-bold text-[#FFD700]">{activity.price}&euro;</p>
                    <p className="text-sm text-white/50">par personne</p>
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Adulte</span>
                      <span className="font-semibold text-white">{activity.price}&euro;</span>
                    </div>
                    {activity.childPrice !== undefined && activity.childPrice > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Enfant (6-12 ans)</span>
                        <span className="font-semibold text-white">{activity.childPrice}&euro;</span>
                      </div>
                    )}
                    {activity.babyPrice === 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Bebe (0-5 ans)</span>
                        <span className="font-semibold text-green-400">Gratuit</span>
                      </div>
                    )}
                  </div>

                  <Suspense fallback={<div className="h-48 animate-pulse bg-white/5 rounded-xl" />}>
                    <BookingButton
                      title={activity.title}
                      location={activity.location}
                      duration={activity.duration}
                      price={activity.price}
                      childPrice={activity.childPrice}
                      variant="sidebar"
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>

          {/* Similar */}
          {similar.length > 0 && (
            <section className="mt-16">
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-[#FFD700] tracking-wide mb-6">ACTIVITES SIMILAIRES</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {similar.map((a) => (
                  <Link
                    key={a.id}
                    href={`/v2/activite/${a.slug}`}
                    className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-[#FFD700] text-black text-sm font-bold px-3 py-1 rounded-full">{a.price}&euro;</div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold group-hover:text-[#FFD700] transition-colors">{a.title}</h3>
                      <p className="text-white/50 text-sm mt-1">{a.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Mobile bottom bar */}
        <Suspense fallback={null}>
          <BookingButton
            title={activity.title}
            location={activity.location}
            duration={activity.duration}
            price={activity.price}
            childPrice={activity.childPrice}
            variant="mobile"
          />
        </Suspense>
        <div className="h-28 lg:hidden" />
      </main>

      <V2Footer />
    </>
  );
}
