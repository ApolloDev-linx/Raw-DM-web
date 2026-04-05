import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            What Clients Notice
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="glass-card rounded-[1.5rem] p-6">
              <p className="text-white/80 leading-7">“{item.quote}”</p>
              <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
