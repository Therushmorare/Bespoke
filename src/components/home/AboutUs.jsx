import { Target, Eye, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "ZA", label: "South African Built" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-[#0E0E13] px-6 py-24 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-fuchsia-600/[0.06] blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-20 items-start">

          {/*  about us */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase m-0">
                About Bespoke Solutech
              </p>
              <h2
                id="about-heading"
                className="text-white font-bold font-serif m-0 leading-[1.1]"
                style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
              >
                We operate digital
                <br />
                products, not just build them.
              </h2>
            </div>

            <div className="flex flex-col gap-4 max-w-xl">
              <p className="text-white/70 text-base leading-relaxed m-0">
                Bespoke Solutech is a digital solutions company that operates and manages
                digital products and services for businesses and organisations — long after
                launch day.
              </p>
              <p className="text-white/70 text-base leading-relaxed m-0">
                We focus on delivering reliable, professionally run digital solutions with
                clear accountability and long-term support, spanning software, digital
                platforms, and technology-enabled services.
              </p>
            </div>

            {/* Stats row */}
            <dl className="flex flex-wrap gap-x-10 gap-y-6 pt-2 border-t border-white/[0.07]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 pt-6">
                  <dt className="text-white/40 text-xs tracking-[0.15em] uppercase order-2">
                    {stat.label}
                  </dt>
                  <dd className="text-white font-bold font-serif text-2xl md:text-3xl m-0 order-1">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#products"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-semibold no-underline transition-colors duration-200 w-fit"
              aria-label="See what Bespoke Solutech builds and operates"
            >
              See what we operate
              <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>

          {/* mission/vision */}
          <div className="flex flex-col gap-6">
            <div className="relative bg-gradient-to-br from-[#1d1a2b] to-[#16151c] border border-white/[0.08] rounded-3xl p-8 lg:p-10 min-h-[280px] flex items-center justify-center overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 70% 20%, rgba(124,58,237,0.25), transparent 60%)",
                }}
              />
              <img
                src="/Cloud.png"
                alt="Cloud and digital infrastructure illustration representing Bespoke Solutech's managed digital operations"
                className="relative w-full max-w-[320px] h-auto object-contain"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <article
                aria-label="Our Mission"
                className="bg-[#16151c] rounded-2xl p-6 flex flex-col gap-3 border border-white/[0.07] hover:border-violet-600/30 transition-colors duration-300"
              >
                <Target size={22} className="text-violet-500" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="text-white text-sm font-bold tracking-[0.15em] uppercase m-0">
                  Mission
                </h3>
                <p className="text-white/60 text-sm leading-relaxed m-0">
                  To operate and scale digital products with professionalism, accountability,
                  and long-term commercial discipline.
                </p>
              </article>

              <article
                aria-label="Our Vision"
                className="bg-[#16151c] rounded-2xl p-6 flex flex-col gap-3 border border-white/[0.07] hover:border-violet-600/30 transition-colors duration-300"
              >
                <Eye size={22} className="text-violet-500" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="text-white text-sm font-bold tracking-[0.15em] uppercase m-0">
                  Vision
                </h3>
                <p className="text-white/60 text-sm leading-relaxed m-0">
                  To become a trusted digital operator known for running reliable, scalable,
                  and responsibly managed solutions.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}