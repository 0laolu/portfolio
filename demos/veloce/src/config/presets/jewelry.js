export default {
  id: "jewelry",
  presetLabel: "Fine Jewelry",
  icon: "Gem",
  brand: { name: "Aurum & Co.", initials: "A&", handle: "@aurumandco.ng" },
  theme: {
    bg: "#0b0f14",
    surface: "#131a22",
    border: "#222c38",
    text: "#eef2f6",
    muted: "#8c9aab",
    accent: "#e6c66e",
    accentInk: "#15110a",
  },
  product: {
    title: "Solitaire Moissanite Ring",
    tagline: "Hand-set in Lagos • GRA certificate • lifetime polish",
    basePrice: 420000_00,
    badge: "Made to Order • 5 days",
    images: [
      { alt: "Solitaire ring on velvet", tones: ["#141c26", "#5a6b80"] },
      { alt: "Ring band profile", tones: ["#1a2330", "#c9a54e"] },
      { alt: "Stone close-up", tones: ["#0f1620", "#e6c66e"] },
    ],
  },
  trust: { rating: "5.0", reviews: "640", promise: "Insured delivery to UK/US" },
  variantGroups: [
    {
      id: "metal",
      label: "Metal",
      options: [
        { id: "yg", label: "18k Yellow Gold", add: 0 },
        { id: "wg", label: "18k White Gold", add: 25000_00 },
        { id: "rg", label: "18k Rose Gold", add: 25000_00 },
        { id: "pt", label: "Platinum", add: 180000_00 },
      ],
    },
    {
      id: "carat",
      label: "Stone Size",
      options: [
        { id: "1", label: "1.0 ct", add: 0 },
        { id: "1.5", label: "1.5 ct", add: 95000_00 },
        { id: "2", label: "2.0 ct", add: 210000_00 },
      ],
    },
  ],
  notesLabel: "Ring size & engraving",
  notesPlaceholder: "e.g. UK size N / US 6.75, engrave “T & K • 12.12.26”",
  fulfillment: {
    title: "Delivery",
    modes: [
      {
        id: "lagos",
        label: "Lagos Insured Courier",
        sub: "Signature on delivery • same day",
        icon: "ShieldCheck",
        choiceLabel: "Zone",
        choices: [
          { id: "lekki", label: "Lekki", fee: 10000_00 },
          { id: "vi", label: "Victoria Island", fee: 10000_00 },
          { id: "ikoyi", label: "Ikoyi", fee: 10000_00 },
          { id: "mainland", label: "Mainland", fee: 15000_00 },
        ],
      },
      {
        id: "intl",
        label: "DHL Express Insured",
        sub: "International • 3–5 days",
        icon: "Plane",
        choiceLabel: "Country",
        choices: [
          { id: "uk", label: "🇬🇧 United Kingdom", fee: 95000_00 },
          { id: "us", label: "🇺🇸 United States", fee: 110000_00 },
          { id: "ca", label: "🇨🇦 Canada", fee: 115000_00 },
        ],
      },
    ],
  },
  copy: {
    orderNoun: "Order",
    waGreeting: "Hello Aurum & Co. ✨ I'd like to commission this piece:",
  },
};
