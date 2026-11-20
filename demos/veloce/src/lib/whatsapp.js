import { formatMoney } from "./money.js";

export const DEMO_WHATSAPP = import.meta.env?.VITE_DEMO_WHATSAPP || "2348000000000";

export function buildWhatsAppMessage({ preset, state, totals }) {
  const fmt = (k) => formatMoney(k, state.currency);
  const ngnNote = state.currency !== "NGN" ? ` (${formatMoney(totals.total, "NGN")})` : "";
  const specs = totals.specs.map((s) => `• ${s.group}: ${s.label}`).join("\n");

  return [
    preset.copy.waGreeting,
    `🛍️ *${preset.copy.orderNoun} ${"#" + state.orderRef}*`,
    `*Item:* ${preset.product.title}`,
    `*Selected specs:*\n${specs}`,
    state.notes.trim() && `*${preset.notesLabel}:* ${state.notes.trim()}`,
    `*${preset.fulfillment.title}:* ${totals.fulfillmentLabel}`,
    `*Subtotal:* ${fmt(totals.subtotal)}\n*${preset.fulfillment.title} fee:* ${fmt(totals.shipping)}\n*Total:* ${fmt(totals.total)}${ngnNote}`,
    `Sent via Veloce Commerce`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

export function buildWhatsAppLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
