import { motion } from "framer-motion";
import { PRESET_LIST } from "../config/presets/index.js";
import { useOrder } from "../state/OrderContext.jsx";
import Icon from "./Icon.jsx";

// Desktop-only: lets you morph the storefront per niche during a Loom pitch.
export default function DemoControlBar() {
  const { state, dispatch } = useOrder();

  return (
    <div className="hidden md:flex flex-col items-center gap-3">
      <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        Veloce Commerce · Niche presets
      </p>
      <div className="flex gap-1 rounded-full border border-neutral-800 bg-neutral-900/80 p-1 backdrop-blur">
        {PRESET_LIST.map((p) => {
          const active = state.presetId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => !active && dispatch({ type: "SET_PRESET", preset: p })}
              aria-pressed={active}
              className="relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {active && (
                <motion.span
                  layoutId="preset-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative flex items-center gap-2 ${active ? "text-neutral-900" : ""}`}>
                <Icon name={p.icon} size={15} />
                {p.presetLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
