import hair from "./hair.js";
import jewelry from "./jewelry.js";
import spa from "./spa.js";

export const PRESET_LIST = [hair, jewelry, spa];
export const PRESETS = Object.fromEntries(PRESET_LIST.map((p) => [p.id, p]));
export const DEFAULT_PRESET = hair;
