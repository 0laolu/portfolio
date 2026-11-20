import { useRef, useState } from "react";
import { useOrder } from "../state/OrderContext.jsx";
import Icon from "./Icon.jsx";

function Slide({ image, presetIcon, eager }) {
  const [failed, setFailed] = useState(false);
  const [a, b] = image.tones;
  if (image.src && !failed) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${image.src}`}
        alt={image.alt}
        loading={eager ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    );
  }
  // Placeholder until real photography is added
  return (
    <div
      role="img"
      aria-label={image.alt}
      className="grid h-full w-full place-items-center"
      style={{ background: `radial-gradient(120% 90% at 30% 20%, ${b} 0%, ${a} 70%)` }}
    >
      <Icon name={presetIcon} size={56} strokeWidth={1} className="text-white/40" />
    </div>
  );
}

// Instagram-style: swipe (scroll-snap) or tap left/right halves.
export default function MediaCarousel() {
  const { preset } = useOrder();
  const images = preset.product.images;
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const goTo = (i) => {
    const el = trackRef.current;
    const next = (i + images.length) % images.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = (e) => {
    const el = e.currentTarget;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section className="relative h-[50dvh] md:h-[400px]" aria-roledescription="carousel">
      <div ref={trackRef} onScroll={onScroll} className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto">
        {images.map((img, i) => (
          <div key={i} className="h-full w-full shrink-0 snap-center" aria-hidden={i !== index}>
            <Slide image={img} presetIcon={preset.icon} eager={i === 0} />
          </div>
        ))}
      </div>

      {/* Story-style progress dashes */}
      <div className="absolute inset-x-3 top-3 flex gap-1">
        {images.map((_, i) => (
          <span key={i} className={`h-[3px] flex-1 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/35"}`} />
        ))}
      </div>

      {/* Tap zones */}
      <button aria-label="Previous image" onClick={() => goTo(index - 1)} className="absolute inset-y-0 left-0 w-1/3" />
      <button aria-label="Next image" onClick={() => goTo(index + 1)} className="absolute inset-y-0 right-0 w-1/3" />

      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {preset.product.badge}
      </span>
    </section>
  );
}
