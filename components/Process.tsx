"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const processSteps = [
  {
    title: "Book Your Service",
    desc: "Call, text, or reach out on social media to schedule your detail.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Drop-Off or Mobile",
    desc: "Bring it to us or we come to you — flexible scheduling that works.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17h14M3 12l2-2h14l2 2M7 17V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Full Raw Detail",
    desc: "Every surface cleaned, restored, and protected with premium care.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M8 7l4-4 4 4" />
        <path d="M5 12h14" />
        <path d="M7 17l5 4 5-4" />
      </svg>
    ),
  },
  {
    title: "Shine Reveal",
    desc: "Final inspection and walkthrough — see the full transformation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
      </svg>
    ),
  },
];

export default function Process() {
  const header = useScrollReveal();
  const steps = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="process" className="relative py-28">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.05),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-divider mb-28" />

      <div className="section-shell relative z-10">
        <div
          ref={header.ref}
          className={`mb-16 max-w-2xl reveal ${header.isVisible ? "visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-[2.8rem] leading-tight">
            Clean Process. <span className="italic gold-text">Premium Result.</span>
          </h2>
          <p className="mt-5 text-white/55 leading-7">
            From booking to the final reveal, every step is handled with precision.
          </p>
        </div>

        <div ref={steps.ref} className="relative">
          {/* Connecting line — desktop */}
          <div className="absolute top-[3.5rem] left-[calc(12.5%)] right-[calc(12.5%)] h-[1px] hidden lg:block">
            <div
              className="h-full bg-gradient-to-r from-[var(--gold)] via-[var(--gold-soft)] to-[var(--gold)]"
              style={{
                width: steps.isVisible ? "100%" : "0%",
                transition: "width 1.5s cubic-bezier(0.23,1,0.32,1) 0.4s",
              }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className={`group relative reveal ${steps.isVisible ? "visible" : ""}`}
                style={{ transitionDelay: steps.isVisible ? `${i * 150 + 200}ms` : "0ms" }}
              >
                <div className="glass-card rounded-[1.5rem] p-7 text-center relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-black/40 mb-5 transition-all duration-300 group-hover:border-[var(--gold)]/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]">
                      {step.icon}
                    </div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[var(--gold)] mb-3">
                      Step 0{i + 1}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-6">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
