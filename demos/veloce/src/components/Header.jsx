import { motion } from "framer-motion";
import { CURRENCIES } from "../config/currencies.js";
import { useOrder } from "../state/OrderContext.jsx";

export default function Header() {
  const { preset, state, dispatch } = useOrder();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-line bg-app/85 px-4 pb-3 pt-3 backdrop-blur-md md:pt-10">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent font-display text-base text-on-accent">
          {preset.brand.initials}
        </div>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-sm font-semibold">{preset.brand.name}</p>
          <p className="truncate text-[11px] text-muted">{preset.brand.handle} · Demo brand</p>
        </div>
      </div>

      <div role="radiogroup" aria-label="Currency" className="flex shrink-0 rounded-full border border-line bg-surface p-0.5">
        {CURRENCIES.map((c) => {
          const active = state.currency === c.code;
          return (
            <button
              key={c.code}
              role="radio"
              aria-checked={active}
              onClick={() => dispatch({ type: "SET_CURRENCY", currency: c.code })}
              className="relative rounded-full px-2.5 py-1 text-[11px] font-semibold"
            >
              {active && (
                <motion.span
                  layoutId="currency-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className={`relative ${active ? "text-on-accent" : "text-muted"}`}>{c.code}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
