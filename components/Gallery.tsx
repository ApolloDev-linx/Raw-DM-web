"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 overflow-hidden">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            The Work Speaks For Itself
          </h2>
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...galleryImages, ...galleryImages].map((src, index) => (
              <div
                key={index}
                className="relative min-w-[300px] h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Detailing"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
