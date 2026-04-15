import { UserPlus, Settings2, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    iconBg: "rgba(99,85,180,0.35)",
    iconColor: "#a78bfa",
    title: "Create Your Account",
    description: "Sign up to receive your secure LOOOM AI workspace.",
    link: "#register",
    linkLabel: "Register now →",
    highlighted: false,
  },
  {
    number: "02",
    icon: Settings2,
    iconBg: "rgba(20,80,90,0.5)",
    iconColor: "#5eead4",
    title: "Configure Your Environment",
    description: "Workflows, templates, and roles customized for your firm.",
    link: null,
    highlighted: false,
  },
  {
    number: "03",
    icon: Zap,
    iconBg: "rgba(255,255,255,0.18)",
    iconColor: "#1e1040",
    title: "Start Auditing Smarter",
    description: "Streamline documentation, reporting, and analytics immediately.",
    link: "#contact",
    linkLabel: "LAUNCH DASHBOARD",
    highlighted: true,
  },
];

export default function GettingStarted() {
  return (
    <section
      id="getting-started"
      aria-labelledby="getting-started-heading"
      className="bg-[#0E0E13] px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-14">

        {/* Heading */}
        <div>
          <p className="text-violet-500 text-xs font-bold font-sans tracking-[0.15em] m-0 mb-4">
            05
          </p>
          <h2
            id="getting-started-heading"
            className="font-bold font-serif m-0 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="text-white">Getting Started with </span>
            <span className="text-violet-400">LOOM AI</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map(({ number, icon: Icon, iconBg, iconColor, title, description, link, linkLabel, highlighted }) => (
            <article
              key={title}
              aria-label={`Step ${number}: ${title}`}
              className="relative rounded-2xl p-8 flex flex-col gap-0 overflow-hidden"
              style={
                highlighted
                  ? { background: "linear-gradient(145deg, #9f6ef5 0%, #6d42e8 50%, #3b28cc 100%)" }
                  : { background: "#16151c" }
              }
            >
              {/* Ghost step number */}
              <span
                className="absolute font-bold font-serif select-none pointer-events-none"
                style={{
                  fontSize: "clamp(6rem, 10vw, 8rem)",
                  color: highlighted ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)",
                  lineHeight: 1,
                  top: "0.1em",
                  right: "0.2em",
                }}
                aria-hidden="true"
              >
                {number}
              </span>

              {/* Icon tile */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mb-10"
                style={{ background: iconBg }}
                aria-hidden="true"
              >
                <Icon size={24} style={{ color: iconColor }} strokeWidth={1.75} />
              </div>

              {/* Title */}
              <h3
                className="font-bold font-serif m-0 mb-4 leading-tight"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  color: highlighted ? "#1a0e3a" : "#ffffff",
                }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed m-0 mb-8"
                style={{ color: highlighted ? "rgba(20,10,60,0.75)" : "rgba(255,255,255,0.45)" }}
              >
                {description}
              </p>

              {/* CTA */}
              {link && (
                <div className="mt-auto">
                  {highlighted ? (
                    <a
                      href={link}
                      aria-label={linkLabel}
                      className="inline-block w-full text-center py-4 rounded-xl font-bold text-xs tracking-[0.14em] uppercase no-underline transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={{ background: "#2d1270", color: "#fff" }}
                    >
                      {linkLabel}
                    </a>
                  ) : (
                    <a
                      href={link}
                      aria-label={linkLabel}
                      className="text-sm font-semibold no-underline transition-opacity duration-200 hover:opacity-70"
                      style={{ color: "#a78bfa" }}
                    >
                      {linkLabel}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}