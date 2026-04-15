
export default function EndorsementsSection() {
  return (
    <section
      id="endorsements"
      aria-labelledby="endorsements-heading"
      className="bg-[#0E0E13] px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-10">

        {/* Eyebrow */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-white/35 text-[11px] font-sans font-medium tracking-[0.25em] uppercase m-0">
            Endorsements
          </p>
          <h2
            id="endorsements-heading"
            className="text-white font-bold font-serif text-2xl md:text-3xl m-0"
          >
            Trusted by Forward-Thinking Firms
          </h2>
        </div>

        {/* Logos */}
        <div
          role="list"
          aria-label="Endorsed companies"
          className="flex flex-wrap items-center justify-center gap-10"
        >
          <img src="./waterfall.png" alt="WaterFall chambers logo" width={120}/>
          <img src="./xabacha 2.png" alt="Xabacha Logo" width={90}/>
        </div>

      </div>
    </section>
  );
}