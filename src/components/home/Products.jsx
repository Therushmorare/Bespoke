import { ShieldCheck, BarChart2, Eye, Database, LayoutGrid, ArrowUpRight } from "lucide-react";

const reasons = [
  {
    icon: LayoutGrid,
    title: "Professional Digital Product Management",
    description:
      "End-to-end operational management of your digital products and services, with structured oversight and clear accountability at every stage.",
    stat: "End-to-end",
  },
  {
    icon: ShieldCheck,
    title: "Operational Discipline & Accountability",
    description:
      "Clear accountability frameworks ensuring every digital solution is professionally supported, monitored, and continuously improved.",
    stat: "Always-on",
  },
  {
    icon: BarChart2,
    title: "Commercial Sustainability",
    description:
      "Long-term technical and commercial sustainability built into every solution we operate and manage for our clients.",
    stat: "Long-term",
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

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase m-0 mb-4">
              Why Partner With Us
            </p>
            <h2
              id="why-heading"
              className="text-white font-bold font-serif m-0 leading-[1.1]"
              style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
            >
              Built for reliability,<br />not just delivery.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-semibold no-underline transition-colors duration-200 shrink-0"
            aria-label="Get in touch with Bespoke Solutech"
          >
            Get in touch
            <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        {/* Featured card */}
        <div className="mb-5">
          <article
            aria-label={primary.title}
            className="relative bg-gradient-to-br from-[#1d1a2b] to-[#16151c] border border-violet-600/25 rounded-3xl p-8 lg:p-10 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.25), transparent 65%)",
              }}
            />
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0" aria-hidden="true">
                    <primary.icon size={22} className="text-violet-400" strokeWidth={1.75} />
                  </div>
                  <span className="text-violet-300/70 text-xs font-semibold tracking-[0.2em] uppercase">
                    Core Capability
                  </span>
                </div>
                <h3 className="text-white font-bold font-serif text-2xl lg:text-3xl m-0 leading-snug">
                  {primary.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed m-0 max-w-xl">
                  {primary.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="text-violet-300 font-bold font-serif text-5xl lg:text-6xl tracking-tight opacity-80 whitespace-nowrap">
                  {primary.stat}
                </div>
              </div>
            </div>
          </article>
        </div>

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
                <div className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center" aria-hidden="true">
                  <Icon size={20} className="text-violet-400" strokeWidth={1.75} />
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