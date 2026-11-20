# Veloce Commerce: Social-to-Checkout Demo

A mobile-first storefront demo for social-first Nigerian brands. Buyers configure a product, see live NGN/USD/GBP pricing, pick Lagos or international delivery, then either pay (simulated or Paystack test mode) or send a pre-formatted order to WhatsApp.

## Run it

```bash
npm install
cp .env.example .env      # optional: add Paystack test key + your WhatsApp number
npm run dev               # open the URL it prints (ends in /demos/veloce/)
npm test                  # money, totals, reducer and WhatsApp builder tests
```

## Where things live

| What | File |
|---|---|
| Everything niche-specific (brand, theme, prices, variants, delivery, copy) | `src/config/presets/*.js` |
| Demo exchange rates | `src/config/currencies.js` |
| All order state | `src/state/orderReducer.js` |
| Price maths (derived, never stored) | `src/lib/totals.js` |
| WhatsApp message + link | `src/lib/whatsapp.js` |
| Paystack test-mode popup | `src/lib/paystack.js` |

**Money is always integer kobo** (`285000_00` = ₦285,000). Convert only for display.

## Adding a new niche

Copy `src/config/presets/hair.js`, change the values, and register it in `src/config/presets/index.js`. No component changes are needed. Icons are referenced by name; add new ones to `src/components/Icon.jsx`.

## Product photos

Put images in `public/img/<preset>/` and add `src: "img/hair/1.webp"` to each image in the preset. Use portrait (4:5) WebP under 150KB, from Unsplash/Pexels or the client's own shoots (with permission). Without `src`, a gradient placeholder shows.

## Paystack test mode

1. Create a free Paystack account and switch the dashboard to **Test Mode**.
2. Settings → API Keys → copy the **test public key** (`pk_test_...`) into `.env` as `VITE_PAYSTACK_PUBLIC_KEY`.
3. Restart `npm run dev`. The checkout now shows "Pay with Paystack" and opens the real popup. Use Paystack's test cards (e.g. `4084 0840 8408 4081`, any future expiry, CVV `408`).

Never put a secret key (`sk_...`) in this app. For a real client, payments must be verified on a server using the secret key and the transaction reference.

## Deploy inside the portfolio repo (0laoludev.netlify.app/demos/veloce)

`vite.config.js` already sets `base: "/demos/veloce/"`.

1. Put this project in your portfolio repo as `demos/veloce/`.
2. Build it into the portfolio's `public` folder, so the portfolio build copies it to `dist/demos/veloce/`:
   ```bash
   cd demos/veloce && npm install && npx vite build --outDir ../../public/demos/veloce --emptyOutDir
   ```
3. Add a script to the portfolio's `package.json` so Netlify does it automatically:
   ```json
   "build": "npm --prefix demos/veloce install && npm --prefix demos/veloce run build -- --outDir ../../public/demos/veloce --emptyOutDir && vite build"
   ```
4. Set the env vars (`VITE_PAYSTACK_PUBLIC_KEY`, `VITE_DEMO_WHATSAPP`) in Netlify → Site settings → Environment variables.

Netlify serves real files before applying your SPA catch-all redirect, so `/demos/veloce/` loads the demo, not the portfolio.
