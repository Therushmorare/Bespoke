export default function MapSection() {
  const address = "Unit H22, Workpods, 1024 Brand Road, President Park AH, Midrand, 1686, South Africa";
  const encodedAddress = encodeURIComponent(address);
  const embedSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=15&output=embed&iwloc=near`;

  return (
    <section
      id="map"
      aria-label="Office location map"
      className="bg-[#0E0E13] px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Label */}
        <div className="mb-6">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans m-0">
            Our Location
          </p>
        </div>

        {/* Map embed */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/[0.07]" style={{ height: "380px" }}>
          <iframe
            title="Bespoke Solutech office location — Midrand, South Africa"
            src={embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Map showing Bespoke Solutech office in Midrand, South Africa"
          />
        </div>

        {/* Address strip below map */}
        <div className="mt-4 flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-white/45 text-sm font-sans m-0">
            Unit H22, Workpods, 1024 Brand Road, President Park AH, Midrand, 1686, South Africa
          </p>
        </div>

      </div>
    </section>
  );
}