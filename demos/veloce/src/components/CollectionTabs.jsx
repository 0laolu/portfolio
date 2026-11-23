import { motion } from "framer-motion";
import { useOrder } from "../state/OrderContext.jsx";

// Floating Menswear / Womenswear switch over the carousel.
// Renders nothing for presets without collections.
export default function CollectionTabs() {
  const { rawPreset, state, dispatch } = useOrder();
  if (!rawPreset.collections?.length) return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 top-7 z-10 flex justify-center">
      <div role="tablist" aria-label="Collection" className="pointer-events-auto flex rounded-full bg-black/45 p-1 backdrop-blur-md">
        {rawPreset.collections.map((c) => {
          const active = state.collectionId === c.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={active}
              onClick={() => !active && dispatch({ type: "SET_COLLECTION", preset: rawPreset, collectionId: c.id })}
              className="relative rounded-full px-4 py-1.5 text-xs font-semibold"
            >
              {active && (
                <motion.span
                  layoutId="collection-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 450, damping: 34 }}
                />
              )}
              <span className={`relative ${active ? "text-neutral-900" : "text-white/85"}`}>{c.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
