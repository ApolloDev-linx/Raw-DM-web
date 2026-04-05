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

            <div className="mt-8 space-y-3 text-white/80">
              <p><span className="gold-text">Phone:</span> (256) 000-0000</p>
              <p><span className="gold-text">Instagram:</span> @eliteautodetail</p>
              <p><span className="gold-text">Location:</span> Your City, Alabama</p>
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
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
