import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="consultation"
      aria-labelledby="cta-heading"
      className="bg-[#260247] px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center gap-6">

        <h2
          id="cta-heading"
          className="text-white font-bold font-serif m-0 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Ready to Get Started?
        </h2>

        <p className="text-white/65 text-base md:text-lg leading-relaxed m-0 max-w-xl">
          Unlock your business potential with Bespoke Solutech. Our team is
          dedicated to providing high-quality solutions tailored to your unique
          requirements.
        </p>

        <a
          href="#contact"
          aria-label="Request a consultation with Bespoke Solutech"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-semibold text-base tracking-wide no-underline transition-all duration-200 mt-2"
        >
          Request Consultation
          <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
        </a>

      </div>
    </section>
  );
}