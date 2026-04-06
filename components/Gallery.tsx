"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Real results. Clean finishes.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Swipe through some of our detailing work and see the level of care
            that goes into every vehicle.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-3"
              >
                <img
                  src={src}
                  alt={`Detailing work ${index + 1}`}
                  className="h-[260px] w-full rounded-2xl object-cover sm:h-[320px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
