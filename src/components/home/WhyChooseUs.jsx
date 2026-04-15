import { ShieldCheck, BarChart2, Eye, Database, LayoutGrid } from "lucide-react";

const reasons = [
  {
    icon: LayoutGrid,
    title: "Professional Digital Product Management",
    description:
      "End-to-end operational management of your digital products with structured oversight.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Discipline & Accountability",
    description:
      "Clear accountability frameworks ensuring every solution is professionally supported.",
  },
  {
    icon: BarChart2,
    title: "Commercial Sustainability",
    description:
      "Long-term technical and commercial sustainability for every solution we manage.",
  },
  {
    icon: Eye,
    title: "Transparent Governance",
    description:
      "Clear reporting and governance structures that keep stakeholders informed.",
  },
  {
    icon: Database,
    title: "Scalable Infrastructure",
    description:
      "Enterprise-grade digital infrastructure designed to grow with your business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className="bg-[#0E0E13] px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="mb-12">
          <h2
            id="why-heading"
            className="text-white font-bold font-serif m-0 text-3xl md:text-4xl"
          >
            Why Choose Us
          </h2>
          <div className="w-12 h-[3px] bg-violet-600 rounded-full mt-3" aria-hidden="true" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              aria-label={title}
              className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-violet-600/30 transition-colors duration-300"
            >
              {/* Icon  */}
              <div aria-hidden="true">
                <Icon size={32} className="text-violet-500" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base font-serif m-0 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed m-0">
                {description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}