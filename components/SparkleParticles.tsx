"use client";

import { useEffect, useRef } from "react";

export default function SparkleParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeDir: number;
      pulse: number;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(document.documentElement);

    resize();

    const PARTICLE_COUNT = 45;

    const createParticle = (randomY = false): Particle => ({
      x: Math.random() * canvas.width,
      y: randomY ? Math.random() * canvas.height : canvas.height + 10,
      size: Math.random() * 2 + 0.5,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.4 + 0.05,
      fadeDir: 1,
      pulse: Math.random() * Math.PI * 2,
    });

    // seed initial particles across the full page
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.015;

        // gentle opacity pulse
        const pulseOpacity = p.opacity + Math.sin(p.pulse) * 0.12;
        const finalOpacity = Math.max(0, Math.min(pulseOpacity, 0.55));

        // gold sparkle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${finalOpacity})`;
        ctx.fill();

        // soft glow ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${finalOpacity * 0.15})`;
        ctx.fill();
      }

      // recycle particles that drift off-screen
      particles = particles.map((p) => {
        if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
          return createParticle(false);
        }
        return p;
      });

      // maintain count
      while (particles.length < PARTICLE_COUNT) {
        particles.push(createParticle(false));
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
