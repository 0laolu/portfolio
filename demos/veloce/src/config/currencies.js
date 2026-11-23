// Demo exchange rates: Naira per 1 unit of currency.
// Based on the official NFEM market in mid-November 2026
// (USD ≈ ₦1,358, GBP ≈ ₦1,808), rounded. Street rates run higher.
// FIXED demo values, labelled as such in the UI. For a real client,
// fetch daily or let the brand set its own (most add a margin).
export const RATES = { NGN: 1, USD: 1360, GBP: 1810 };
export const RATES_UPDATED = "21 Nov 2026";

export const CURRENCIES = [
  { code: "NGN", label: "₦ NGN", locale: "en-NG" },
  { code: "USD", label: "$ USD", locale: "en-US" },
  { code: "GBP", label: "£ GBP", locale: "en-GB" },
];
