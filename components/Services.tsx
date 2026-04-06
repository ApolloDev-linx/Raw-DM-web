import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Raw Care For Every Vehicle
          </h2>
          <p className="mt-4 text-white/70 leading-7">
            Built for drivers who want clean results, polished presentation, and a detail that feels
            raw
          </p>
<a
  href="#contact"
  className="inline-block mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)] border border-[var(--gold)] px-4 py-2 rounded-full transition hover:bg-[var(--gold)] hover:text-black"
>
  Call for Xtra Services →
</a>        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-card rounded-[1.5rem] p-6">
              <div className="mb-4 h-1 w-14 rounded-full bg-[var(--gold)]" />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
