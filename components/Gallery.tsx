import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            The Work Speaks For Itself
          </h2>
          <p className="mt-4 text-white/70 leading-7">
            Use your 10 real detailing photos here. Before-and-after shots are gold for trust.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={`Detailing work ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
