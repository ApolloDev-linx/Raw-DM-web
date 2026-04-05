export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-28 sm:py-36">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
            Luxury Auto Detailing
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Bring Back The <span className="gold-text">Showroom Shine</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Premium interior and exterior detailing designed for drivers who want their vehicle to
            look sharp, clean, and professionally finished.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90"
            >
              Get A Quote
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-black/60 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Why Clients Book</p>
            <div className="mt-6 space-y-5 text-white/85">
              <div>
                <h3 className="font-semibold text-white">Premium Finish</h3>
                <p className="mt-1 text-sm leading-6 text-white/70">
                  Deep-cleaned surfaces with a polished, luxury presentation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Attention To Detail</h3>
                <p className="mt-1 text-sm leading-6 text-white/70">
                  The little things matter — trims, vents, edges, wheels, and final touch-up.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Reliable Service</h3>
                <p className="mt-1 text-sm leading-6 text-white/70">
                  Clean communication, quality results, and a service people want to come back to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
