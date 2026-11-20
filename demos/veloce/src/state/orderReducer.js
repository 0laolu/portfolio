import { generateOrderRef } from "../lib/ref.js";

export function createInitialState(preset, currency = "NGN") {
  const firstMode = preset.fulfillment.modes[0];
  return {
    presetId: preset.id,
    currency,
    selections: Object.fromEntries(preset.variantGroups.map((g) => [g.id, g.options[0].id])),
    notes: "",
    fulfillment: { mode: firstMode.id, choice: firstMode.choices[0].id },
    modal: null, // "pay" | "receipt" | "whatsapp" | null
    orderRef: generateOrderRef(),
    paymentStatus: "idle", // "idle" | "processing" | "success"
    paidVia: null,
  };
}

export function orderReducer(state, action) {
  switch (action.type) {
    case "SET_PRESET":
      // Full reset on niche switch, but keep the buyer's currency.
      return createInitialState(action.preset, state.currency);
    case "SET_CURRENCY":
      return { ...state, currency: action.currency };
    case "SELECT":
      return { ...state, selections: { ...state.selections, [action.group]: action.option } };
    case "SET_NOTES":
      return { ...state, notes: action.notes };
    case "SET_MODE":
      return { ...state, fulfillment: { mode: action.mode, choice: action.choice } };
    case "SET_CHOICE":
      return { ...state, fulfillment: { ...state.fulfillment, choice: action.choice } };
    case "OPEN_MODAL":
      return { ...state, modal: action.modal };
    case "CLOSE_MODAL":
      // Closing after a completed payment starts a fresh order.
      if (state.paymentStatus === "success") {
        return { ...state, modal: null, paymentStatus: "idle", paidVia: null, orderRef: generateOrderRef() };
      }
      return { ...state, modal: null, paymentStatus: state.paymentStatus === "processing" ? "idle" : state.paymentStatus };
    case "PAY_START":
      return { ...state, paymentStatus: "processing" };
    case "PAY_CANCEL":
      return { ...state, paymentStatus: "idle" };
    case "PAY_SUCCESS":
      return { ...state, paymentStatus: "success", paidVia: action.via, modal: "receipt" };
    default:
      return state;
  }
}
