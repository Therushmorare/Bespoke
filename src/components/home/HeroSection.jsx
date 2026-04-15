import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animFrameId;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const streamLines = Array.from({ length: 28 }, (_, i) => ({
      offset: (i / 28) * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.002,
      width: 1 + Math.random() * 2.5,
      color: i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#7dd3fc" : "#c084fc",
      alpha: 0.2 + Math.random() * 0.25,
      amp: 60 + Math.random() * 120,
      freq: 0.5 + Math.random() * 1.5,
      yBase: (i / 28) * 1.4 - 0.2,
    }));

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "#1a1a2e";
      ctx.fillRect(0, 0, W, H);

      const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.9);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.72)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      streamLines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.alpha;
        ctx.lineWidth = line.width;
        ctx.shadowColor = line.color;
        ctx.shadowBlur = 8;

        for (let x = -20; x <= W + 20; x += 2) {
          const progress = x / W;
          const phase = t * line.speed + line.offset;
          const y =
            line.yBase * H +
            Math.sin(progress * Math.PI * line.freq + phase) * line.amp +
            Math.sin(progress * Math.PI * line.freq * 2.3 + phase * 1.5) * (line.amp * 0.4);

          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      t++;
      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero — Bespoke Solutech"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#111120" }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(10,10,28,0.65) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto pt-[68px]">

        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-4 font-bold"
          style={{ color: "#c4b5fd" }}
        >
          Established 2025
        </p>

         <h1
          className="font-bold leading-[1.05] mb-8 w-full"
          style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)",
            fontFamily: "'Georgia', serif",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="block" style={{ color: "#ffffff" }}>Digital</span>
          <span className="block" style={{ color: "#a78bfa" }}>Solutions,</span>
          <span className="block" style={{ color: "#ffffff" }}>Professionally</span>
          <span className="block" style={{ color: "#ffffff" }}>Operated.</span>
        </h1>

        <p
          className="text-base md:text-lg max-w-xl mb-12 leading-relaxed"
          
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          Bespoke Solutech operates and manages digital products and services for businesses and
          organisations requiring professional-grade support.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#consultation"
            className="px-8 bg-violet-600 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-violet-500 active:scale-95"
            style={{ color: "#ffffff", textDecoration: "none", display: "inline-block" }}
            aria-label="Request a consultation with Bespoke Solutech"
          >
            Request Consultation
          </a>
          <a
            href="#products"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 active:scale-95"
            style={{
              border: "1.5px solid rgba(255,255,255,0.60)",
              color: "#ffffff",
              textDecoration: "none",
              display: "inline-block",
            }}
            aria-label="Explore Bespoke Solutech's digital solutions"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}