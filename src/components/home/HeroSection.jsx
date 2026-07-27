import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    let animFrameId;
    let t = 0;
    let isVisible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const streamLines = Array.from({ length: 20 }, (_, i) => ({
      offset: (i / 20) * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.002,
      width: 1 + Math.random() * 2.5,
      color: i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#7dd3fc" : "#c084fc",
      alpha: 0.2 + Math.random() * 0.25,
      amp: 60 + Math.random() * 120,
      freq: 0.5 + Math.random() * 1.5,
      yBase: (i / 20) * 1.4 - 0.2,
    }));

    const draw = () => {
      if (!isVisible) {
        animFrameId = requestAnimationFrame(draw);
        return;
      }

      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

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

        for (let x = -20; x <= W + 20; x += 3) {
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
        ctx.globalAlpha = 1;
      });

      t++;
      animFrameId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(section);

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Bespoke Solutech — Digital Solutions, Professionally Operated"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1a2e]"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block bg-[#1a1a2e] will-change-transform translate-z-0 absolute inset-0 w-full h-full"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20256%20256%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noise%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.9%27%20numOctaves%3D%274%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noise)%27%20opacity%3D%271%27%2F%3E%3C%2Fsvg%3E')] bg-[length:200px_200px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(10,10,28,0.65)_0%,transparent_100%)]"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto pt-[68px]">

        <h1
          className="font-bold leading-[1.05] mb-8 w-full text-[clamp(2.75rem,6vw,5rem)] [-letter-spacing:0.02em]"
        >
          <span aria-hidden="true">
            <span className="block text-white">Digital</span>
            <span className="block text-[#a78bfa]">Solutions,</span>
            <span className="block text-white">Professionally</span>
            <span className="block text-white">Operated.</span>
          </span>
          <span className="sr-only">Digital Solutions, Professionally Operated.</span>
        </h1>

        <p className="text-base md:text-lg max-w-xl mb-12 leading-relaxed text-white/[0.82]">
          Bespoke Solutech operates and manages digital products and services for businesses and
          organisations requiring professional-grade support.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#consultation"
            className="flex px-8 py-3.5 bg-violet-600 text-white rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-violet-500 active:scale-95 no-underline"
            aria-label="Request a consultation with Bespoke Solutech"
          >
            Request Consultation
          </a>
          <a
            href="#products"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 active:scale-95 border-[1.5px] border-white/60 text-white no-underline"
            aria-label="Explore Bespoke Solutech's digital solutions"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}