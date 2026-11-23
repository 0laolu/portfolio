import { describe, it, expect } from "vitest";
import hair from "../config/presets/hair.js";
import { PRESET_LIST, resolvePreset } from "../config/presets/index.js";
import { RATES } from "../config/currencies.js";
import { createInitialState, orderReducer } from "../state/orderReducer.js";
import { computeTotals } from "./totals.js";
import { formatMoney, convert } from "./money.js";
import { buildWhatsAppMessage, buildWhatsAppLink } from "./whatsapp.js";

describe("money", () => {
  it("formats kobo as whole Naira", () => {
    expect(formatMoney(285000_00, "NGN")).toContain("285,000");
  });
  it("converts NGN to GBP with demo rate", () => {
    expect(convert(RATES.GBP * 100, "GBP")).toBe(1);
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
      const s = createInitialState(p);
      const t = computeTotals(resolvePreset(p, s.collectionId), s);
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

describe("collections (apparel)", () => {
  it("defaults to the first collection and switches cleanly", async () => {
    const { default: apparel } = await import("../config/presets/apparel.js");
    const { resolvePreset } = await import("../config/presets/index.js");
    let s = createInitialState(apparel);
    expect(s.collectionId).toBe("men");
    expect(computeTotals(resolvePreset(apparel, s.collectionId), s).total).toBe(95000_00);

    s = orderReducer(s, { type: "SET_MODE", mode: "intl", choice: "uk" });
    s = orderReducer(s, { type: "SET_COLLECTION", preset: apparel, collectionId: "women" });
    expect(s.collectionId).toBe("women");
    expect(s.selections).toEqual({ style: "adire", size: "8-10", finish: "classic" });
    expect(s.fulfillment.choice).toBe("uk"); // delivery choice survives the switch

    s = orderReducer(s, { type: "SELECT", group: "style", option: "irobuba" });
    expect(computeTotals(resolvePreset(apparel, "women"), s).total).toBe(420000_00 + 70000_00);
  });

  it("presets without collections are unchanged", async () => {
    const { resolvePreset } = await import("../config/presets/index.js");
    expect(resolvePreset(hair, "anything")).toBe(hair);
  });
});
