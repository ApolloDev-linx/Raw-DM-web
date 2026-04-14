"use client";

import { useEffect, useState } from "react";

function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full bg-[var(--gold)]"
      style={{
        width: 3,
        height: 3,
        filter: "blur(1px)",
        animation: "sparkle 3s ease-in-out infinite",
        ...style,
      }}
    />
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const sparkles = [
    { top: "15%", left: "10%", animationDelay: "0s" },
    { top: "25%", right: "15%", animationDelay: "0.8s" },
    { top: "60%", left: "25%", animationDelay: "1.6s" },
    { top: "70%", right: "30%", animationDelay: "2.2s" },
    { top: "40%", left: "60%", animationDelay: "0.4s" },
    { top: "80%", left: "80%", animationDelay: "1.2s" },
  ];

  return (
    <section id="top" className="relative overflow-hidden py-28 sm:py-40 noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle key={i} style={s} />
      ))}

      <div className="section-shell relative z-10 grid items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.2s",
            }}
          >
            Raw D&M Detailing
          </p>

          <h1
            className="max-w-2xl text-[2.8rem] font-bold leading-[1.1] text-white sm:text-6xl lg:text-[4.2rem]"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.4s",
            }}
          >
            We don&apos;t just
            <br />
            clean it —{" "}
            <span className="gold-text italic">We revive it.</span>
          </h1>

          <p
            className="mt-7 max-w-lg text-base leading-8 text-white/60 sm:text-lg"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.6s",
            }}
          >
            Premium interior and exterior detailing designed for drivers who
            want their vehicle to look sharp, clean, and professionally
            finished.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.8s",
            }}
          >
            <a href="#contact" className="btn-gold">
              Get A Quote
            </a>
            <a href="#gallery" className="btn-outline">
              View Work
            </a>
          </div>
        </div>

        {/* Right column — "Why Clients Book" card */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(40px)",
            transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.5s",
          }}
        >
          <div className="glass-card rounded-[2rem] p-[2px] bg-gradient-to-br from-[rgba(212,175,55,0.2)] via-transparent to-[rgba(212,175,55,0.08)]">
            <div className="rounded-[2rem] bg-[#0a0a0a] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
                Why Clients Book
              </p>

              <div className="mt-8 space-y-7">
                {[
                  {
                    icon: "✦",
                    title: "Premium Finish",
                    desc: "Deep-cleaned surfaces with a polished, luxury presentation.",
                  },
                  {
                    icon: "◈",
                    title: "Attention To Detail",
                    desc: "The little things matter — trims, vents, edges, wheels, and final touch-up.",
                  },
                  {
                    icon: "◆",
                    title: "Reliable Service",
                    desc: "Clean communication, quality results, and a service people return to.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 group">
                    <span className="mt-1 text-[var(--gold)] text-lg transition-transform duration-300 group-hover:scale-125">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-white/55">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
