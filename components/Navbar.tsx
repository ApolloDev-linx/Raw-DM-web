"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#top" className="flex shrink-0 items-center">
            <Image
              src="/logo.jpeg"
              alt="RAW DM Detailing"
              width={80}
              height={64}
              className="object-contain"
            />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[0.8rem] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors duration-300 hover:text-[var(--gold)] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="btn-gold">Book Now</a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[70] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side panel */}
      <div
        className={`fixed right-0 top-0 z-[65] h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 transition-transform duration-500 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-6 pt-28">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium uppercase tracking-[0.15em] text-white/80 py-4 border-b border-white/5"
              style={{
                transition: "opacity 0.3s ease, transform 0.3s ease",
                transitionDelay: menuOpen ? `${i * 80 + 200}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(20px)",
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Book Now — simple bordered text, no pill shape */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-8 py-3 text-center text-sm font-bold uppercase tracking-[0.05em] text-[var(--gold)] border border-[var(--gold)] rounded-lg mx-auto"
            style={{
              maxWidth: "200px",
              transition: "opacity 0.3s ease",
              transitionDelay: menuOpen ? "520ms" : "0ms",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
