import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hurghada Habibi | Agence n°1 des activités à Hurghada",
  description:
    "Hurghada Habibi, votre agence francophone n°1 à Hurghada. Excursions, plongée, snorkeling, quad, dauphins et bien plus. Réservez vos activités en toute confiance.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
