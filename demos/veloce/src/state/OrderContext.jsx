import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { PRESETS, DEFAULT_PRESET } from "../config/presets/index.js";
import { orderReducer, createInitialState } from "./orderReducer.js";
import { computeTotals } from "../lib/totals.js";
import { formatMoney } from "../lib/money.js";

const OrderContext = createContext(null);

// Read ?preset=jewelry from the URL so each niche has its own shareable link
function presetFromUrl() {
  const id = new URLSearchParams(window.location.search).get("preset");
  return PRESETS[id] ?? DEFAULT_PRESET;
}

export function OrderProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, undefined, () => createInitialState(presetFromUrl()));
  const preset = PRESETS[state.presetId];
  const totals = useMemo(() => computeTotals(preset, state), [preset, state]);
  const fmt = (kobo) => formatMoney(kobo, state.currency);

  // Keep the URL in sync when you switch presets on desktop
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("preset", state.presetId);
    window.history.replaceState(null, "", url);
  }, [state.presetId]);

  return (
    <OrderContext.Provider value={{ state, dispatch, preset, totals, fmt }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside <OrderProvider>");
  return ctx;
}