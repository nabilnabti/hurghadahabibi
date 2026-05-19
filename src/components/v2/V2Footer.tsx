import { CONTACT_ADDRESS, CONTACT_HOURS, CONTACT_EMAIL } from "@/data/contact";
import { getWhatsAppUrl } from "@/data/contact";

const WHATSAPP_URL = getWhatsAppUrl("Salut ! J'ai une question sur vos exp\u00E9riences \u{1F334}");

export default function V2Footer() {
  return (
    <footer id="contact" className="relative bg-[#0A0A0A] border-t border-[#D4AF37]/30">
      {/* Gold gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider text-[#FFD700]">
              HURGHADA HABIBI
            </h2>
            <p className="mt-3 text-white/50 text-sm leading-relaxed max-w-xs">
              L&apos;agence qui transforme tes vacances en souvenirs l&eacute;gendaires.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wider text-white/80 mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{CONTACT_ADDRESS}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{CONTACT_HOURS}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#FFD700] transition-colors duration-300">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wider text-white/80 mb-4">
              RÉSEAUX
            </h3>
            <div className="flex flex-col gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/hurghada.habibi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/50 hover:text-[#FFD700] transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#FFD700] group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>

              {/* Snapchat */}
              <a
                href="https://www.snapchat.com/@hurghadahabibi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/50 hover:text-[#FFD700] transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#FFD700] group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.12-.042.195-.065.285-.065.15 0 .27.044.39.12.12.075.18.195.18.33 0 .18-.12.36-.33.51-.104.07-.3.18-.615.315-.135.06-.345.12-.585.195-.285.09-.585.18-.793.27-.03.015-.06.03-.084.042-.09.045-.195.105-.3.18-.135.12-.21.285-.24.495-.015.09-.015.18-.015.27 0 .045 0 .09.015.135.03.18.075.36.135.54.075.225.165.435.27.63.165.3.39.585.675.84.315.285.69.54 1.14.75.18.09.375.165.57.225.12.045.225.075.33.105.165.06.24.09.315.18.06.075.075.15.075.225 0 .105-.06.21-.18.315-.195.15-.51.255-.84.315-.18.03-.345.06-.48.075-.105.015-.195.03-.27.045l-.015.003c-.06.015-.12.03-.18.045-.255.075-.435.21-.555.42-.09.15-.135.33-.135.54 0 .09.015.18.03.27.06.3.15.585.24.855.09.255.195.495.315.705l.03.045c.09.135.015.3-.135.39-.51.3-1.11.42-1.59.48-.15.015-.285.015-.405.015-.105 0-.195-.015-.285-.03-.09-.015-.165-.03-.24-.03-.09 0-.195.015-.3.06-.12.045-.255.12-.405.225-.285.195-.615.435-.99.6-.525.24-1.095.36-1.695.36-.06 0-.12 0-.18-.003-.06.003-.12.003-.18.003-.6 0-1.17-.12-1.695-.36-.375-.165-.705-.405-.99-.6-.15-.105-.285-.18-.405-.225-.105-.045-.21-.06-.3-.06-.075 0-.15.015-.24.03-.09.015-.18.03-.285.03-.12 0-.255 0-.405-.015-.48-.06-1.08-.18-1.59-.48-.15-.09-.225-.255-.135-.39l.03-.045c.12-.21.225-.45.315-.705.09-.27.18-.555.24-.855.015-.09.03-.18.03-.27 0-.21-.045-.39-.135-.54-.12-.21-.3-.345-.555-.42-.06-.015-.12-.03-.18-.045l-.015-.003c-.075-.015-.165-.03-.27-.045-.135-.015-.3-.045-.48-.075-.33-.06-.645-.165-.84-.315-.12-.105-.18-.21-.18-.315 0-.075.015-.15.075-.225.075-.09.15-.12.315-.18.105-.03.21-.06.33-.105.195-.06.39-.135.57-.225.45-.21.825-.465 1.14-.75.285-.255.51-.54.675-.84.105-.195.195-.405.27-.63.06-.18.105-.36.135-.54.015-.045.015-.09.015-.135 0-.09 0-.18-.015-.27-.03-.21-.105-.375-.24-.495-.105-.075-.21-.135-.3-.18-.024-.012-.054-.027-.084-.042-.21-.09-.51-.18-.793-.27-.24-.075-.45-.135-.585-.195-.315-.135-.51-.245-.615-.315-.21-.15-.33-.33-.33-.51 0-.135.06-.255.18-.33.12-.076.24-.12.39-.12.09 0 .165.023.285.065.264.094.622.23.922.214.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z" />
                </svg>
                <span className="text-sm">Snapchat</span>
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/50 hover:text-[#FFD700] transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#FFD700] group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wider text-white/80 mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "#" },
                { label: "Exp\u00E9riences", href: "#experiences" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs sm:text-sm text-center sm:text-left">
              &copy; 2026 Hurghada Habibi. All vibes reserved. &#10024;
            </p>
            <div className="flex items-center gap-1">
              <span className="text-white/20 text-xs">Made with</span>
              <span className="text-[#FF1493] text-sm animate-pulse">&hearts;</span>
              <span className="text-white/20 text-xs">in Hurghada</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
