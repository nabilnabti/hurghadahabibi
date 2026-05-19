import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl, CONTACT_ADDRESS, CONTACT_HOURS } from "@/data/contact";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Excursions", href: "/excursions" },
  { label: "Activités Aquatiques", href: "/activites-aquatiques" },
  { label: "Exploration & Bien-être", href: "/exploration-bien-etre" },
  { label: "Toutes les activités", href: "/toutes-nos-activites" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP_URL = getWhatsAppUrl("Bonjour, je souhaite réserver une activité");

export default function Footer() {
  return (
    <footer className="relative">
      {/* Wave SVG divider */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="url(#footerGrad)"
          />
          <defs>
            <linearGradient id="footerGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main footer */}
      <div
        className="relative text-gray-300"
        style={{ background: "linear-gradient(180deg, #111827 0%, #0a0a0a 100%)" }}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#E8461C]/[0.03] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="Hurghada Habibi"
                  width={160}
                  height={48}
                  className="h-14 w-auto"
                />
              </Link>
              <p className="mt-2 text-sm font-medium tracking-wide text-[#E8461C]/80">
                Votre partenaire voyage en Egypte
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-400/90">
                Votre agence francophone n&deg;1 a Hurghada. Decouvrez les plus belles
                excursions, activites aquatiques et experiences de la mer Rouge.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Liens rapides
              </h3>
              <ul className="mt-6 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 py-1.5 text-sm text-gray-400 transition-all duration-300 hover:text-[#E8461C] hover:translate-x-1.5"
                    >
                      <span className="h-px w-0 bg-[#E8461C] transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Contact
              </h3>
              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3.5 text-sm text-gray-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-[#25D366]"
                  >
                    {/* WhatsApp icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/10">
                      <svg className="h-4.5 w-4.5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span className="font-medium">+20 155 610 1611</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3.5 text-sm text-gray-400">
                    {/* Location icon */}
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#4AABE0]/10">
                      <svg className="h-4 w-4 text-[#4AABE0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>{CONTACT_ADDRESS}</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3.5 text-sm text-gray-400">
                    {/* Clock icon */}
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8461C]/10">
                      <svg className="h-4 w-4 text-[#E8461C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <span>{CONTACT_HOURS}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Suivez-nous
              </h3>
              <div className="mt-6 flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/hurghada.habibi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.07] text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:shadow-lg hover:shadow-[#ee2a7b]/20"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* Snapchat */}
                <a
                  href="https://www.snapchat.com/@hurghadahabibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.07] text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#FFFC00] hover:text-[#1A1A1A] hover:shadow-lg hover:shadow-[#FFFC00]/20"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 0c-55.8 0-103.8 8.3-131.2 52.8C99.6 93.4 109.4 150 112 176.4c-1 .2-2.4-.2-4-.8-12.8-5.2-27.6-11.2-42.4-7.2-12 3.2-20 12.8-20 25.2 0 14 11.2 22.8 21.6 28.4 17.6 9.6 36 14.4 42 27.2 2 4.4 1.6 9.6-.8 16-28 59.2-70 98.8-120.4 104.8C-22 372 3.2 396 16 404c24 15.2 54 22.8 80.4 28.8 4 6.8 8.4 24 14.8 34 7.6 12.4 19.2 20.4 35.2 20.4 12 0 24.4-4.4 40-10 18-6.4 40-14 69.6-14s51.6 7.6 69.6 14c15.6 5.6 28 10 40 10 16 0 27.6-8 35.2-20.4 6.4-10 10.8-27.2 14.8-34 26.4-6 56.4-13.6 80.4-28.8 12.8-8 38-32 27.6-34-50.4-6-92.4-45.6-120.4-104.8-2.4-6.4-2.8-11.6-.8-16 6-12.8 24.4-17.6 42-27.2 10.4-5.6 21.6-14.4 21.6-28.4 0-12.4-8-22-20-25.2-14.8-4-29.6 2-42.4 7.2-1.6.6-3 1-4 .8 2.6-26.4 12.4-83 -12.8-123.6C359.8 8.3 311.8 0 256 0z" />
                  </svg>
                </a>
              </div>

              {/* Decorative newsletter-style section */}
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#E8461C]/10 to-[#4AABE0]/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                  Explorez la mer Rouge
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-400/90">
                  Des experiences uniques vous attendent a Hurghada. Contactez-nous pour planifier votre aventure.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white/90 transition-all duration-300 hover:bg-white/[0.14] hover:scale-105"
                >
                  Nous contacter
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright with gradient border */}
          <div className="relative mt-14 pt-8 text-center">
            {/* Gradient top border */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              }}
            />
            <p className="text-sm text-gray-500/80">
              &copy; {new Date().getFullYear()} Hurghada Habibi. Tous droits reserves.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
