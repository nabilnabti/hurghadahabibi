"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getWhatsAppUrl } from "@/data/contact";

const WHATSAPP_URL = getWhatsAppUrl("Yo ! Je veux réserver une expérience à Hurghada 🎉");

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Expériences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export default function V2Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(255,215,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl tracking-wider text-[#FFD700] group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] transition-all duration-300">
            HURGHADA HABIBI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 text-sm uppercase tracking-widest font-medium hover:text-[#FFD700] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-[#FFD700] text-black text-sm font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_24px_rgba(255,215,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            RÉSERVER
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-[family-name:var(--font-bebas)] text-4xl text-white tracking-wider hover:text-[#FFD700] transition-all duration-300"
            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-10 py-4 bg-[#FFD700] text-black font-bold text-lg uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
        >
          RÉSERVER
        </a>
      </div>
    </header>
  );
}
