"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
  "/images/detail-1.jpg",
  "/images/detail-2.jpg",
  "/images/detail-3.jpg",
  "/images/detail-4.jpg",
  "/images/detail-5.jpg",
  "/images/detail-6.jpg",
  "/images/detail-7.jpg",
  "/images/detail-8.jpg",
  "/images/detail-9.jpg",
  "/images/detail-10.jpg",
];

export default function Gallery() {
  const header = useScrollReveal();
  const carousel = useScrollReveal({ rootMargin: "0px 0px -20px 0px" });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p !== null ? (p + 1) % images.length : null));
      if (e.key === "ArrowLeft") setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : null));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="relative py-28">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-divider mb-28" />

      <div className="section-shell relative z-10">
        <div
          ref={header.ref}
          className={`mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between reveal ${
            header.isVisible ? "visible" : ""
          }`}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">Gallery</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-[2.8rem] leading-tight">
              Real Results. <span className="italic gold-text">Clean Finishes.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base max-w-lg">
              Swipe through our detailing work and see the care that goes into every vehicle.
            </p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={scrollPrev} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]" aria-label="Previous">←</button>
            <button onClick={scrollNext} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]" aria-label="Next">→</button>
          </div>
        </div>

        <div ref={carousel.ref} className={`reveal-scale ${carousel.isVisible ? "visible" : ""}`}>
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div key={index} className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-2">
                  <div className="group relative overflow-hidden rounded-2xl cursor-pointer" onClick={() => setLightbox(index)}>
                    <img src={src} alt={`Detailing work ${index + 1}`} className="h-[280px] w-full object-cover sm:h-[340px] transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">View Full →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button key={i} onClick={() => emblaApi?.scrollTo(i)} className={`h-[3px] rounded-full transition-all duration-400 ${i === selectedIndex ? "w-8 bg-[var(--gold)]" : "w-3 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl transition-colors z-10" aria-label="Close">✕</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }} className="absolute left-4 sm:left-8 text-white/50 hover:text-[var(--gold)] text-3xl transition-colors z-10" aria-label="Previous image">‹</button>
          <img src={images[lightbox]} alt={`Detail ${lightbox + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl" style={{ animation: "fadeInUp 0.3s ease" }} onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }} className="absolute right-4 sm:right-8 text-white/50 hover:text-[var(--gold)] text-3xl transition-colors z-10" aria-label="Next image">›</button>
          <div className="absolute bottom-6 text-xs text-white/40 tracking-[0.2em] uppercase">{lightbox + 1} / {images.length}</div>
        </div>
      )}
    </section>
  );
}
