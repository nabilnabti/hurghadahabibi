"use client";

const services = [
  {
    icon: "💎",
    title: "Accompagnement VIP",
    description: "Un conseiller dédié pour votre séjour",
  },
  {
    icon: "🛡️",
    title: "Sécurité Totale",
    description: "Votre sécurité est notre priorité",
  },
  {
    icon: "⭐",
    title: "Exclusivité",
    description: "Accès aux meilleurs spots privés",
  },
  {
    icon: "💰",
    title: "Prix Avantageux",
    description: "Les meilleurs prix garantis",
  },
  {
    icon: "🤝",
    title: "Confiance & Discrétion",
    description: "100% de clients satisfaits",
  },
];

export default function V2Services() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-[family-name:var(--font-bebas)] text-center text-5xl sm:text-6xl lg:text-7xl text-[#FFD700] mb-12 tracking-wide">
          POURQUOI NOUS ?
        </h2>

        {/* Grid: 2 cols mobile, 3 cols tablet, 5 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-[#1A1A1A] rounded-2xl p-5 sm:p-6 border-t-2 border-[#FFD700] transition-all duration-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] ${i === services.length - 1 ? "col-span-2 sm:col-span-1 mx-auto w-full max-w-[250px] sm:max-w-none" : ""}`}
            >
              {/* Large emoji */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-bebas)] text-lg sm:text-xl text-white tracking-wide mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
