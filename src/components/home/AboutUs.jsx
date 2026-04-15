export default function AboutUs() {
  return (
    <section
      id="about"
      aria-label="About Bespoke Solutech — Mission and Vision"
      className="bg-[#0E0E13] min-h-screen px-6 pt-10 pb-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* heading, body, cards */}
        <div className="flex flex-col gap-8">

          {/* Heading + violet underline */}
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-bold font-serif text-4xl m-0">About Us</h1>
            <div className="w-16 h-[3px] bg-violet-600 rounded-full" aria-hidden="true" />
          </div>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-4">
            <p className="text-white/70 text-[15px] leading-relaxed m-0">
              Bespoke Solutech is a digital solutions company that operates and manages
              digital products and services for businesses and organisations.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed m-0">
              We focus on delivering reliable, professionally run digital solutions with clear
              accountability and long-term support.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed m-0">
              Our work spans software, digital platforms, and technology-enabled services,
              prioritising operational discipline, transparency, and performance.
            </p>
          </div>

          {/* Mission + Vision cards */}
          <div className="flex flex-col sm:flex-row gap-5">
            <article
              aria-label="Our Mission"
              className="flex-1 bg-[#18171f] rounded-2xl p-6 flex flex-col gap-3 border border-white/5"
            >
              <h2 className="text-violet-400 text-xs font-bold tracking-[0.2em] uppercase m-0">
                Mission
              </h2>
              <p className="text-white/80 text-sm leading-relaxed m-0">
                To operate and scale digital products with professionalism,
                accountability, and long-term commercial discipline.
              </p>
            </article>

            <article
              aria-label="Our Vision"
              className="flex-1 bg-[#18171f] rounded-2xl p-6 flex flex-col gap-3 border border-white/5"
            >
              <h2 className="text-violet-400 text-xs font-bold tracking-[0.2em] uppercase m-0">
                Vision
              </h2>
              <p className="text-white/80 text-sm leading-relaxed m-0">
                To become a trusted digital operator known for running reliable,
                scalable, and responsibly managed solutions.
              </p>
            </article>
          </div>
        </div>

        {/* Cloud illustration in a card */}
        <div
          aria-label="Cloud and gears illustration representing digital operations"
          className="flex items-start justify-center lg:justify-end pt-2"
        >
          <div className="w-full max-w-[520px] bg-[#18171f] border border-white/5 rounded-3xl p-8 flex items-center justify-center min-h-[380px]">
            <img
              src="./Cloud.png"
              alt="Cloud + Gears illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}