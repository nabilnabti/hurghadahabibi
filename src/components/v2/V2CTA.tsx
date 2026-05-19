import { getWhatsAppUrl } from "@/data/contact";

export default function V2CTA() {
  const whatsappLink = getWhatsAppUrl(
    "Bonjour, je souhaite réserver une activité à Hurghada !"
  );

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#FFD700]/20" />

      {/* Sparkle decorations */}
      <div className="absolute top-16 left-[15%] w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
      <div className="absolute top-28 right-[20%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-20 left-[25%] w-1 h-1 bg-[#FFD700] rounded-full animate-pulse delay-700" />
      <div className="absolute top-1/3 right-[10%] w-2.5 h-2.5 bg-[#FFD700]/60 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-1/3 left-[10%] w-2 h-2 bg-[#D4AF37]/50 rounded-full animate-pulse delay-200" />
      <div className="absolute top-20 left-[50%] w-1 h-1 bg-[#FFD700]/80 rounded-full animate-pulse delay-1000" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-tight">
          PR&Ecirc;T POUR
          <br />
          <span className="text-[#FFD700]">L&rsquo;AVENTURE ?</span>
        </h2>

        <p className="mt-6 text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          R&eacute;serve ton activit&eacute; en 2 minutes via WhatsApp
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-[#FFD700] text-black
              rounded-full py-5 px-12
              text-xl font-bold tracking-wide
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]
              active:scale-95
            "
          >
            {/* WhatsApp icon */}
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            R&eacute;server maintenant
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-[#FFD700] text-sm sm:text-base font-medium tracking-wide">
          <span className="inline-block mr-2">💎</span>
          R&eacute;ponse en moins de 5 minutes
        </p>
      </div>
    </section>
  );
}
