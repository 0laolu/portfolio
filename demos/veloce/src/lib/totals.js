// Totals are DERIVED from preset + state, never stored, so they can't drift.
export function computeTotals(preset, state) {
  const specs = preset.variantGroups.map((group) => {
    const option = group.options.find((o) => o.id === state.selections[group.id]);
    return { group: group.label, label: option.label, add: option.add };
  });

  const mode = preset.fulfillment.modes.find((m) => m.id === state.fulfillment.mode);
  const choice = mode.choices.find((c) => c.id === state.fulfillment.choice);

  const base = preset.product.basePrice;
  const addOns = specs.reduce((sum, s) => sum + s.add, 0);
  const subtotal = base + addOns;
  const shipping = choice.fee;

  return {
    base,
    specs,
    addOns,
    subtotal,
    shipping,
    total: subtotal + shipping,
    fulfillmentLabel: `${mode.label} — ${choice.label}`,
    fulfillmentEta: choice.eta ?? mode.sub,
  };
}
