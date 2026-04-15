import { ShieldCheck, Lock } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    iconColor: "#2dd4bf",
    iconBg: "#0f2e2e",
    title: "Regulatory Compliance",
    description: "Aligned with COBIT, ISA, King IV, and IFRS frameworks.",
    link: "#compliance",
    linkLabel: "Learn about compliance →",
    linkColor: "#2dd4bf",
  },
  {
    icon: Lock,
    iconColor: "#a78bfa",
    iconBg: "#2d2040",
    title: "Data Security",
    description: "Enterprise-grade encryption, GDPR-ready, role-based access control.",
    link: "#security",
    linkLabel: "View security protocols →",
    linkColor: "#a78bfa",
  },
];

export default function ComplianceSecurity() {
  return (
    <section
      id="compliance-security"
      aria-labelledby="compliance-heading"
      className="bg-[#0E0E13] px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">

        {/* Heading */}
        <div>
          <p className="text-violet-500 text-xs font-bold font-sans tracking-[0.15em] m-0 mb-4">
            04
          </p>
          <h2
            id="compliance-heading"
            className="font-bold font-serif m-0"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="text-white">Compliance &amp; </span>
            <span className="text-violet-400">Security</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, iconColor, iconBg, title, description, link, linkLabel, linkColor }) => (
            <article
              key={title}
              aria-label={title}
              className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-6 hover:border-white/[0.14] transition-colors duration-300"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: iconBg }}
                aria-hidden="true"
              >
                <Icon size={20} style={{ color: iconColor }} strokeWidth={1.75} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold font-serif text-xl m-0">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed m-0">
                  {description}
                </p>
              </div>

              {/* Link */}
              <a
                href={link}
                aria-label={`${linkLabel} — ${title}`}
                className="text-sm font-medium no-underline transition-opacity duration-200 hover:opacity-70 w-fit mt-auto"
                style={{ color: linkColor }}
              >
                {linkLabel}
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}