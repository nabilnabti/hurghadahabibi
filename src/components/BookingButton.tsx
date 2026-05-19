"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getWhatsAppUrl } from "@/data/contact";

type Props = {
  title: string;
  location: string;
  duration: string;
  price: number;
  childPrice?: number;
  variant: "sidebar" | "mobile";
  theme?: "light" | "dark";
};

export default function BookingButton({ title, location, duration, price, childPrice, variant, theme = "light" }: Props) {
  const searchParams = useSearchParams();
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState("2");
  const dark = theme === "dark";

  useEffect(() => {
    const urlDate = searchParams.get("date");
    if (urlDate) setDate(urlDate);
  }, [searchParams]);

  const formatDate = (d: string) => {
    if (!d) return "a preciser";
    const [y, m, day] = d.split("-");
    return `${day}/${m}/${y}`;
  };

  const message = `Bonjour Hurghada Habibi !

Je souhaite reserver l'activite suivante :

- *${title}*
- ${location}
- Duree : ${duration}
- Prix : ${price}EUR/pers.${childPrice ? ` | Enfant : ${childPrice}EUR` : ""}

- Date souhaitee : ${formatDate(date)}
- Nombre de personnes : ${persons}

Merci de me confirmer la disponibilite !`;

  const whatsappUrl = getWhatsAppUrl(message);

  // Style tokens
  const inputBg = dark ? "bg-white/10 border-white/20 text-white" : "bg-gray-50 border-gray-200 text-gray-900";
  const placeholderColor = dark ? "text-white/40" : "text-gray-400";
  const labelColor = dark ? "text-white/70" : "text-foreground";
  const priceColor = dark ? "text-[#FFD700]" : "text-[#E8461C]";
  const subTextColor = dark ? "text-white/40" : "text-gray-400";
  const barBg = dark
    ? "bg-[#1A1A1A] border-t border-white/10"
    : "bg-white border-t border-gray-200";
  const selectOptionBg = dark ? "bg-[#1A1A1A]" : "";

  if (variant === "mobile") {
    return (
      <div className={`fixed bottom-0 left-0 right-0 ${barBg} px-4 py-3 lg:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]`}>
        {/* Row 1: Date + Personnes */}
        <div className="flex items-center gap-2 mb-2.5">
          {/* Date with placeholder */}
          <div className="flex-1 relative min-h-[40px]">
            {!date && (
              <span className={`absolute inset-0 flex items-center pl-3 ${placeholderColor} text-xs pointer-events-none z-10`}>
                Choisir une date
              </span>
            )}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`absolute inset-0 w-full h-full pl-3 pr-2 border rounded-lg text-xs ${inputBg}`}
              style={{ fontSize: "16px", color: date ? (dark ? "white" : "#111827") : "transparent", colorScheme: dark ? "dark" : "light" }}
            />
          </div>
          {/* Personnes */}
          <div className="relative shrink-0 w-[120px]">
            <select
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className={`w-full h-[40px] pl-3 pr-7 border rounded-lg text-xs appearance-none ${inputBg}`}
              style={{ fontSize: "16px" }}
            >
              {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <option key={n} value={n} className={selectOptionBg}>{n} pers.</option>
              ))}
              <option value="10+" className={selectOptionBg}>+10 pers.</option>
            </select>
            <svg className={`absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${subTextColor} pointer-events-none`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        {/* Row 2: Prix + Bouton */}
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <p className={`text-[10px] ${subTextColor} leading-none`}>A partir de</p>
            <p className={`text-lg font-bold ${priceColor} leading-tight`}>{price}&euro;<span className={`text-[10px] font-normal ${subTextColor}`}>/pers.</span></p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 ${dark ? "bg-[#FFD700] text-black hover:bg-[#E5C200]" : "bg-[#25D366] hover:bg-[#20BD5A] text-white"} font-bold py-3 rounded-xl transition-colors text-sm shadow-lg`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reserver via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  // Sidebar variant
  return (
    <div className="space-y-4">
      {/* Date picker */}
      <div>
        <label className={`block text-sm font-semibold ${labelColor} mb-1.5`}>Date souhaitee</label>
        <div className="relative min-h-[48px]">
          {!date && (
            <span className={`absolute inset-0 flex items-center pl-4 ${placeholderColor} text-sm pointer-events-none z-10`}>
              Choisir une date
            </span>
          )}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`absolute inset-0 w-full h-full px-4 border rounded-xl text-sm focus:outline-none focus:ring-2 ${dark ? "focus:ring-[#FFD700]/30 focus:border-[#FFD700]/30" : "focus:ring-[#E8461C]/30 focus:border-[#E8461C]/30"} ${inputBg}`}
            style={{ fontSize: "16px", color: date ? (dark ? "white" : "#111827") : "transparent", colorScheme: dark ? "dark" : "light" }}
          />
        </div>
      </div>

      {/* Persons */}
      <div>
        <label className={`block text-sm font-semibold ${labelColor} mb-1.5`}>Nombre de personnes</label>
        <select
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          className={`w-full h-12 px-4 border rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 ${dark ? "focus:ring-[#FFD700]/30" : "focus:ring-[#E8461C]/30"} ${inputBg}`}
        >
          {[1,2,3,4,5,6,7,8,9,10].map((n) => (
            <option key={n} value={n} className={selectOptionBg}>{n} personne{n > 1 ? "s" : ""}</option>
          ))}
          <option value="10+" className={selectOptionBg}>Plus de 10</option>
        </select>
      </div>

      {/* CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 w-full ${dark ? "bg-[#FFD700] text-black hover:bg-[#E5C200]" : "bg-[#25D366] hover:bg-[#20BD5A] text-white"} font-bold py-4 px-6 rounded-xl transition-colors text-base shadow-lg`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Reserver via WhatsApp
      </a>
      <p className={`text-xs ${subTextColor} text-center`}>Reponse rapide garantie</p>
    </div>
  );
}
