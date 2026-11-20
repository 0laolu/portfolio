import { useState } from "react";
import { ChevronDown, PenLine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useOrder } from "../state/OrderContext.jsx";
import { formatAddOn } from "../lib/money.js";

function PillGroup({ group }) {
  const { state, dispatch } = useOrder();
  const selectedId = state.selections[group.id];

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{group.label}</p>
      <div className="flex flex-wrap gap-2">
        {group.options.map((o) => {
          const active = o.id === selectedId;
          return (
            <button
              key={o.id}
              aria-pressed={active}
              onClick={() => dispatch({ type: "SELECT", group: group.id, option: o.id })}
              className={`flex flex-col items-start rounded-2xl border px-3.5 py-2 text-left transition-all duration-150 active:scale-[0.97] ${
                active ? "border-accent bg-accent text-on-accent" : "border-line bg-surface text-ink hover:border-muted"
              }`}
            >
              <span className="text-sm font-semibold">{o.label}</span>
              <span className={`text-[10px] ${active ? "opacity-80" : "text-muted"}`}>{formatAddOn(o.add, state.currency)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Configurator() {
  const { preset, state, dispatch } = useOrder();
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <section className="space-y-5 px-4 pt-6">
      {preset.variantGroups.map((g) => (
        <PillGroup key={g.id} group={g} />
      ))}

      <div className="rounded-2xl border border-line bg-surface">
        <button
          onClick={() => setNotesOpen((v) => !v)}
          aria-expanded={notesOpen}
          className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium"
        >
          <span className="flex items-center gap-2">
            <PenLine size={15} className="text-accent" />
            {preset.notesLabel}
            {state.notes && !notesOpen && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
          </span>
          <ChevronDown size={16} className={`text-muted transition-transform ${notesOpen ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence initial={false}>
          {notesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <textarea
                value={state.notes}
                onChange={(e) => dispatch({ type: "SET_NOTES", notes: e.target.value })}
                placeholder={preset.notesPlaceholder}
                maxLength={280}
                rows={3}
                className="mx-4 mb-4 block w-[calc(100%-2rem)] resize-none rounded-xl border border-line bg-app p-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
