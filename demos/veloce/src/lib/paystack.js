// Real Paystack popup in TEST mode. Only active when VITE_PAYSTACK_PUBLIC_KEY is set.
// Paystack charges in NGN here; USD/GBP buyers see the converted amount and are
// charged the Naira equivalent (how most Nigerian merchants run it).
const SRC = "https://js.paystack.co/v2/inline.js";

export const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "";
export const paystackEnabled = PAYSTACK_KEY.startsWith("pk_test_");

let loader;
function loadPaystack() {
  if (window.PaystackPop) return Promise.resolve(window.PaystackPop);
  loader ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SRC;
    s.onload = () => resolve(window.PaystackPop);
    s.onerror = () => {
      loader = undefined;
      reject(new Error("Could not load Paystack"));
    };
    document.head.appendChild(s);
  });
  return loader;
}

export async function payWithPaystack({ email, amountKobo, orderRef, metadata, onSuccess, onCancel }) {
  const PaystackPop = await loadPaystack();
  const popup = new PaystackPop();
  popup.newTransaction({
    key: PAYSTACK_KEY,
    email,
    amount: amountKobo,
    currency: "NGN",
    // Paystack references must be unique per attempt
    reference: `${orderRef}-${Date.now()}`,
    metadata,
    onSuccess,
    onCancel,
  });
}
