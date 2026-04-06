export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Book Your Detail
            </h2>
            <p className="mt-4 max-w-xl text-white/70 leading-7">
              Ready to get your vehicle cleaned up? Reach out for pricing, availability, and service details.
            </p>

           <div className="mt-8 space-y-4 text-white/80">

  {/*  */}
  <div>
    <p className="gold-text text-sm uppercase tracking-[0.2em]">Dom</p>
    <div className="flex gap-4 mt-1">
      <a
        href="tel:2563249616"
className="text-xs border border-[var(--gold)] px-3 py-1 rounded-full hover:bg-[var(--gold)] hover:text-black transition"
      >
        Call
      </a>
      <a
        href="sms:2563249616"
className="text-xs border border-[var(--gold)] px-3 py-1 rounded-full hover:bg-[var(--gold)] hover:text-black transition"
      >
        Text
      </a>
    </div>
  </div>

  {/* */}
  <div>
    <p className="gold-text text-sm uppercase tracking-[0.2em]">Mario</p>
    <div className="flex gap-4 mt-1">
      <a
        href="tel:2564609743"
className="text-xs border border-[var(--gold)] px-3 py-1 rounded-full hover:bg-[var(--gold)] hover:text-black transition"
      >
        Call
      </a>
      <a
        href="sms:2564609743"
className="text-xs border border-[var(--gold)] px-3 py-1 rounded-full hover:bg-[var(--gold)] hover:text-black transition"
      >
        Text
      </a>
    </div>
  </div>

  {/* SOCIAL */}
  <div className="pt-4">
    <p className="gold-text text-sm uppercase tracking-[0.2em]">
      Reach Out On Social
    </p>

    <div className="flex flex-wrap gap-4 mt-2">
      <a
        href="https://www.tiktok.com/@rawdm02?_r=1&_t=ZP-95IrbksE1Ta"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--gold)] transition"
      >
        TikTok
      </a>

      <a
        href="https://www.facebook.com/share/1BPHJDMoci/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--gold)] transition"
      >
        Facebook
      </a>

      <a
        href="https://www.instagram.com/rawdmdetailing?igsh=NGNsMnRhdzB4bHZs&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--gold)] transition"
      >
        Instagram
      </a>
    </div>
  </div>

</div>
</div>
          <form className="glass-card rounded-[1.75rem] p-6">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
              <input
                type="text"
                placeholder="Vehicle / Service Needed"
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
              <textarea
                placeholder="Tell us what you need"
                rows={5}
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90"
              >
                Send Request (Coming soon)
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
