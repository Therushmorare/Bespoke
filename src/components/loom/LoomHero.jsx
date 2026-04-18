import { useEffect, useRef } from "react";

export default function LoomHero() {
  const canvasRef = useRef(null);

  // Animated bar chart on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const bars = Array.from({ length: 28 }, (_, i) => ({
      base: 0.3 + Math.random() * 0.6,
      speed: 0.02 + Math.random() * 0.03,
      phase: (i / 28) * Math.PI * 2,
    }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      // Reset any previous transforms before scaling, otherwise scale() compounds
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const barW = W / bars.length;
      const gap = barW * 0.25;

      bars.forEach((bar, i) => {
        const h = (bar.base + Math.sin(t * bar.speed + bar.phase) * 0.18) * H * 0.72;
        const x = i * barW + gap / 2;
        const y = H - h;

        // Gradient per bar
        const grad = ctx.createLinearGradient(x, y, x, H);
        grad.addColorStop(0, `rgba(168,85,247,${0.85 + Math.sin(t * bar.speed + bar.phase) * 0.1})`);
        grad.addColorStop(0.5, "rgba(109,40,217,0.7)");
        grad.addColorStop(1, "rgba(109,40,217,0.15)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barW - gap, h, [3, 3, 0, 0]);
        ctx.fill();
      });

      // Overlay line chart at bottom
      ctx.beginPath();
      ctx.strokeStyle = "rgba(196,130,255,0.6)";
      ctx.lineWidth = 1.5;
      for (let x = 0; x <= W; x += 3) {
        const y =
          H * 0.88 +
          Math.sin((x / W) * Math.PI * 4 + t * 0.04) * H * 0.05 +
          Math.sin((x / W) * Math.PI * 8 + t * 0.02) * H * 0.025;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      t++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-[#0E0E13] min-h-screen flex flex-col items-center pt-32 pb-0 px-6 overflow-hidden"
    >
      {/* Text block */}
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-6 mb-14">
        <h1
          id="hero-heading"
          className="font-bold font-serif leading-tight m-0"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
        >
          <span className="text-white">Looom AI Unlocks </span>
          <span className="text-violet-400">Audit</span>
          <br />
          <span className="text-violet-400">Intelligence</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg leading-relaxed m-0 max-w-2xl">
          LOOOM AI automates documentation, risk analysis, advanced reporting, and testing,
          transforming audit teams from manual processors into strategic intelligence drivers.
          <br />
          Streamline workflows, enhance compliance, and reduce operational friction across audit
          lifecycles.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href="#contact"
            aria-label="Request a demo of LOOOM AI"
            className="px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-semibold text-sm tracking-wide no-underline transition-all duration-200"
          >
            Request Demo
          </a>
          <a
            href="#contact"
            aria-label="Book a consultation"
            className="px-8 py-3.5 rounded-xl border border-white/30 hover:border-white/60 hover:bg-white/5 active:scale-95 text-white font-semibold text-sm tracking-wide no-underline transition-all duration-200"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Dashboard mockup */}
      <div
        aria-label="LOOOM AI dashboard preview showing audit analytics"
        className="w-full max-w-5xl mx-auto rounded-t-2xl overflow-hidden border border-white/10 border-b-0"
        style={{ background: "#13121a" }}
      >
        {/* Fake browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="ml-3 flex-1 h-5 rounded bg-white/[0.04] max-w-[260px]" />
          <div className="flex gap-2 ml-auto">
            <div className="w-14 h-5 rounded bg-white/[0.04]" />
            <div className="w-14 h-5 rounded bg-white/[0.04]" />
            <div className="w-14 h-5 rounded bg-white/[0.04]" />
          </div>
        </div>

        {/* Dashboard header row */}
        <div className="px-6 pt-4 pb-2 flex items-center justify-between" aria-hidden="true">
          <div>
            <div className="w-32 h-4 rounded bg-white/10 mb-1.5" />
            <div className="w-20 h-3 rounded bg-white/[0.06]" />
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-7 rounded-lg bg-violet-600/40 border border-violet-500/30" />
            <div className="w-16 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
            <div className="w-16 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
          </div>
        </div>

        {/* Stat cards */}
        <div className="px-6 py-3 grid grid-cols-4 gap-3" aria-hidden="true">
          {["Audits Run", "Risk Flags", "Compliance %", "Reports"].map((label, i) => (
            <div key={label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
              <p className="text-white/30 text-[10px] font-sans m-0 mb-1">{label}</p>
              <p className="text-violet-300 text-base font-bold font-serif m-0">
                {["1,284", "47", "98.2%", "362"][i]}
              </p>
            </div>
          ))}
        </div>

        {/* Animated chart canvas */}
        <div className="px-6 pb-0">
          <canvas
            ref={canvasRef}
            className="w-full block"
            style={{ height: "260px" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}