import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { PRESETS, DEFAULT_PRESET, resolvePreset } from "../config/presets/index.js";
import { orderReducer, createInitialState } from "./orderReducer.js";
import { computeTotals } from "../lib/totals.js";
import { formatMoney } from "../lib/money.js";

const OrderContext = createContext(null);

// Shareable links: ?preset=apparel&collection=women
function initFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const preset = PRESETS[params.get("preset")] ?? DEFAULT_PRESET;
  return createInitialState(preset, "NGN", params.get("collection") ?? undefined);
}

export function OrderProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, undefined, initFromUrl);
  const rawPreset = PRESETS[state.presetId];
  const preset = useMemo(() => resolvePreset(rawPreset, state.collectionId), [rawPreset, state.collectionId]);
  const totals = useMemo(() => computeTotals(preset, state), [preset, state]);
  const fmt = (kobo) => formatMoney(kobo, state.currency);

  // Keep the URL in sync so the current view can be copied and shared
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("preset", state.presetId);
    if (state.collectionId) url.searchParams.set("collection", state.collectionId);
    else url.searchParams.delete("collection");
    window.history.replaceState(null, "", url);
  }, [state.presetId, state.collectionId]);

  return (
    <OrderContext.Provider value={{ state, dispatch, preset, rawPreset, totals, fmt }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside <OrderProvider>");
  return ctx;
}
