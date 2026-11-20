import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Loader2 } from "lucide-react";
import { toPng } from "html-to-image";
import Sheet from "./Sheet.jsx";
import OrderSummary from "./OrderSummary.jsx";
import { useOrder } from "../../state/OrderContext.jsx";

export default function ReceiptModal() {
  const { state, dispatch, preset, totals } = useOrder();
  const cardRef = useRef(null);
  const [saving, setSaving] = useState(false);
  const open = state.modal === "receipt";
  const date = new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });

  const download = async () => {
    setSaving(true);
    try {
      const bg = getComputedStyle(cardRef.current).getPropertyValue("--bg") || "#fff";
      const url = await toPng(cardRef.current, { pixelRatio: 2, backgroundColor: bg.trim() });
      const a = document.createElement("a");
      a.href = url;
      a.download = `${state.orderRef}-receipt.png`;
      a.click();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Sheet open={open} onClose={() => dispatch({ type: "CLOSE_MODAL" })} title={`${preset.copy.orderNoun} confirmed`}>
      <div ref={cardRef} className="bg-app pb-2">
        <div className="flex flex-col items-center pb-5 pt-2 text-center">
          <motion.div initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <CheckCircle2 size={56} strokeWidth={1.5} className="text-accent" />
          </motion.div>
          <p className="mt-3 font-display text-2xl">Payment successful</p>
          <p className="mt-1 text-xs text-muted">{date}</p>
          <p className="mt-3 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-sm font-semibold tracking-wider">
            #{state.orderRef}
          </p>
        </div>
        <OrderSummary />
        <div className="mt-3 rounded-2xl border border-line bg-surface p-4 text-xs text-muted">
          <p><b className="text-ink">{preset.fulfillment.title}:</b> {totals.fulfillmentLabel}</p>
          <p className="mt-1"><b className="text-ink">Paid via:</b> {state.paidVia === "paystack" ? "Paystack (test mode)" : "Card (simulated)"}</p>
          <p className="mt-1">{preset.brand.name} has received your {preset.copy.orderNoun.toLowerCase()} and will send updates on WhatsApp.</p>
        </div>
      </div>

      <button
        onClick={download}
        disabled={saving}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 text-sm font-bold text-on-accent"
      >
        {saving ? <Loader2 size={17} className="animate-spin" /> : <Download size={17} />} Save receipt
      </button>
    </Sheet>
  );
}
