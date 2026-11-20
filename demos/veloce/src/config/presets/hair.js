// All money values are in KOBO (₦1 = 100 kobo). 285000_00 = ₦285,000.
// Images: drop files into public/img/hair/ and set `src: "img/hair/1.webp"`.
// Without a src, a styled gradient placeholder is shown.
export default {
  id: "hair",
  presetLabel: "Luxury Hair",
  icon: "Sparkles",
  brand: { name: "Ìfẹ́ Hair Studio", initials: "ÌH", handle: "@ifehairstudio" },
  theme: {
    bg: "#100d0b",
    surface: "#1b1714",
    border: "#2e2722",
    text: "#f6efe8",
    muted: "#a89a8e",
    accent: "#d4a373",
    accentInk: "#1a120b",
  },
  product: {
    title: "Raw Burmese Body Wave Unit",
    tagline: "Single-donor raw hair • pre-plucked • bleached knots",
    basePrice: 285000_00,
    badge: "Ready to Ship • Lagos",
    images: [
      { alt: "Body wave unit, front view", tones: ["#3b2a1f", "#8a5a3b"] },
      { alt: "Body wave unit, side profile", tones: ["#2a1e17", "#b07d56"] },
      { alt: "Lace close-up", tones: ["#4a3426", "#d4a373"] },
    ],
  },
  trust: { rating: "4.9", reviews: "1.2k", promise: "Ships to UK/US in 3–5 days" },
  variantGroups: [
    {
      id: "length",
      label: "Length",
      options: [
        { id: "18", label: '18"', add: 0 },
        { id: "22", label: '22"', add: 60000_00 },
        { id: "26", label: '26"', add: 135000_00 },
        { id: "30", label: '30"', add: 210000_00 },
      ],
    },
    {
      id: "lace",
      label: "Lace Type",
      options: [
        { id: "hd13x4", label: "13x4 HD", add: 0 },
        { id: "hd13x6", label: "13x6 HD", add: 35000_00 },
        { id: "glueless", label: "Glueless 5x5", add: 45000_00 },
      ],
    },
  ],
  notesLabel: "Head size & styling notes",
  notesPlaceholder: "e.g. 22.5\" circumference, middle part, bleached knots please",
  fulfillment: {
    title: "Delivery",
    modes: [
      {
        id: "lagos",
        label: "Lagos Same-Day",
        sub: "Dispatch rider • 3–6 hrs",
        icon: "Bike",
        choiceLabel: "Zone",
        choices: [
          { id: "lekki", label: "Lekki", fee: 5000_00 },
          { id: "vi", label: "Victoria Island", fee: 5000_00 },
          { id: "ikoyi", label: "Ikoyi", fee: 5000_00 },
          { id: "mainland", label: "Mainland", fee: 8000_00 },
        ],
      },
      {
        id: "intl",
        label: "DHL Express",
        sub: "International • 3–5 days",
        icon: "Plane",
        choiceLabel: "Country",
        choices: [
          { id: "uk", label: "🇬🇧 United Kingdom", fee: 65000_00 },
          { id: "us", label: "🇺🇸 United States", fee: 75000_00 },
          { id: "ca", label: "🇨🇦 Canada", fee: 80000_00 },
        ],
      },
    ],
  },
  copy: {
    orderNoun: "Order",
    waGreeting: "Hi Ìfẹ́ Hair Studio 👋🏾 I'd like to place this order:",
  },
};
