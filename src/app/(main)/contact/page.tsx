import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getWhatsAppReservationsUrl, getWhatsAppModificationsUrl, getWhatsAppUrl, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_HOURS } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact - Hurghada Habibi | Contactez notre equipe",
  description:
    "Contactez Hurghada Habibi par WhatsApp, email ou formulaire. Notre equipe francophone repond a toutes vos questions sur vos excursions en Egypte.",
};

const contactCards = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp - Réservations",
    value: "+20 155 610 1611",
    href: getWhatsAppReservationsUrl("Bonjour, je souhaite réserver une activité"),
    color: "bg-green-500",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp - Modifications",
    value: "+20 155 610 1611",
    href: getWhatsAppModificationsUrl("Bonjour, je souhaite modifier ma réservation"),
    color: "bg-green-500",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    color: "bg-[#4AABE0]",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Adresse",
    value: CONTACT_ADDRESS,
    href: "https://maps.google.com/?q=Esplanada+Mall+Hurghada+Egypt",
    color: "bg-[#E8461C]",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Horaires",
    value: CONTACT_HOURS,
    href: null,
    color: "bg-gray-700",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#4AABE0] blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#E8461C] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4AABE0]">
              Nous sommes la pour vous
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Contactez-nous
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Une question, une reservation ou un besoin particulier ? Notre
              equipe francophone vous repond 7 jours sur 7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h2 className="mb-1 text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                  Envoyez-nous un message
                </h2>
                <p className="mb-8 text-sm text-gray-500">
                  Remplissez le formulaire et nous vous repondrons rapidement.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Right: Info cards */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {contactCards.map((card) => {
                  const Wrapper = card.href ? "a" : "div";
                  const wrapperProps = card.href
                    ? {
                        href: card.href,
                        target: card.href.startsWith("http") ? "_blank" as const : undefined,
                        rel: card.href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {};
                  return (
                    <Wrapper
                      key={card.label}
                      {...wrapperProps}
                      className={`flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-200 sm:p-6 ${
                        card.href ? "hover:-translate-y-0.5 hover:shadow-md cursor-pointer" : ""
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white ${card.color}`}
                      >
                        {card.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          {card.label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-[#1A1A1A] sm:text-base break-all">
                          {card.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-sm">
                <h3 className="text-lg font-bold">Reponse rapide via WhatsApp</h3>
                <p className="mt-2 text-sm text-white/90">
                  Pour une reponse immediate, contactez-nous directement sur
                  WhatsApp. Nous repondons generalement en moins de 30 minutes.
                </p>
                <a
                  href={getWhatsAppUrl("Bonjour, je souhaite réserver une activité")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-green-600 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 sm:w-auto"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
              Ou nous trouver
            </h2>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Notre bureau est situe au coeur de Hurghada
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl">
            <div className="flex aspect-[16/9] max-h-[400px] w-full items-center justify-center bg-gradient-to-br from-[#4AABE0]/10 via-[#4AABE0]/5 to-[#E8461C]/10">
              <div className="text-center px-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8461C]/10">
                  <svg className="h-8 w-8 text-[#E8461C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#1A1A1A]">Esplanada Mall</p>
                <p className="mt-1 text-sm text-gray-500">Hurghada, Mer Rouge, Egypte</p>
                <a
                  href="https://maps.google.com/?q=Esplanada+Mall+Hurghada+Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4AABE0] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#3a9bd0] hover:shadow-md"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
