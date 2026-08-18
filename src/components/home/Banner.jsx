import { ShieldCheck, Zap, Globe, Clock, Lock, BarChart2 } from "lucide-react";

const pillars = [
  { icon:  Globe, label: "Loom Ai" },
  { icon: Globe,  label: "SiteIQ" },
  { icon: Globe,  label: "Talently" },
  { icon: Globe,  label: "SetaSync" },
  { icon: Globe,  label: "SiteIQ" },
  { icon: Clock,  label: "Impact360" },
  { icon: Globe,  label: "Grant4Me" },
  { icon: Globe,  label: "The Feed" },
  { icon: Globe,  label: "Bid Bridge" },
  { icon: Globe,  label: "Approve It" },
  { icon: Globe,  label: "Asset Vault" },
];

//infinite scroll
const track = [...pillars, ...pillars, ...pillars, ...pillars];

export default function Banner() {
  return (
    <div
      aria-label="Bespoke Solutech operational pillars"
      className="relative bg-[#0E0E13] py-10 overflow-hidden border-y border-white/[0.06]"
    >
      {/* Fade masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10"
        style={{
          background: "linear-gradient(to right, #0E0E13 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10"
        style={{
          background: "linear-gradient(to left, #0E0E13 0%, transparent 100%)",
        }}
      />

      {/* Scrolling track */}
      <div
        aria-hidden="true"
        className="flex gap-8 w-max"
        style={{
          animation: "bannerScroll 28s linear infinite",
        }}
      >
        {track.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#16151c] border border-white/[0.07] shrink-0"
          >
            <Icon size={16} className="text-violet-400" strokeWidth={1.75} aria-hidden="true" />
            <span className="text-white/70 text-sm font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>

      {/* Keyframe */}
      <style>{`
        @keyframes bannerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="bannerScroll"] { animation: none; }
        }
      `}</style>
    </div>
  );
}