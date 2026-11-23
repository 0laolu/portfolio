// Bespoke & ready-to-wear native fashion, with a Menswear / Womenswear switch.
// Pricing is benchmarked against Lagos brands researched in Nov 2026:
// - Tetanura (Yaba/Abuja): shirts ₦25k–65k, sets & kaftans ₦120k–150k, sizes M–XXXL
// - Premium senators online: ₦110k (Veejayrex); ₦130k–150k with cap & slippers (Kingziz)
// - Owambe agbada average spend ≈ ₦150k (Zikoko); range ₦50k–₦2m+
// - Contemporary womenswear: Melira ₦75k–350k, Dye Lab ₦36k–344k, Hertunba ₦250k–750k
// - Aso-oke iro & buba 4-piece sets sell to the diaspora for ≈ $290–390 (Etsy)
// All money values are in KOBO (₦1 = 100 kobo).
export default {
  id: "apparel",
  presetLabel: "Native Apparel",
  icon: "Shirt",
  brand: { name: "Ọ̀nà Atelier", initials: "ỌA", handle: "@ona.atelier" },
  theme: {
    bg: "#f3efe7",
    surface: "#fbf9f4",
    border: "#e0d9cc",
    text: "#1c1f2e",
    muted: "#6e6f7a",
    accent: "#2b3a67",
    accentInk: "#ffffff",
  },
  trust: { rating: "4.8", reviews: "2.3k", promise: "Ships to UK/US/Canada in time for your event" },

  // Each collection overrides product, variantGroups and notes.
  // Brand, theme, trust, fulfillment and copy are shared.
  collections: [
    {
      id: "men",
      label: "Menswear",
      product: {
        title: "Signature Native Set",
        tagline: "Hand-finished embroidery • matching cap included",
        basePrice: 95000_00,
        badge: "Made to Order • 7–10 days",
        images: [
          {src:"img/apparel/men/men_agbada_apparel.webp", alt: "Senator two-piece, full-length front view", tones: ["#1c2442", "#4a5b8f"] },
          {src:"img/apparel/men/men_kaftan_apparel.webp", alt: "Neckline embroidery detail", tones: ["#2b3a67", "#b9a27a"] },
          {src:"img/apparel/men/men_senator_apparel.webp", alt: "Fabric texture close-up", tones: ["#232a45", "#8c9bc4"] },
        ],
      },
      variantGroups: [
        {
          id: "style",
          label: "Style",
          options: [
            { id: "senator", label: "Agbada Three-Piece", add: 0 }, // ₦95,000
            { id: "kaftan", label: "Kaftan Set", add: 25000_00 }, // ₦120,000
            { id: "agbada", label: "Senator Two-Piece", add: 115000_00 }, // ₦210,000
          ],
        },
        {
          id: "fabric",
          label: "Fabric",
          options: [
            { id: "cotton", label: "Premium Cotton", add: 0 },
            { id: "cashmere", label: "Cashmere Wool", add: 35000_00 },
            { id: "asooke", label: "Hand-woven Aso-oke", add: 150000_00 },
          ],
        },
        {
          id: "size",
          label: "Size",
          options: [
            { id: "m", label: "M", add: 0 },
            { id: "l", label: "L", add: 0 },
            { id: "xl", label: "XL", add: 0 },
            { id: "xxl", label: "XXL", add: 0 },
            { id: "mtm", label: "Made-to-Measure", add: 25000_00 },
          ],
        },
      ],
      notesLabel: "Measurements & event date",
      notesPlaceholder: 'e.g. Chest 42", shoulder 19", sleeve 25", trouser 41". Wedding on 27 Dec',
    },
    {
      id: "women",
      label: "Womenswear",
      theme: {
        bg: "#2a171f",
        surface: "#3a2129",
        border: "#553241",
        text: "#f6ebe6",
        muted: "#c4a3ab",
        accent: "#c9a35a",
        accentInk: "#22130f",
      },
      product: {
        title: "The Owambe Edit",
        tagline: "Cut to your shape • styled for weddings & celebrations",
        basePrice: 85000_00,
        badge: "Made to Order • 10–14 days",
        images: [
          {src:"img/apparel/women/women_iro&buba_apparel.webp", alt: "Plum lace midi dress with bell sleeves and gele", tones: ["#3a2a4a", "#b07d56"] },
          {src:"img/apparel/women/women_lace_gown_apparel.webp", alt: "Off-shoulder plum and gold beaded lace gown with gele", tones: ["#2b3a67", "#d9c59a"] },
          {src:"img/apparel/women/women_adiire_kaftan_apparel.webp", alt: "Plum lace midi dress with bell sleeves and gele", tones: ["#1f3557", "#7fa0c8"] },
        ],
      },
      variantGroups: [
        {
          id: "style",
          label: "Style",
          options: [
            { id: "adire", label: "Aso-oke Iro & Buba Set", add: 0 }, // ₦85,000
            { id: "lace", label: "Asoebi Lace Gown", add: 95000_00 }, // ₦180,000
            { id: "irobuba", label: "Adire Kaftan Dress", add: 335000_00 }, // ₦420,000 (buba, iro, gele, ipele)
          ],
        },
        {
          id: "size",
          label: "Size (UK)",
          options: [
            { id: "8-10", label: "8–10", add: 0 },
            { id: "12-14", label: "12–14", add: 0 },
            { id: "16-18", label: "16–18", add: 0 },
            { id: "20-22", label: "20–22", add: 10000_00 },
            { id: "mtm", label: "Made-to-Measure", add: 25000_00 },
          ],
        },
        {
          id: "finish",
          label: "Finish",
          options: [
            { id: "classic", label: "Classic", add: 0 },
            { id: "beaded", label: "Hand-beaded", add: 45000_00 },
            { id: "crystal", label: "Stone & Crystal", add: 70000_00 },
          ],
        },
      ],
      notesLabel: "Measurements, colour & event date",
      notesPlaceholder: 'e.g. Bust 36", waist 30", hips 42", length 58". Gold & wine. Engagement on 2 Jan',
    },
  ],

  fulfillment: {
    title: "Delivery",
    modes: [
      {
        id: "lagos",
        label: "Lagos Same-Day",
        sub: "Dispatch rider • after final fitting",
        icon: "Bike",
        choiceLabel: "Zone",
        choices: [
          { id: "studio", label: "Studio Pickup (Lekki)", fee: 0 },
          { id: "lekki", label: "Lekki", fee: 5000_00 },
          { id: "vi", label: "Victoria Island", fee: 5000_00 },
          { id: "ikoyi", label: "Ikoyi", fee: 5000_00 },
          { id: "mainland", label: "Mainland", fee: 8000_00 },
        ],
      },
      {
        id: "intl",
        label: "DHL Express",
        sub: "International • 3–5 days after dispatch",
        icon: "Plane",
        choiceLabel: "Country",
        choices: [
          { id: "uk", label: "🇬🇧 United Kingdom", fee: 70000_00 },
          { id: "us", label: "🇺🇸 United States", fee: 80000_00 },
          { id: "ca", label: "🇨🇦 Canada", fee: 85000_00 },
        ],
      },
    ],
  },
  copy: {
    orderNoun: "Order",
    waGreeting: "Hello Ọ̀nà Atelier 👋🏾 I'd like to order this outfit:",
  },
};
