import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, MessageCircle } from "lucide-react";
import { useOrder } from "../state/OrderContext.jsx";

export default function BottomBar() {
  const { state, dispatch, totals, fmt } = useOrder();

  return (
    <div className="sticky bottom-0 z-30 border-t border-line bg-app/90 px-4 pt-3 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] md:pb-5">
      <div className="mb-2.5 flex items-baseline justify-between">
        <span className="text-xs text-muted">Total incl. {totals.fulfillmentLabel.split(" — ")[0]}</span>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={`${totals.total}-${state.currency}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="text-lg font-bold"
          >
            {fmt(totals.total)}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <button
          onClick={() => dispatch({ type: "OPEN_MODAL", modal: "pay" })}
          className="flex items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 text-sm font-bold text-on-accent transition-transform active:scale-[0.98]"
        >
          <CreditCard size={17} /> Pay Now
        </button>
        <button
          onClick={() => dispatch({ type: "OPEN_MODAL", modal: "whatsapp" })}
          className="flex items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3.5 text-sm font-semibold transition-transform active:scale-[0.98]"
        >
          <MessageCircle size={17} className="text-[#25D366]" /> WhatsApp
        </button>
      </div>
    </div>
  );
}
