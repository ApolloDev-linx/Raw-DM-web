"use client";

import { testimonials } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[var(--gold)] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const header = useScrollReveal();
  const cards = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section className="relative py-28">
      <div className="section-divider mb-28" />

      <div className="section-shell">
        {/* Header */}
        <div
          ref={header.ref}
          className={`mb-14 max-w-2xl reveal ${header.isVisible ? "visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-[2.8rem] leading-tight">
            What Clients <span className="italic gold-text">Notice</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={cards.ref} className="grid gap-7 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <blockquote
              key={item.name}
              className={`group glass-card rounded-[1.5rem] p-8 relative overflow-hidden reveal ${
                cards.isVisible ? "visible" : ""
              }`}
              style={{
                transitionDelay: cards.isVisible ? `${i * 120}ms` : "0ms",
              }}
            >
              {/* Large decorative quote */}
              <span className="absolute top-4 right-6 text-6xl font-serif text-[var(--gold)] opacity-[0.08] leading-none select-none">
                &ldquo;
              </span>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <Stars />
                <p className="text-[0.95rem] text-white/75 leading-7 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center text-xs font-bold text-black">
                    {item.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--gold)]">
                    {item.name}
                  </span>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
