"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getWhatsAppUrl } from "@/data/contact";

const WHATSAPP_URL = getWhatsAppUrl("Bonjour, je souhaite reserver une activite");

const activitiesSubmenu = [
  { label: "Excursions", href: "/v2/excursions" },
  { label: "Activités Aquatiques", href: "/v2/activites-aquatiques" },
  { label: "Exploration & Bien-être", href: "/v2/exploration-bien-etre" },
  { label: "Toutes les activités", href: "/v2/toutes-nos-activites" },
];

const navLinks = [
  { label: "Accueil", href: "/v2" },
  { label: "Nos activités", href: "/v2/toutes-nos-activites", submenu: activitiesSubmenu },
  { label: "À propos", href: "/v2/a-propos" },
  { label: "Contact", href: "/v2/contact" },
];

export default function V2Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(255,215,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo → /v2 */}
        <Link href="/v2" className="flex items-center gap-2 group shrink-0">
          <span className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl tracking-wider text-[#FFD700] group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] transition-all duration-300">
            HURGHADA HABIBI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm uppercase tracking-widest font-medium text-white/90 hover:text-[#FFD700] transition-colors duration-300 rounded-lg"
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 w-56 origin-top rounded-2xl bg-[#1A1A1A] border border-[#FFD700]/20 p-2 shadow-2xl shadow-black/40 transition-all duration-200 ${
                    dropdownOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
                  }`}
                >
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-[#FFD700]/10 hover:text-[#FFD700]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm uppercase tracking-widest font-medium text-white/90 hover:text-[#FFD700] transition-colors duration-300 rounded-lg"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            href="/v2/recherche"
            className="ml-1 p-2 text-white/80 hover:text-[#FFD700] transition-colors rounded-lg"
            aria-label="Recherche"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-[#FFD700] text-black text-sm font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_24px_rgba(255,215,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            RÉSERVER
          </a>
        </nav>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#FFD700] text-black text-xs font-bold uppercase tracking-wider rounded-full"
          >
            RÉSERVER
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 top-0 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center pt-24 pb-10 gap-2 overflow-y-auto transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) =>
          link.submenu ? (
            <div key={link.label} className="w-full max-w-xs">
              <button
                onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                className="w-full flex items-center justify-center gap-2 py-3 font-[family-name:var(--font-bebas)] text-3xl text-white tracking-wider hover:text-[#FFD700] transition-colors"
              >
                {link.label}
                <svg className={`h-6 w-6 transition-transform duration-200 ${mobileSubmenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen ? "max-h-60" : "max-h-0"}`}>
                <div className="flex flex-col items-center gap-1 pb-2 border-l-2 border-[#FFD700]/30 mx-auto w-fit pl-6">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={closeMobile}
                      className="py-2 text-lg text-white/70 hover:text-[#FFD700] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className="py-3 font-[family-name:var(--font-bebas)] text-3xl text-white tracking-wider hover:text-[#FFD700] transition-colors"
            >
              {link.label}
            </Link>
          )
        )}

        <Link
          href="/v2/recherche"
          onClick={closeMobile}
          className="flex items-center gap-2 py-3 font-[family-name:var(--font-bebas)] text-3xl text-white tracking-wider hover:text-[#FFD700] transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          Recherche
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobile}
          className="mt-4 px-10 py-4 bg-[#FFD700] text-black font-bold text-lg uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
        >
          RÉSERVER
        </a>
      </div>
    </header>
  );
}
