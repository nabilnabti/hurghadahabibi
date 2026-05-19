import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/contact";
import V2Header from "@/components/v2/V2Header";
import V2Footer from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "A propos | Hurghada Habibi V2",
  description:
    "Decouvrez l'histoire de Hurghada Habibi, agence de voyage francophone en Egypte. Experiences uniques, guides francophones et prix transparents.",
};

const WHATSAPP_URL = getWhatsAppUrl("Bonjour, je souhaite en savoir plus sur Hurghada Habibi");

const missions = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Experience Unique",
    description:
      "Chaque excursion est pensee pour vous offrir des souvenirs inoubliables. Nous selectionnons les meilleurs prestataires et les sites les plus spectaculaires.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: "Guides Francophones",
    description:
      "Tous nos guides parlent couramment francais. Fini la barriere de la langue ! Profitez de chaque visite avec des explications claires et passionnantes.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Prix Transparents",
    description:
      "Pas de frais caches, pas de mauvaises surprises. Le prix affiche est le prix que vous payez. Nous croyons en la transparence totale.",
  },
];

const stats = [
  { value: "N\u00b01", label: "Agence francophone a Hurghada" },
  { value: "100K+", label: "Clients satisfaits" },
  { value: "50+", label: "Activites disponibles" },
  { value: "100%", label: "Francophone" },
];

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Passion",
    description: "Nous aimons ce que nous faisons et cela se ressent dans chaque detail de nos services.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Proximite",
    description: "Une equipe a taille humaine, disponible 7j/7, qui vous accompagne avant, pendant et apres votre voyage.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Authenticite",
    description: "Nous proposons des experiences authentiques loin du tourisme de masse, pour decouvrir la vraie Egypte.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Qualite",
    description: "Chaque activite est testee et approuvee par notre equipe. Nous ne proposons que le meilleur.",
  },
];

export default function V2AboutPage() {
  return (
    <>
      <V2Header />
      <main className="min-h-screen bg-[#0A0A0A] pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111] py-20 sm:py-28 lg:py-36">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#FFD700] blur-[120px]" />
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37] blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#FFD700]/70">
                Qui sommes-nous ?
              </p>
              <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl text-[#FFD700] tracking-wide">
                A PROPOS
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
                Votre agence de voyage francophone N&deg;1 en Egypte. Des experiences
                authentiques, des guides passionnes et des souvenirs pour la vie.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FFD700]/70">
                  Notre histoire
                </p>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#FFD700] tracking-wide">
                  UNE HISTOIRE D&apos;AMOUR AVEC L&apos;EGYPTE
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60 sm:text-lg">
                  <p>
                    Tout a commence lors de vacances en famille a Hurghada. Les eaux
                    turquoise de la Mer Rouge, la chaleur de l&apos;accueil egyptien, la
                    magie des temples millenaires... Ce fut un veritable coup de foudre.
                  </p>
                  <p>
                    De retour en France, une idee germe : pourquoi ne pas aider d&apos;autres
                    francophones a vivre cette meme experience, sans les tracas habituels
                    du voyage ? C&apos;est ainsi qu&apos;est nee{" "}
                    <span className="font-semibold text-[#FFD700]">Hurghada Habibi</span>.
                  </p>
                  <p>
                    Notre mission est simple : vous offrir des experiences de voyage
                    inoubliables, organisees de A a Z, avec des guides francophones
                    passionnes et des prix justes. Pas de stress, pas de surprises
                    desagreables. Juste du bonheur.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFD700]/10 to-[#D4AF37]/10 border border-[#FFD700]/10">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFD700]/10">
                        <svg className="h-10 w-10 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <p className="text-lg font-bold text-white">Notre equipe sur le terrain</p>
                      <p className="mt-1 text-sm text-white/50">Hurghada, Egypte</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 hidden rounded-xl bg-[#FFD700] px-6 py-4 text-black shadow-xl sm:block">
                  <p className="text-2xl font-extrabold">+10 ans</p>
                  <p className="text-sm font-medium text-black/60">d&apos;experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#111] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FFD700]/70">
                Notre mission
              </p>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#FFD700] tracking-wide">
                POURQUOI CHOISIR HURGHADA HABIBI ?
              </h2>
              <p className="mt-4 text-base text-white/50 sm:text-lg">
                Nous mettons tout en oeuvre pour que votre voyage soit parfait,
                du premier contact jusqu&apos;a votre retour.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              {missions.map((mission) => (
                <div
                  key={mission.title}
                  className="group rounded-2xl bg-[#1A1A1A] p-6 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD700]/20 sm:p-8"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/10 text-[#FFD700] transition-colors group-hover:bg-[#FFD700] group-hover:text-black">
                    {mission.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                    {mission.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50 sm:text-base">
                    {mission.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#0A0A0A] py-12 sm:py-16 border-y border-[#FFD700]/10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold text-[#FFD700] sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/50 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#FFD700]/70">
                Ce qui nous anime
              </p>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#FFD700] tracking-wide">
                NOS VALEURS
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/5 bg-[#1A1A1A] p-6 text-center transition-all duration-300 hover:border-[#FFD700]/20"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10 text-[#FFD700]">
                    {v.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white sm:text-lg">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA WhatsApp */}
        <section className="bg-gradient-to-r from-[#FFD700] to-[#D4AF37] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl lg:text-5xl text-black tracking-wide">
              PRET A VIVRE UNE EXPERIENCE INOUBLIABLE ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-black/70 sm:text-lg">
              Contactez-nous sur WhatsApp et recevez un devis personnalise en
              quelques minutes. Notre equipe francophone est la pour vous.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-base font-bold text-[#FFD700] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 sm:w-auto"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactez-nous sur WhatsApp
              </a>
              <Link
                href="/v2/contact"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-black px-8 py-4 text-base font-bold text-black transition-all duration-200 hover:bg-black/10 active:scale-95 sm:w-auto"
              >
                Voir toutes nos coordonnees
              </Link>
            </div>
          </div>
        </section>
      </main>
      <V2Footer />
    </>
  );
}
