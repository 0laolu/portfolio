import { useOrder } from "../state/OrderContext.jsx";

// Full-screen on phones; a 414×850 device frame on desktop.
// Theme CSS variables live here so every child picks up the preset's palette.
export default function PhoneShell({ children }) {
  const { preset } = useOrder();
  const t = preset.theme;
  const style = {
    "--bg": t.bg,
    "--surface": t.surface,
    "--border": t.border,
    "--text": t.text,
    "--muted": t.muted,
    "--accent": t.accent,
    "--accent-ink": t.accentInk,
  };

  return (
    <div
      style={style}
      className="relative h-dvh w-full overflow-hidden bg-app text-ink transition-colors duration-300
        md:h-[850px] md:max-h-[calc(100dvh-150px)] md:w-[414px] md:rounded-[46px] md:border-[10px]
        md:border-neutral-900 md:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] md:ring-1 md:ring-neutral-700"
    >
      {/* Notch, desktop only */}
      <div className="pointer-events-none absolute left-1/2 top-2 z-50 hidden h-[26px] w-[110px] -translate-x-1/2 rounded-full bg-neutral-900 md:block" />
      {children}
    </div>
  );
}
