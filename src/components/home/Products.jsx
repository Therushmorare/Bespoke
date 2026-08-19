import {
  BarChart2,
  Eye,
  Database,
  LayoutGrid,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: LayoutGrid,
    title: "AssetVault",
    eyebrow: "ASSET MANAGEMENT AND VERIFICATION",
    description:
      "An intelligent asset management and verification platform enabling organisations to track physical assets, monitor movements, conduct verification and identify anomalies.",
    stat: "LAUNCHING SOON",
    capabilities: [
      "Asset tracking",
      "Movement monitoring",
      "Asset verification",
      "Anomaly identification",
    ],
  },
  {
    icon: Globe,
    title: "Impact 360",
    eyebrow: "ESG MANAGEMENT AND REPORTING",
    description:
      "An AI-enabled ESG management and reporting platform helping organisations define, capture, monitor and report environmental, social and governance performance.",
    stat: "IN DEVELOPMENT",
    capabilities: [
      "ESG data capture",
      "Performance monitoring",
      "Materiality management",
      "ESG reporting",
    ],
  },
  {
    icon: BarChart2,
    title: "AssetVault",
    eyebrow: "ASSET MANAGEMENT AND VERIFICATION",
    description:
      "An intelligent asset management and verification platform enabling organisations to track physical assets, monitor movements, conduct verification and identify anomalies.",
    stat: "LAUNCHING SOON",
    capabilities: [
      "Asset registers",
      "Verification workflows",
      "Movement history",
      "Exception monitoring",
    ],
  },
  {
    icon: Eye,
    title: "Talently",
    eyebrow: "TALENT ACQUISITION AND MANAGEMENT",
    description:
      "A smart talent acquisition and management platform that helps recruiters identify, assess and match suitable candidates with organisational opportunities.",
    stat: "AVAILABLE",
    capabilities: [
      "Candidate sourcing",
      "Candidate assessment",
      "Opportunity matching",
      "Talent management",
    ],
  },
  {
    icon: Database,
    title: "SetaSync",
    eyebrow: "SETA FUNDING AND PLACEMENT MANAGEMENT",
    description:
      "A SETA funding, student and workplace-placement management platform supporting the complete student-to-organisation workflow in one connected environment.",
    stat: "AVAILABLE",
    capabilities: [
      "Funding-window administration",
      "Student registration",
      "Host-company management",
      "Workplace placements",
      "Agreement and document tracking",
      "Stipend and progress monitoring",
    ],
  },
];

export default function PlatformProducts() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className=" bg-[#0E0E13]  px-6 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl ">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {reasons.map(
            ({ icon: Icon, title, eyebrow, description, stat, capabilities }) => (
              <article
                key={`${title}-${eyebrow}`}
                aria-label={title}
                className="relative overflow-hidden bg-[#16151c] border border-white/[0.07] hover:border-violet-600/30 transition-colors duration-300 px-7 pb-8 pt-9 shadow-sm sm:px-9 rounded-2xl"
              >
            
                {/* Icon + status */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <Icon
                    size={29}
                    strokeWidth={1.7}
                    className="text-[#6757ff]"
                    aria-hidden="true"
                  />

                  <span className="bg-emerald-50 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-emerald-700">
                    {stat}
                  </span>
                </div>

                {/* Product heading */}
                <h3 className="m-0 text-3xl font-bold tracking-tight text-white">
                  {title}
                </h3>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6757ff]">
                  {eyebrow}
                </p>

                <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/50">
                  {description}
                </p>

                <div className="my-6 h-px bg-slate-200" />

                {/* Capabilities */}
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Key Capabilities
                </p>

                <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <p
                      key={capability}
                      className="m-0 text-sm font-medium leading-5 text-white"
                    >
                      {capability}
                    </p>
                  ))}
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
