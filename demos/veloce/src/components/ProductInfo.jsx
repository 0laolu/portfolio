import { motion, AnimatePresence } from "framer-motion";
import { Star, Globe } from "lucide-react";
import { useOrder } from "../state/OrderContext.jsx";
import { RATES_UPDATED } from "../config/currencies.js";

export default function ProductInfo() {
  const { preset, state, totals, fmt } = useOrder();
  const { trust } = preset;

  return (
    <section className="px-4 pt-4">
      {/* Trust strip */}
      <div className="mb-3 flex items-center gap-2 text-[11px] text-muted">
        <span className="flex items-center gap-1 font-semibold text-ink">
          <Star size={12} className="fill-accent text-accent" /> {trust.rating}
        </span>
        <span>({trust.reviews})</span>
        <span className="h-3 w-px bg-line" />
        <Globe size={12} />
        <span className="truncate">{trust.promise}</span>
      </div>

      <h1 className="font-display text-[28px] leading-[1.05]">{preset.product.title}</h1>
      <p className="mt-1 text-xs text-muted">{preset.product.tagline}</p>

      <div className="mt-3 flex items-end justify-between">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.p
            key={`${totals.subtotal}-${state.currency}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="text-2xl font-bold tracking-tight"
          >
            {fmt(totals.subtotal)}
          </motion.p>
        </AnimatePresence>
        {state.currency !== "NGN" && (
          <p className="text-[10px] text-muted">Demo rate · {RATES_UPDATED}</p>
        )}
      </div>
    </section>
  );
}
