import hair from "./hair.js";
import jewelry from "./jewelry.js";
import spa from "./spa.js";
import apparel from "./apparel.js";

export const PRESET_LIST = [hair, jewelry, spa, apparel];
export const PRESETS = Object.fromEntries(PRESET_LIST.map((p) => [p.id, p]));
export const DEFAULT_PRESET = hair;

// A preset may contain `collections` (e.g. Menswear / Womenswear).
// This merges the active collection into the preset so every component
// keeps reading preset.product, preset.variantGroups, etc. as before.
export function resolvePreset(preset, collectionId) {
  if (!preset.collections?.length) return preset;
  const active = preset.collections.find((c) => c.id === collectionId) ?? preset.collections[0];
  const { id, label, ...overrides } = active;
  return { ...preset, ...overrides, collectionId: id, collectionLabel: label };
}
