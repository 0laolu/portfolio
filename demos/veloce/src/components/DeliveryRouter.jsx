import { motion, AnimatePresence } from "framer-motion";
import { useOrder } from "../state/OrderContext.jsx";
import Icon from "./Icon.jsx";

export default function DeliveryRouter() {
  const { preset, state, dispatch, fmt } = useOrder();
  const { fulfillment } = preset;

  return (
    <section className="px-4 pt-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{fulfillment.title}</p>
      <div role="radiogroup" aria-label={fulfillment.title} className="space-y-2.5">
        {fulfillment.modes.map((mode) => {
          const active = state.fulfillment.mode === mode.id;
          const fees = mode.choices.map((c) => c.fee);
          const minFee = Math.min(...fees);
          return (
            <div
              key={mode.id}
              className={`rounded-2xl border transition-colors ${active ? "border-accent bg-surface" : "border-line bg-surface/60"}`}
            >
              <button
                role="radio"
                aria-checked={active}
                onClick={() => !active && dispatch({ type: "SET_MODE", mode: mode.id, choice: mode.choices[0].id })}
                className="flex w-full items-center gap-3 px-4 py-3 text-left"
              >
                <span className={`grid h-9 w-9 place-items-center rounded-full ${active ? "bg-accent text-on-accent" : "bg-app text-muted"}`}>
                  <Icon name={mode.icon} size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{mode.label}</span>
                  <span className="block text-[11px] text-muted">{mode.sub}</span>
                </span>
                <span className="text-xs font-semibold">
                  {minFee === 0 ? (fees.every((f) => f === 0) ? "Free" : "From free") : `from ${fmt(minFee)}`}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 text-[10px] uppercase tracking-wider text-muted">{mode.choiceLabel}</p>
                    <div className="flex flex-wrap gap-2 px-4 pb-4 pt-2">
                      {mode.choices.map((c) => {
                        const on = state.fulfillment.choice === c.id;
                        return (
                          <button
                            key={c.id}
                            aria-pressed={on}
                            onClick={() => dispatch({ type: "SET_CHOICE", choice: c.id })}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                              on ? "border-accent bg-accent text-on-accent" : "border-line bg-app text-ink"
                            }`}
                          >
                            {c.label} · {c.fee === 0 ? "Free" : fmt(c.fee)}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
