import { Brain, FileText, Database, Workflow, ShieldCheck, BarChart2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    iconBg: "#3b2f5e",
    iconColor: "#a78bfa",
    title: "AI Audit Assistant",
    description:
      "Draft, review, refine, and validate audit documentation with AI that checks your work, detects risks, and ensures audit quality.",
  },
  {
    icon: FileText,
    iconBg: "#1e3a4a",
    iconColor: "#38bdf8",
    title: "Advanced Reporting",
    description:
      "Full-population testing uncovers exceptions and insights traditional methods miss. Designed for auditors, not data scientists.",
  },
  {
    icon: Database,
    iconBg: "#2a2a3e",
    iconColor: "#818cf8",
    title: "Knowledge Hub",
    description:
      "A centralized library that combines firm methodologies, templates, and insights with global frameworks, regulations, and best practices.",
  },
  
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="bg-[#0E0E13] px-6 pt-20 pb-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Section number + heading */}
        <div className="mb-20">
          <p className="text-violet-500 text-xs font-bold font-sans tracking-[0.15em] m-0 mb-5">
            01
          </p>
          <h2
            id="ecosystem-heading"
            className="font-bold font-serif m-0 leading-[1.0]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          >
            <span className="text-white">Why choose </span>
            <span className="text-violet-400">Loom AI</span>
            <span className="text-white">?</span>
          </h2>
        </div>

        {/* Feature cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-x divide-white/[0.07] border-t border-l border-white/[0.07]">
          {features.map(({ icon: Icon, iconBg, iconColor, title, description }) => (
            <article
              key={title}
              aria-label={title}
              className="border-r border-b border-white/[0.07] px-8 pt-10 pb-12 flex flex-col gap-0 hover:bg-white/[0.02] transition-colors duration-300"
            >
              {/* Icon tile */}
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0 mb-8"
                style={{ background: iconBg }}
                aria-hidden="true"
              >
                <Icon size={22} style={{ color: iconColor }} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold font-serif text-xl m-0 mb-4 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed m-0">
                {description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}