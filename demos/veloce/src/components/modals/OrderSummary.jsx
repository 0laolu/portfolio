import { useOrder } from "../../state/OrderContext.jsx";

export default function OrderSummary({ compact = false }) {
  const { preset, state, totals, fmt } = useOrder();
  const row = "flex justify-between gap-4 text-sm";

  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <p className="font-semibold">{preset.product.title}</p>
      {!compact && <p className="mb-3 text-xs text-muted">{preset.brand.name}</p>}
      <div className="mt-2 space-y-1.5">
        <div className={row}>
          <span className="text-muted">Base price</span>
          <span>{fmt(totals.base)}</span>
        </div>
        {totals.specs.map((s) => (
          <div key={s.group} className={row}>
            <span className="text-muted">{s.group}: {s.label}</span>
            <span>{s.add ? `+${fmt(s.add)}` : "—"}</span>
          </div>
        ))}
        <div className={row}>
          <span className="text-muted">{totals.fulfillmentLabel}</span>
          <span>{totals.shipping ? fmt(totals.shipping) : "Free"}</span>
        </div>
        {state.notes.trim() && !compact && (
          <p className="pt-1 text-xs text-muted">Notes: “{state.notes.trim()}”</p>
        )}
        <div className="mt-2 flex justify-between border-t border-line pt-2.5 font-bold">
          <span>Total</span>
          <span>{fmt(totals.total)}</span>
        </div>
      </div>
    </div>
  );
}
