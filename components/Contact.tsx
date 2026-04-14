"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const header = useScrollReveal();
  const embed = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="contact" className="relative py-28">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-divider mb-28" />

      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left column */}
          <div
            ref={header.ref}
            className={`reveal ${header.isVisible ? "visible" : ""}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-[2.8rem] leading-tight">
              Book Your <span className="italic gold-text">Detail</span>
            </h2>
            <p className="mt-5 max-w-lg text-white/55 leading-7">
              Ready to get your vehicle cleaned up? Book online below or reach out directly for pricing and availability.
            </p>

            {/* Contact people */}
            <div className="mt-10 space-y-6">
              {[
                { name: "Dom", phone: "2563249616" },
                { name: "Mario", phone: "2564609743" },
              ].map((person) => (
                <div key={person.name} className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-black/50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                      {person.name}
                    </p>
                    <div className="flex gap-3 mt-1.5">
                      <a
                        href={`tel:${person.phone}`}
                        className="text-xs font-semibold uppercase tracking-[0.15em] border border-white/15 px-4 py-1.5 rounded-full text-white/70 transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                      >
                        Call
                      </a>
                      <a
                        href={`sms:${person.phone}`}
                        className="text-xs font-semibold uppercase tracking-[0.15em] border border-white/15 px-4 py-1.5 rounded-full text-white/70 transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                      >
                        Text
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)] mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576498498498",
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                  { label: "Instagram", href: "https://www.instagram.com/rawdm_detailing",
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="var(--gold)" stroke="none"/></svg> },
                  { label: "TikTok", href: "https://www.tiktok.com/@rawdm_detailing",
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.22V9.4a8.16 8.16 0 0 0 4.84 1.58V7.55a4.78 4.78 0 0 1-1-.86z"/></svg> },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[var(--gold)] hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Calendly embed */}
          <div
            ref={embed.ref}
            className={`reveal-right ${embed.isVisible ? "visible" : ""}`}
          >
            <div className="glass-card rounded-[2rem] p-[1px] bg-gradient-to-br from-[rgba(212,175,55,0.15)] via-transparent to-[rgba(212,175,55,0.08)]">
              <div className="rounded-[2rem] bg-[#0a0a0a] p-4 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)] mb-4 text-center">
                  Schedule Online
                </p>
                <div className="rounded-xl overflow-hidden" style={{ minHeight: "550px" }}>
                  <iframe
                    src="https://calendly.com/rawdmdetail?embed_type=Inline&hide_gdpr_banner=1"
                    width="100%"
                    height="550"
                    frameBorder="0"
                    title="Book a Detail"
                    className="rounded-xl"
                    style={{ border: "none", minWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
