"use client";

import { useState, type FormEvent } from "react";

const subjects = [
  { value: "", label: "Choisir un sujet" },
  { value: "reservation", label: "Reservation" },
  { value: "information", label: "Information" },
  { value: "modification", label: "Modification" },
  { value: "autre", label: "Autre" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Le nom est requis";
    if (!form.email.trim()) {
      errs.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Format d'email invalide";
    }
    if (!form.subject) errs.subject = "Veuillez choisir un sujet";
    if (!form.message.trim()) errs.message = "Le message est requis";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-8 text-center sm:p-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800">Message envoye !</h3>
        <p className="mt-2 text-sm text-green-700">
          Merci pour votre message. Notre equipe vous repondra dans les plus
          brefs delais.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="mt-6 rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Nom */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Nom complet <span className="text-[#E8461C]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20 ${
            errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-gray-200"
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Email <span className="text-[#E8461C]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20 ${
            errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-gray-200"
          }`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Telephone */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Telephone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+33 6 12 34 56 78"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20"
        />
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Sujet <span className="text-[#E8461C]">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20 ${
            !form.subject ? "text-gray-400" : ""
          } ${errors.subject ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-gray-200"}`}
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value} disabled={!s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
          Message <span className="text-[#E8461C]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Votre message..."
          className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 outline-none transition-colors focus:border-[#4AABE0] focus:ring-2 focus:ring-[#4AABE0]/20 ${
            errors.message ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-gray-200"
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-[#E8461C] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#d13d16] hover:shadow-lg active:scale-[0.98] sm:w-auto sm:rounded-full sm:px-10"
      >
        Envoyer le message
      </button>
    </form>
  );
}
