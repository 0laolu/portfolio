import { RATES, CURRENCIES } from "../config/currencies.js";

// All prices in the app are stored as integer KOBO (₦1 = 100 kobo)
// to avoid floating-point errors. Conversion happens only for display.

export function convert(kobo, currency) {
  const naira = kobo / 100;
  return currency === "NGN" ? naira : naira / RATES[currency];
}

const formatters = {};
function getFormatter(currency) {
  if (!formatters[currency]) {
    const { locale } = CURRENCIES.find((c) => c.code === currency);
    formatters[currency] = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  }
  return formatters[currency];
}

// Whole units only (no kobo / pennies / cents) — cleaner for luxury pricing.
export function formatMoney(kobo, currency) {
  return getFormatter(currency).format(Math.round(convert(kobo, currency)));
}

export function formatAddOn(kobo, currency) {
  return kobo === 0 ? "Included" : `+${formatMoney(kobo, currency)}`;
}
