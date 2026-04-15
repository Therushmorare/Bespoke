import { Layers, EyeOff, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: Layers,
    iconColor: "#a78bfa",
    title: "Inefficient Workflow",
    description:
      "Manual processes are slow, inconsistent, and costly; holding teams back from delivering high-quality insights on time.",
  },
  {
    icon: EyeOff,
    iconColor: "#2dd4bf",
    title: "Limited Visibility",
    bullets: [
      "Routine documentation consumes hours of staff time",
      "Sampling limits analytical depth",
    ],
  },
  {
    icon: AlertCircle,
    iconColor: "#a78bfa",
    title: "Detection Gaps",
    description: "Risk detection often lacks consistency and coverage",
  },
];

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="bg-[#0E0E13] px-6 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
          <p className="text-violet-500 text-xs font-bold font-sans tracking-[0.15em] m-0">
            02
          </p>
          <h2
            id="problem-heading"
            className="font-bold font-serif m-0 leading-[1.05]"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            <span className="text-white block">Why</span>
            <span className="text-white block">Traditional</span>
            <span className="text-white block">Audits Fall</span>
            <span className="text-white/20 block">Behind</span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed m-0 max-w-sm">
            LOOOM AI replaces repetitive tasks with intelligent automation, giving your team
            the power to audit smarter, not harder.
          </p>
        </div>

        {/* problem cards */}
        <div className="flex flex-col gap-4">
          {problems.map(({ icon: Icon, iconColor, title, description, bullets }) => (
            <article
              key={title}
              aria-label={title}
              className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-5 hover:border-white/[0.12] transition-colors duration-300"
            >
              <Icon
                size={28}
                style={{ color: iconColor }}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-bold font-serif text-xl m-0">
                  {title}
                </h3>
                {description && (
                  <p className="text-white/50 text-sm leading-relaxed m-0">
                    {description}
                  </p>
                )}
                {bullets && (
                  <ul className="flex flex-col gap-1.5 m-0 p-0 list-none">
                    {bullets.map((b) => (
                      <li key={b} className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-white/20 mt-1 flex-shrink-0"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}