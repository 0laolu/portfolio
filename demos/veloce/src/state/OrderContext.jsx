import { createContext, useContext, useMemo, useReducer } from "react";
import { PRESETS, DEFAULT_PRESET } from "../config/presets/index.js";
import { orderReducer, createInitialState } from "./orderReducer.js";
import { computeTotals } from "../lib/totals.js";
import { formatMoney } from "../lib/money.js";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, DEFAULT_PRESET, createInitialState);
  const preset = PRESETS[state.presetId];
  const totals = useMemo(() => computeTotals(preset, state), [preset, state]);
  const fmt = (kobo) => formatMoney(kobo, state.currency);

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
