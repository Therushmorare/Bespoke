import { useState } from "react";
import { MapPin, Clock, Navigation } from "lucide-react";

const offices = [
  {
    id: "main",
    label: "Waterfall Chartered Accountants Chambers Offices",
    lines: [
      "Allandale Building, Office C, First Floor",
      "23 Magwa Crescent",
      "Waterfall City, 2090",
      "Gauteng, South Africa",
    ],
    address:
      "Allandale Building, 23 Magwa Crescent, Waterfall City, 2090, Gauteng, South Africa",
  },
  {
    id: "second",
    label: "Bespoke Solutech",
    lines: [
      "Unit H22, Workpods, 1024 Brand Road",
      "President Park AH",
      "Midrand, 1686",
      "Gauteng, South Africa",
    ],
    address:
      "Unit H22, Workpods, 1024 Brand Road, President Park AH, Midrand, 1686, South Africa",
  },
];

const extras = [
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday, 08:00 – 17:00 SAST",
  },
  {
    icon: Navigation,
    label: "Region",
    value: "Waterfall City & Midrand, Gauteng, South Africa",
  },
];

const mapSrc = (address) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=m&z=15&output=embed&iwloc=near`;

export default function MapSection() {
  const [activeId, setActiveId] = useState("main");
  const active = offices.find((o) => o.id === activeId) ?? offices[0];

  return (
    <section
      id="map"
      aria-labelledby="map-heading"
      className="relative bg-[#0E0E13] px-6 py-24 lg:py-32 overflow-hidden"
    >
      {/*  glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase m-0 mb-4">
            Find Us
          </p>
          <h2
            id="map-heading"
            className="text-white font-bold font-serif m-0 leading-[1.1]"
            style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}
          >
            Our Locations
          </h2>
          <div
            className="w-12 h-[3px] bg-violet-600 rounded-full mt-4"
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 items-start">
          {/* detail cards */}
          <div className="flex flex-col gap-4">
            {/* Office address cards */}
            {offices.map((office) => {
              const isActive = office.id === activeId;
              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveId(office.id)}
                  aria-pressed={isActive}
                  aria-label={`Show ${office.label} on the map`}
                  className={`text-left w-full bg-[#16151c] rounded-2xl p-5 flex items-start gap-4 transition-colors duration-300 border ${
                    isActive
                      ? "border-violet-500/60 ring-1 ring-violet-500/30"
                      : "border-white/[0.07] hover:border-violet-600/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${
                      isActive
                        ? "bg-violet-600/25 border-violet-500/40"
                        : "bg-violet-600/15 border-violet-500/20"
                    }`}
                    aria-hidden="true"
                  >
                    <MapPin
                      size={18}
                      className="text-violet-400"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/35 text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2">
                      {office.label}
                      {isActive && (
                        <span className="text-violet-400 text-[0.65rem] tracking-normal normal-case font-medium">
                          • On map
                        </span>
                      )}
                    </span>
                    <p className="text-white/75 text-sm leading-relaxed m-0">
                      {office.lines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Non-selectable info cards */}
            {extras.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-5 flex items-start gap-4 hover:border-violet-600/30 transition-colors duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Icon
                    size={18}
                    className="text-violet-400"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white/35 text-xs font-semibold tracking-[0.15em] uppercase">
                    {label}
                  </span>
                  <p className="text-white/75 text-sm leading-relaxed m-0">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* map embed */}
          <div className="flex flex-col gap-3">
            <div
              className="bg-[#16151c] border border-white/[0.07] rounded-2xl overflow-hidden"
              style={{ height: "420px" }}
            >
              <iframe
                key={active.id}
                title={`Bespoke Solutech ${active.label} location — ${active.lines[active.lines.length - 2]}`}
                src={mapSrc(active.address)}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label={`Google Map showing Bespoke Solutech ${active.label} in South Africa`}
              />
            </div>

            {/* Directions link for the active office */}
            {/* <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                active.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-violet-400 hover:text-violet-300 text-sm font-semibold no-underline transition-colors duration-200 px-1"
              aria-label={`Get directions to Bespoke Solutech ${active.label} on Google Maps`}
            >
              Get directions to {active.label}
              <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}