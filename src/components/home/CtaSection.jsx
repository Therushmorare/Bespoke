import { ArrowRight, Mail, Phone } from "lucide-react";

const quickLinks = [
  { icon: Mail,  label: "sales@bespokesolutech.co.za", href: "mailto:sales@bespokesolutech.co.za" },
  { icon: Phone, label: "010 880 7341",                href: "tel:+27108807341" },
];

export default function CTASection() {
  return (
    <section
      id="consultation"
      aria-labelledby="cta-heading"
      className="relative bg-[#0E0E13] px-6 py-24 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">

          {/* Left: heading + copy */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase m-0">
              Let's Work Together
            </p>

            <div>
              <h2
                id="cta-heading"
                className="text-white font-bold font-serif m-0 leading-[1.1]"
                style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
              >
                Ready to operate your digital products at a higher level?
              </h2>
              <div className="w-12 h-[3px] bg-violet-600 rounded-full mt-4" aria-hidden="true" />
            </div>

            <p className="text-white/60 text-base leading-relaxed m-0">
              Reach out and our team will put together a consultation tailored to your
              business, no generic pitches, no unnecessary overhead.
            </p>

            {/* Quick contact */}
            <ul className="flex flex-col sm:flex-row gap-4 list-none m-0 p-0">
              {quickLinks.map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2.5 text-white/50 text-sm hover:text-violet-400 transition-colors duration-200 no-underline"
                  >
                    <Icon size={14} className="text-violet-500 shrink-0" strokeWidth={2} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: action card */}
          <div className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-6 min-w-[280px] hover:border-violet-600/30 transition-colors duration-300">
            <div className="flex flex-col gap-2">
              <p className="text-white font-bold font-serif text-lg m-0">Book a Consultation</p>
              <p className="text-white/45 text-sm m-0 leading-relaxed">
                Free, no-commitment discovery call with our team.
              </p>
            </div>

            <a
              href="#contact"
              aria-label="Request a consultation with Bespoke Solutech"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-semibold text-sm tracking-wide no-underline transition-all duration-200"
            >
              Request Consultation
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>

            <p className="text-white/25 text-xs text-center m-0">
              No commitment required
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}