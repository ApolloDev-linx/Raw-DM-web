import Image from "next/image";
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="section-shell flex h-25 items-center justify-between">
       <a href="#top" className="flex items-center">
  <Image
    src="/logo.jpeg"
    alt="Logo"
    width={100}
    height={80}
    className="object-contain"
/>
  </a> 
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-[var(--gold)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-[var(--gold)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-black"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
