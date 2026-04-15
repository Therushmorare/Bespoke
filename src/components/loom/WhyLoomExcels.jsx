import { useEffect, useRef, useState } from "react";
import { FileText, RefreshCw, ShieldCheck, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: FileText,
    iconBg: "#2d2040",
    iconColor: "#a78bfa",
    value: 80,
    suffix: "%",
    label: "Drafting Efficiency",
    color: "#a78bfa",
  },
  {
    icon: RefreshCw,
    iconBg: "#0f2e2e",
    iconColor: "#2dd4bf",
    value: 50,
    suffix: "%",
    label: "Shorter Review Cycles",
    color: "#2dd4bf",
  },
  {
    icon: ShieldCheck,
    iconBg: "#1a1f36",
    iconColor: "#818cf8",
    value: 40,
    suffix: "%",
    label: "Risk Mitigation",
    color: "#818cf8",
  },
  {
    icon: BadgeCheck,
    iconBg: "#2a1f3d",
    iconColor: "#c084fc",
    value: 100,
    suffix: "%",
    label: "Compliance Yield",
    color: "#c084fc",
  },
];

function AnimatedCounter({ target, suffix, color, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span
      className="font-bold font-serif leading-none"
      style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color }}
    >
      {count}{suffix}
    </span>
  );
}

export default function WhyLoomExcels() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-excels"
      ref={sectionRef}
      aria-labelledby="excels-heading"
      className="bg-[#0E0E13] px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">

        {/* Heading */}
        <div>
          <p className="text-violet-500 text-xs font-bold font-sans tracking-[0.15em] m-0 mb-4">03</p>
          <h2
            id="excels-heading"
            className="font-bold font-serif m-0"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="text-white">Why Loom </span>
            <span className="text-violet-400">Excels</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, iconBg, iconColor, value, suffix, label, color }) => (
            <article
              key={label}
              aria-label={`${value}${suffix} ${label}`}
              className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.14] transition-colors duration-300"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: iconBg }}
                aria-hidden="true"
              >
                <Icon size={20} style={{ color: iconColor }} strokeWidth={1.5} />
              </div>

              {/* Stat */}
              <div className="flex flex-col gap-2">
                <AnimatedCounter target={value} suffix={suffix} color={color} started={started} />
                <p
                  className="text-white/40 font-sans font-semibold m-0"
                  style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase" }}
                >
                  {label}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}