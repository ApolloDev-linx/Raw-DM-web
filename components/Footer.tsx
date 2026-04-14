"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />

      <div className="section-shell">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white">
              Raw <span className="gold-text">D&M</span> Detailing
            </h3>
            <p className="mt-3 text-sm text-white/40 leading-7 max-w-sm">
              Premium interior and exterior detailing for drivers who demand the best.
              Clean results, polished presentation, every time.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Quick Links</p>
            <nav className="space-y-2.5">
              {["Services", "Gallery", "Process", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-white/40 transition-colors duration-300 hover:text-[var(--gold)]">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Get In Touch</p>
            <div className="space-y-2.5 text-sm text-white/40">
              <a href="tel:2563249616" className="block hover:text-[var(--gold)] transition-colors">Dom: (256) 324-9616</a>
              <a href="tel:2564609743" className="block hover:text-[var(--gold)] transition-colors">Mario: (256) 460-9743</a>
              <a href="https://www.instagram.com/rawdm_detailing" target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)] transition-colors">@rawdm_detailing</a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col gap-4 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Raw DM Detailing. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <p className="uppercase tracking-[0.2em] text-[var(--gold)]/60">Luxury In Every Finish</p>
            <span className="gold-dot" />
            <a href="#top" className="uppercase tracking-[0.2em] text-white/30 hover:text-[var(--gold)] transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

        {/* Powered by Apollo Systems */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex justify-center">
	<a
          href="https://www.apollosystems.tech/"
          target="_blank"
          rel="noopener noreferrer"
	  >
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/20">
            Powered by{" "}
            <span className="text-white/35 font-semibold tracking-[0.2em]">Apollo Systems</span>
          </p> </a>
        </div>
      </div>
    </footer>
  );
}
