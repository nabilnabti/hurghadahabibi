// Numéro WhatsApp du client — à remplacer quand il le fournira
export const WHATSAPP_NUMBER = "";
export const WHATSAPP_RESERVATIONS = "";
export const WHATSAPP_MODIFICATIONS = "";

export function getWhatsAppUrl(message: string): string {
  if (!WHATSAPP_NUMBER) return "#";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppReservationsUrl(message: string): string {
  if (!WHATSAPP_RESERVATIONS) return "#";
  return `https://wa.me/${WHATSAPP_RESERVATIONS}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppModificationsUrl(message: string): string {
  if (!WHATSAPP_MODIFICATIONS) return "#";
  return `https://wa.me/${WHATSAPP_MODIFICATIONS}?text=${encodeURIComponent(message)}`;
}

export const CONTACT_EMAIL = "contact@hurghadahabibi.com";
export const CONTACT_ADDRESS = "Esplanada Mall, Hurghada, Égypte";
export const CONTACT_HOURS = "Lun-Dim 09:00 - 17:00";
