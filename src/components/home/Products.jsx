import {
  ShieldCheck,
  BarChart2,
  Eye,
  Database,
  LayoutGrid,
  ArrowUpRight,
  Globe
} from "lucide-react";

const reasons = [
  {
    icon: LayoutGrid,
    title: "AssetVault ",
    description:
      "An intelligent asset management and verification platform enabling organisations to track physical assets, monitor movements, conductverification and identify anomalies.",
    stat: "LAUNCHING SOON",
  },
  {
    icon: Globe,
    title: "Impact 360",
    description:
      "An AI-enabled ESG management and reporting platform helping organisations define, capture, monitor and report environmental, social and governance performance.",
    stat: "IN DEVELOPMENT",
  },
  {
    icon: BarChart2,
    title: "AssetVault ",
    description:
      "An intelligent asset management and verification platform enabling organisations to track physical assets, monitor movements, conductverification and identify anomalies.",
    stat: "LAUNCHING SOON",
  },
  {
    icon: Eye,
    title: "Transparent Governance",
    description:
      "Clear reporting and governance structures that keep stakeholders fully informed and confident in operational decisions.",
    stat: "Full visibility",
  },
  {
    icon: Database,
    title: "Scalable Infrastructure",
    description:
      "Enterprise-grade digital infrastructure and cloud solutions designed to scale securely with your business growth.",
    stat: "Enterprise-grade",
  },
];

export default function PlatformProducts() {
  const [primary, ...rest] = reasons;

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className="relative bg-[#0E0E13] px-6 py-24 lg:py-32 overflow-hidden"
    >
      {/*  glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/[0.07] blur-[130px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Remaining cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map(({ icon: Icon, title, description, stat }) => (
            <article
              key={title}
              aria-label={title}
              className="group bg-[#16151c] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-5 hover:border-violet-600/30 transition-colors duration-300 overflow-hidden relative"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08), transparent 70%)",
                }}
              />

              <div className="relative flex flex-col gap-5 flex-1">
                <div
                  className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon
                    size={20}
                    className="text-violet-400"
                    strokeWidth={1.75}
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-white font-bold text-sm font-serif m-0 leading-snug">
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed m-0">
                    {description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-violet-400/70 text-xs font-semibold tracking-[0.15em] uppercase">
                    {stat}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
