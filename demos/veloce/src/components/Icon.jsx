import { Sparkles, Gem, Flower2, Bike, Plane, ShieldCheck, Building2, Home } from "lucide-react";

// Presets reference icons by name so config stays plain data.
const ICONS = { Sparkles, Gem, Flower2, Bike, Plane, ShieldCheck, Building2, Home };

export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp {...props} />;
}
