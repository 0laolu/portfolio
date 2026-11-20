import { useMemo, useState } from "react";
import { MessageCircle, Code2, Copy, Check, CheckCheck } from "lucide-react";
import Sheet from "./Sheet.jsx";
import { useOrder } from "../../state/OrderContext.jsx";
import { buildWhatsAppMessage, buildWhatsAppLink, DEMO_WHATSAPP } from "../../lib/whatsapp.js";

// Renders WhatsApp's *bold* syntax so the preview matches what the brand sees.
function WaText({ text }) {
  return text.split("\n").map((line, i) => (
    <span key={i} className="block min-h-[1em]">
      {line.split(/(\*[^*]+\*)/g).map((part, j) =>
        part.startsWith("*") && part.endsWith("*") ? <b key={j}>{part.slice(1, -1)}</b> : part
      )}
    </span>
  ));
}

export default function WhatsAppModal() {
  const { state, dispatch, preset, totals } = useOrder();
  const open = state.modal === "whatsapp";
  const [showRaw, setShowRaw] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => buildWhatsAppMessage({ preset, state, totals }), [preset, state, totals]);
  const link = buildWhatsAppLink(DEMO_WHATSAPP, message);
  const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  const copy = async () => {
    await navigator.clipboard.writeText(showRaw ? link : message);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Sheet open={open} onClose={() => dispatch({ type: "CLOSE_MODAL" })} title="Send order to WhatsApp">
      <p className="mb-3 text-xs text-muted">
        This is exactly what lands in {preset.brand.name}'s WhatsApp: no “how much?”, no back-and-forth.
      </p>

      {/* WhatsApp chat mock */}
      <div
        className="rounded-2xl p-3"
        style={{ background: "#0b141a", backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
      >
        <div className="mb-2 flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-[10px] font-bold text-black">
            {preset.brand.initials}
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-white">{preset.brand.name}</p>
            <p className="text-[10px] text-white/50">Fulfilment line</p>
          </div>
        </div>

        {showRaw ? (
          <pre className="max-h-64 overflow-auto whitespace-pre-wrap break-all rounded-lg bg-black/40 p-3 font-mono text-[10px] leading-relaxed text-emerald-300">
            {link}
          </pre>
        ) : (
          <div className="ml-auto max-w-[92%] rounded-xl rounded-tr-sm bg-[#005c4b] px-3 py-2 text-[12.5px] leading-snug text-[#e9edef]">
            <WaText text={message} />
            <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/60">
              {time} <CheckCheck size={13} className="text-[#53bdeb]" />
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => setShowRaw((v) => !v)}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-surface py-2.5 text-xs font-semibold"
        >
          <Code2 size={14} /> {showRaw ? "Show preview" : "Show encoded link"}
        </button>
        <button
          onClick={copy}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-surface py-2.5 text-xs font-semibold"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : showRaw ? "Copy link" : "Copy message"}
        </button>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-sm font-bold text-black"
      >
        <MessageCircle size={17} /> Test in WhatsApp
      </a>
      <p className="mt-1.5 text-center text-[10px] text-muted">Order ref #{state.orderRef} · opens WhatsApp with the message pre-filled</p>
    </Sheet>
  );
}
