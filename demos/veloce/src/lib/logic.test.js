import { describe, it, expect } from "vitest";
import hair from "../config/presets/hair.js";
import { PRESET_LIST } from "../config/presets/index.js";
import { createInitialState, orderReducer } from "../state/orderReducer.js";
import { computeTotals } from "./totals.js";
import { formatMoney, convert } from "./money.js";
import { buildWhatsAppMessage, buildWhatsAppLink } from "./whatsapp.js";

describe("money", () => {
  it("formats kobo as whole Naira", () => {
    expect(formatMoney(285000_00, "NGN")).toContain("285,000");
  });
  it("converts NGN to GBP with demo rate", () => {
    expect(convert(2050_00, "GBP")).toBe(1);
  });
});

describe("totals", () => {
  it("adds variant add-ons and delivery", () => {
    let s = createInitialState(hair);
    s = orderReducer(s, { type: "SELECT", group: "length", option: "26" });
    s = orderReducer(s, { type: "SET_MODE", mode: "intl", choice: "uk" });
    const t = computeTotals(hair, s);
    expect(t.total).toBe(285000_00 + 135000_00 + 0 + 65000_00);
  });

  it("every preset produces a valid default total", () => {
    for (const p of PRESET_LIST) {
      const t = computeTotals(p, createInitialState(p));
      expect(Number.isInteger(t.total)).toBe(true);
      expect(t.total).toBeGreaterThan(0);
    }
  });

  it("keeps currency when switching preset", () => {
    let s = orderReducer(createInitialState(hair), { type: "SET_CURRENCY", currency: "GBP" });
    s = orderReducer(s, { type: "SET_PRESET", preset: PRESET_LIST[1] });
    expect(s.currency).toBe("GBP");
    expect(s.presetId).toBe("jewelry");
  });
});

describe("whatsapp", () => {
  it("builds a message with ref, specs and total, and encodes it", () => {
    const s = { ...createInitialState(hair), notes: "middle part & bleached knots" };
    const msg = buildWhatsAppMessage({ preset: hair, state: s, totals: computeTotals(hair, s) });
    expect(msg).toContain(`#${s.orderRef}`);
    expect(msg).toContain('Length: 18"');
    expect(msg).toContain("middle part & bleached knots");
    const link = buildWhatsAppLink("2348000000000", msg);
    expect(link).toMatch(/^https:\/\/wa\.me\/2348000000000\?text=/);
    expect(link).not.toContain("&b"); // ampersand must be encoded
  });
});
