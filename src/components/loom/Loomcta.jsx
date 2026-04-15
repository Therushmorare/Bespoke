export default function LoomCTA() {
  return (
    <section
      id="loom-cta"
      aria-labelledby="loom-cta-heading"
      className="relative px-6 py-28 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, #2e1a4a 0%, #1a102e 40%, #0E0E13 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
        <h2
          id="loom-cta-heading"
          className="text-white font-bold font-serif m-0 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
        >
          Ready to See the Future of Audit?
        </h2>

        <a
          href="#contact"
          aria-label="Schedule a consultation for LOOOM AI"
          className="px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-semibold text-sm tracking-wide no-underline transition-all duration-200"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}