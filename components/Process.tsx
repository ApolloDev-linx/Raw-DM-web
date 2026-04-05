import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Clean Process. Premium Result.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="glass-card rounded-[1.5rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
