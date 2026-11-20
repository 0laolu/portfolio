import { useEffect, useState } from "react";
import { Loader2, Lock, ShieldCheck, CreditCard } from "lucide-react";
import Sheet from "./Sheet.jsx";
import OrderSummary from "./OrderSummary.jsx";
import { useOrder } from "../../state/OrderContext.jsx";
import { formatMoney } from "../../lib/money.js";
import { paystackEnabled, payWithPaystack } from "../../lib/paystack.js";

const field =
  "w-full rounded-xl border border-line bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

export default function PaymentModal() {
  const { state, dispatch, preset, totals, fmt } = useOrder();
  const open = state.modal === "pay";
  const processing = state.paymentStatus === "processing";
  const [email, setEmail] = useState("demo.buyer@example.com");
  const [error, setError] = useState("");

  // Simulated processor: resolve after a short, believable delay.
  useEffect(() => {
    if (!processing || state.paidVia === "paystack") return;
    const t = setTimeout(() => dispatch({ type: "PAY_SUCCESS", via: "card" }), 1800);
    return () => clearTimeout(t);
  }, [processing, state.paidVia, dispatch]);

  const close = () => dispatch({ type: "CLOSE_MODAL" });

  const simulate = (e) => {
    e.preventDefault();
    dispatch({ type: "PAY_START" });
  };

  const openPaystack = async () => {
    setError("");
    try {
      await payWithPaystack({
        email,
        amountKobo: totals.total,
        orderRef: state.orderRef,
        metadata: {
          order_ref: state.orderRef,
          brand: preset.brand.name,
          item: preset.product.title,
          specs: totals.specs.map((s) => `${s.group}: ${s.label}`).join(", "),
          fulfillment: totals.fulfillmentLabel,
        },
        onSuccess: () => dispatch({ type: "PAY_SUCCESS", via: "paystack" }),
        onCancel: () => {},
      });
    } catch {
      setError("Couldn't load Paystack. Check your connection, or use the simulated card below.");
    }
  };

  const ngnCharge = state.currency !== "NGN" ? formatMoney(totals.total, "NGN") : null;

  return (
    <Sheet open={open} onClose={close} title="Secure Checkout" dismissible={!processing}>
      <OrderSummary compact />

      {ngnCharge && (
        <p className="mt-3 rounded-xl bg-surface px-3 py-2 text-xs text-muted">
          You'll be charged <b className="text-ink">{ngnCharge}</b> (≈ {fmt(totals.total)}). Your bank sets the final conversion.
        </p>
      )}

      <label className="mt-4 block text-xs font-medium text-muted">
        Email for receipt
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${field} mt-1.5`} />
      </label>

      {paystackEnabled && (
        <>
          <button
            onClick={openPaystack}
            disabled={processing || !email}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0BA4DB] py-3.5 text-sm font-bold text-white disabled:opacity-50"
          >
            <ShieldCheck size={17} /> Pay {formatMoney(totals.total, "NGN")} with Paystack
          </button>
          <p className="mt-1.5 text-center text-[10px] text-muted">Paystack test mode · no real money moves</p>
          <div className="my-4 flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted">
            <span className="h-px flex-1 bg-line" /> or simulated card <span className="h-px flex-1 bg-line" />
          </div>
        </>
      )}
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

      <form onSubmit={simulate} className={`space-y-2.5 ${paystackEnabled ? "" : "mt-4"}`}>
        <div className="relative">
          <input className={field} defaultValue="4084 0840 8408 4081" aria-label="Card number (test)" inputMode="numeric" />
          <CreditCard size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <input className={field} defaultValue="12 / 30" aria-label="Expiry (test)" />
          <input className={field} defaultValue="408" aria-label="CVV (test)" inputMode="numeric" />
        </div>
        <p className="text-[10px] text-muted">Demo checkout with a public test card. Nothing is charged.</p>
        <button
          type="submit"
          disabled={processing}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 text-sm font-bold text-on-accent disabled:opacity-70"
        >
          {processing ? (
            <>
              <Loader2 size={17} className="animate-spin" /> Processing…
            </>
          ) : (
            <>
              <Lock size={15} /> Pay {fmt(totals.total)}
            </>
          )}
        </button>
      </form>
    </Sheet>
  );
}
