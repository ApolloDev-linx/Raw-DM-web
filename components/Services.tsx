"use client";

import { services } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExteriorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M3 12l2-2h14l2 2M7 17V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M3 12v5h2M19 12v5h2" />
    </svg>
  );
}

function InteriorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 8h6M9 12h6M9 16h3" />
      <path d="M6 6v12M18 6v12" />
    </svg>
  );
}

function FullDetailIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
    </svg>
  );
}

const serviceIcons = [ExteriorIcon, InteriorIcon, FullDetailIcon];

export default function Services() {
  const header = useScrollReveal();
  const cards = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="services" className="relative py-28">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-divider mb-28" />

      <div className="section-shell relative z-10">
        <div
          ref={header.ref}
          className={`mb-14 max-w-2xl reveal ${header.isVisible ? "visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-[2.8rem] leading-tight">
            Raw Care For <span className="italic gold-text">Every Vehicle</span>
          </h2>
          <p className="mt-5 text-white/55 leading-7">
            Built for drivers who want clean results, polished presentation,
            and a detail that feels raw.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)] transition-all duration-300 hover:gap-3"
          >
            Call for extra services <span className="text-base">→</span>
          </a>
        </div>

        <div ref={cards.ref} className="grid gap-7 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <article
                key={service.title}
                className={`group glass-card rounded-[1.5rem] p-8 relative overflow-hidden reveal ${
                  cards.isVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: cards.isVisible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border)] bg-black/40 transition-all duration-300 group-hover:border-[var(--gold)]/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                    <Icon />
                  </div>
                  <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[var(--gold)] to-transparent mb-5" />
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--gold)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
