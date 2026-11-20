// A spa sells appointments, not parcels, so "fulfillment" becomes
// In-Clinic vs Home Visit. Diaspora buyers can pre-book for their Lagos trip.
export default {
  id: "spa",
  presetLabel: "Aesthetic MedSpa",
  icon: "Flower2",
  brand: { name: "Glow Clinic Lekki", initials: "GC", handle: "@glowcliniclekki" },
  theme: {
    bg: "#f6f2ec",
    surface: "#ffffff",
    border: "#e4ddd3",
    text: "#1f2a24",
    muted: "#6f7a73",
    accent: "#4f6f5c",
    accentInk: "#ffffff",
  },
  product: {
    title: "Signature HydraFacial + LED",
    tagline: "60 mins • licensed aestheticians • all skin types",
    basePrice: 75000_00,
    badge: "Slots open this week",
    images: [
      { alt: "Treatment room", tones: ["#dfe7df", "#9fb5a5"] },
      { alt: "HydraFacial session", tones: ["#e9e2d6", "#b9a88d"] },
      { alt: "LED therapy", tones: ["#dbe4e8", "#7e9aa6"] },
    ],
  },
  trust: { rating: "4.9", reviews: "870", promise: "Booking from abroad? Pay now, redeem when you land" },
  variantGroups: [
    {
      id: "package",
      label: "Package",
      options: [
        { id: "1", label: "Single Session", add: 0 },
        { id: "3", label: "3 Sessions", add: 130000_00 },
        { id: "6", label: "6 Sessions", add: 260000_00 },
      ],
    },
    {
      id: "addon",
      label: "Add-on",
      options: [
        { id: "none", label: "None", add: 0 },
        { id: "derma", label: "Dermaplaning", add: 25000_00 },
        { id: "lip", label: "Lip Hydration", add: 15000_00 },
      ],
    },
  ],
  notesLabel: "Preferred date & skin concerns",
  notesPlaceholder: "e.g. Sat 20 Dec, morning. Hyperpigmentation, sensitive skin",
  fulfillment: {
    title: "Appointment",
    modes: [
      {
        id: "clinic",
        label: "In-Clinic",
        sub: "Complimentary skin consult",
        icon: "Building2",
        choiceLabel: "Location",
        choices: [
          { id: "lekki", label: "Lekki Phase 1", fee: 0 },
          { id: "ikoyi", label: "Ikoyi", fee: 0 },
        ],
      },
      {
        id: "home",
        label: "Home Visit",
        sub: "We bring the clinic to you",
        icon: "Home",
        choiceLabel: "Zone",
        choices: [
          { id: "lekki", label: "Lekki", fee: 20000_00 },
          { id: "vi", label: "Victoria Island", fee: 20000_00 },
          { id: "ikoyi", label: "Ikoyi", fee: 20000_00 },
          { id: "mainland", label: "Mainland", fee: 30000_00 },
        ],
      },
    ],
  },
  copy: {
    orderNoun: "Booking",
    waGreeting: "Hi Glow Clinic 🌿 I'd like to book:",
  },
};
