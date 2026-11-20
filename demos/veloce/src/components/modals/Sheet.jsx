import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Bottom sheet that lives INSIDE the phone frame (absolute, not fixed).
export default function Sheet({ open, onClose, title, children, dismissible = true }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && dismissible && onClose();
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, dismissible]);

  return (
    <AnimatePresence>
      {open && (
        <div className="absolute inset-0 z-40 flex items-end">
          <motion.div
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dismissible && onClose()}
          />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            className="no-scrollbar relative max-h-[92%] w-full overflow-y-auto rounded-t-[28px] border-t border-line bg-app text-ink outline-none"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between bg-app/95 px-5 pb-3 pt-3 backdrop-blur">
              <span className="absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-line" />
              <h2 className="pt-2 text-base font-semibold">{title}</h2>
              {dismissible && (
                <button onClick={onClose} aria-label="Close" className="mt-2 grid h-8 w-8 place-items-center rounded-full bg-surface text-muted">
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
