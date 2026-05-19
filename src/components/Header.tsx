"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getWhatsAppUrl } from "@/data/contact";

const WHATSAPP_URL = getWhatsAppUrl("Bonjour, je souhaite réserver une activité");

const activitiesSubmenu = [
  { label: "Excursions", href: "/excursions" },
  { label: "Activités Aquatiques", href: "/activites-aquatiques" },
  { label: "Exploration & Bien-être", href: "/exploration-bien-etre" },
  { label: "Toutes les activités", href: "/toutes-nos-activites" },
];

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos activités", href: "/toutes-nos-activites", submenu: activitiesSubmenu },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <>
      {/* Shimmer keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slideUnderline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `}</style>

      <header
        className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all duration-500"
        style={{
          boxShadow: scrolled
            ? "0 4px 24px -2px rgba(232, 70, 28, 0.08), 0 2px 8px -2px rgba(0,0,0,0.06)"
            : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="Hurghada Habibi"
              width={320}
              height={96}
              className="h-16 w-auto sm:h-20"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="group relative flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium tracking-wide text-[#1A1A1A] transition-colors duration-300 hover:text-[#E8461C]"
                  >
                    {link.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {/* Animated underline */}
                    <span className="absolute bottom-1 left-5 right-5 h-[2px] origin-left scale-x-0 rounded-full bg-[#E8461C] transition-transform duration-300 group-hover:scale-x-100" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full mt-3 w-60 -translate-x-1/2 origin-top transition-all duration-300 ${
                      dropdownOpen
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-95 opacity-0"
                    }`}
                  >
                    {/* Triangle arrow */}
                    <div className="flex justify-center">
                      <div className="h-3 w-3 rotate-45 rounded-sm bg-white shadow-[-2px_-2px_4px_rgba(0,0,0,0.04)]" />
                    </div>
                    <div className="-mt-1.5 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/[0.04]">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setDropdownOpen(false)}
                          className="group/item flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#1A1A1A] transition-all duration-200 hover:bg-[#E8461C]/[0.04] hover:text-[#E8461C]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E8461C]/20 transition-all duration-200 group-hover/item:bg-[#E8461C] group-hover/item:scale-125" />
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
                  className="group relative px-5 py-2.5 text-sm font-medium tracking-wide text-[#1A1A1A] transition-colors duration-300 hover:text-[#E8461C]"
                >
                  {link.label}
                  {/* Animated underline */}
                  <span className="absolute bottom-1 left-5 right-5 h-[2px] origin-left scale-x-0 rounded-full bg-[#E8461C] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              )
            )}

            {/* Search icon */}
            <Link
              href="/recherche"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full text-[#1A1A1A]/70 transition-all duration-300 hover:bg-[#E8461C]/[0.06] hover:text-[#E8461C]"
              aria-label="Recherche"
            >
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </Link>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative ml-5 inline-flex items-center overflow-hidden rounded-full px-7 py-2.5 text-sm font-bold tracking-wider text-white shadow-lg shadow-[#E8461C]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#E8461C]/30 hover:scale-105 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #E8461C 0%, #c93a15 100%)",
              }}
            >
              {/* Shimmer overlay */}
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
              <span className="relative">RÉSERVER</span>
            </a>
          </nav>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-5 py-2 text-xs font-bold tracking-wider text-white shadow-lg shadow-[#E8461C]/25 transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #E8461C 0%, #c93a15 100%)",
              }}
            >
              RÉSERVER
            </a>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-50"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <div className="flex h-5 w-6 flex-col items-center justify-center">
                <span
                  className={`block h-[2px] w-6 rounded-full bg-[#1A1A1A] transition-all duration-300 ease-out ${
                    mobileOpen ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`mt-1.5 block h-[2px] w-6 rounded-full bg-[#1A1A1A] transition-all duration-300 ease-out ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`mt-1.5 block h-[2px] w-6 rounded-full bg-[#1A1A1A] transition-all duration-300 ease-out ${
                    mobileOpen ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile overlay - slide from right */}
        <div
          className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
            mobileOpen
              ? "visible"
              : "invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-500 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMobile}
          />

          {/* Panel sliding from right */}
          <div
            className={`absolute inset-y-0 right-0 w-full max-w-md bg-gradient-to-b from-white via-white to-orange-50/30 shadow-2xl transition-transform duration-500 ease-out ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pt-24 pb-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.submenu ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-xl font-medium tracking-wide text-[#1A1A1A] transition-all duration-300 hover:bg-[#E8461C]/[0.04]"
                      >
                        {link.label}
                        <svg
                          className={`h-5 w-5 text-[#E8461C]/50 transition-transform duration-300 ${
                            mobileSubmenuOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-400 ease-out ${
                          mobileSubmenuOpen ? "max-h-72" : "max-h-0"
                        }`}
                      >
                        <div className="ml-3 flex flex-col gap-0.5 border-l-[3px] border-[#E8461C]/30 pl-5 pt-1 pb-3">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeMobile}
                              className="rounded-xl px-4 py-3 text-base font-medium text-[#1A1A1A]/60 transition-all duration-200 hover:bg-[#E8461C]/[0.04] hover:text-[#E8461C] hover:pl-5"
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
                      className="rounded-2xl px-5 py-4 text-xl font-medium tracking-wide text-[#1A1A1A] transition-all duration-300 hover:bg-[#E8461C]/[0.04] hover:text-[#E8461C]"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link
                  href="/recherche"
                  onClick={closeMobile}
                  className="flex items-center gap-3 rounded-2xl px-5 py-4 text-xl font-medium tracking-wide text-[#1A1A1A] transition-all duration-300 hover:bg-[#E8461C]/[0.04] hover:text-[#E8461C]"
                >
                  <svg
                    className="h-5 w-5 text-[#1A1A1A]/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                  Recherche
                </Link>
              </nav>

              {/* Mobile CTA at bottom */}
              <div className="mt-auto pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-bold tracking-wider text-white shadow-xl shadow-[#E8461C]/20 transition-all hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #E8461C 0%, #c93a15 100%)",
                  }}
                >
                  RÉSERVER MAINTENANT
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
