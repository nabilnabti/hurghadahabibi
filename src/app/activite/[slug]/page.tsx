import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { activities, getActivityBySlug, getActivitiesByCategory } from "@/data/activities";
import ImageGallery from "@/components/ImageGallery";
import ActivityCard from "@/components/ActivityCard";
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
    openGraph: {
      title: activity.title,
      description: activity.description,
      images: [activity.image],
    },
  };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  // Gallery images: use gallery if available, otherwise use main image
  const galleryImages =
    activity.gallery.length > 0
      ? activity.gallery
      : [activity.image];

  // Similar activities (same category, excluding current)
  const similar = getActivitiesByCategory(activity.category)
    .filter((a) => a.id !== activity.id)
    .slice(0, 3);

  const categoryLabels: Record<string, string> = {
    excursions: "Excursions",
    aquatique: "Activites Aquatiques",
    exploration: "Exploration & Bien-etre",
  };

  const categoryLinks: Record<string, string> = {
    excursions: "/excursions",
    aquatique: "/activites-aquatiques",
    exploration: "/exploration-bien-etre",
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-orange transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={categoryLinks[activity.category]}
                className="hover:text-orange transition-colors"
              >
                {categoryLabels[activity.category]}
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">
              {activity.title}
            </li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content - 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <ImageGallery images={galleryImages} title={activity.title} />

            {/* Title & Meta */}
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                {activity.featured && (
                  <span className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    Populaire
                  </span>
                )}
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                  {categoryLabels[activity.category]}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                {activity.title}
              </h1>

              <div className="flex items-center gap-4 flex-wrap text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {activity.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {activity.duration}
                </span>
                <span className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.floor(activity.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">
                    {activity.rating} ({activity.reviewCount} avis)
                  </span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-foreground mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">{activity.description}</p>
            </div>

            {/* Program */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-foreground mb-4">Programme</h2>
              <div className="relative pl-6 border-l-2 border-orange/30">
                {activity.program.split(". ").filter(Boolean).map((step, i) => (
                  <div key={i} className="relative mb-4 last:mb-0">
                    <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-orange border-2 border-white shadow" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.endsWith(".") ? step : `${step}.`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Not included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Inclus
                </h2>
                <ul className="space-y-2">
                  {activity.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  Non inclus
                </h2>
                <ul className="space-y-2">
                  {activity.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-foreground mb-4">Informations pratiques</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Duree</p>
                    <p className="text-sm text-gray-500">{activity.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Disponibilite</p>
                    <p className="text-sm text-gray-500">{activity.availability}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Langues</p>
                    <p className="text-sm text-gray-500">{activity.languages.join(", ")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Annulation</p>
                    <p className="text-sm text-gray-500">{activity.cancellation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Sticky on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-1">A partir de</p>
                  <p className="text-3xl font-bold text-orange">{activity.price}&euro;</p>
                  <p className="text-sm text-gray-500">par personne</p>
                </div>

                {/* Price breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Adulte</span>
                    <span className="font-semibold text-foreground">{activity.price}&euro;</span>
                  </div>
                  {activity.childPrice !== undefined && activity.childPrice > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Enfant (6-12 ans)</span>
                      <span className="font-semibold text-foreground">{activity.childPrice}&euro;</span>
                    </div>
                  )}
                  {activity.babyPrice !== undefined && activity.babyPrice > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bebe (0-5 ans)</span>
                      <span className="font-semibold text-foreground">{activity.babyPrice}&euro;</span>
                    </div>
                  )}
                  {activity.babyPrice === 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bebe (0-5 ans)</span>
                      <span className="font-semibold text-green-600">Gratuit</span>
                    </div>
                  )}
                </div>

                {/* Key info */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {activity.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {activity.availability}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    {activity.cancellation}
                  </div>
                </div>

                {/* CTA with date & persons picker */}
                <Suspense fallback={<div className="h-48 animate-pulse bg-gray-100 rounded-xl" />}>
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

        {/* Similar Activities */}
        {similar.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Activites similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((a) => (
                <ActivityCard key={a.id} activity={a} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile Fixed Bottom Bar */}
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

      {/* Spacer for mobile fixed bar */}
      <div className="h-20 lg:hidden" />
    </main>
  );
}
