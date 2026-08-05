import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const JSONLD_ID = "bespoke-localbusiness-jsonld";

const offices = [
  {
    label: "Main Office",
    lines: [
      "Allandale Building, Office C, First Floor",
      "23 Magwa Crescent",
      "Waterfall City, 2090",
      "Gauteng, South Africa",
    ],
  },
  {
    label: "Second Office",
    lines: [
      "Unit H22, Workpods, 1024 Brand Road",
      "President Park AH",
      "Midrand, 1686",
      "Gauteng, South Africa",
    ],
  },
];

export default function ContactHomeSection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (document.getElementById(JSONLD_ID)) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = JSONLD_ID;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Bespoke Solutech",
      "description": "Bespoke Solutech operates and manages digital products and services for businesses and organisations requiring professional-grade support.",
      "url": "https://www.bespokesolutech.co.za",
      "telephone": "+27108807341",
      "email": "sales@bespokesolutech.co.za",
      // Primary  office
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Allandale Building, Office C, First Floor, 23 Magwa Crescent",
        "addressLocality": "Waterfall City, Midrand",
        "addressRegion": "Gauteng",
        "postalCode": "2090",
        "addressCountry": "ZA"
      },
      // Additional office
      "location": [
        {
          "@type": "Place",
          "name": "Bespoke Solutech — Midrand Office",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit H22, Workpods, 1024 Brand Road, President Park AH",
            "addressLocality": "Midrand",
            "addressRegion": "Gauteng",
            "postalCode": "1686",
            "addressCountry": "ZA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.9989,
            "longitude": 28.1278
          }
        }
      ],
      "areaServed": "South Africa"
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById(JSONLD_ID)?.remove();
    };
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#0E0E13] px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Section heading */}
        <div className="mb-12">
          <h2
            id="contact-heading"
            className="text-white font-bold font-serif text-3xl md:text-4xl m-0"
          >
            Contact Us
          </h2>
          <div className="w-12 h-[3px] bg-violet-600 rounded-full mt-3" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* contact info */}
          <div className="flex flex-col gap-6">
            {/* Get in touch  */}
            <div className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-6">
              <h3 className="text-white font-bold font-serif text-lg m-0 mb-5">
                Get in Touch
              </h3>
              <ul className="flex flex-col gap-4 list-none m-0 p-0" aria-label="Contact details">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-md bg-violet-900/40 border border-violet-700/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Mail size={15} className="text-violet-400" strokeWidth={2} />
                  </span>
                  <a
                    href="mailto:sales@bespokesolutech.co.za"
                    className="text-white/70 text-sm hover:text-violet-400 transition-colors duration-200 no-underline"
                    aria-label="Email Bespoke Solutech"
                  >
                    sales@bespokesolutech.co.za
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-md bg-violet-900/40 border border-violet-700/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone size={15} className="text-violet-400" strokeWidth={2} />
                  </span>
                  <a
                    href="tel:+27108807341"
                    className="text-white/70 text-sm hover:text-violet-400 transition-colors duration-200 no-underline"
                    aria-label="Call Bespoke Solutech"
                  >
                    010 880 7341
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-md bg-violet-900/40 border border-violet-700/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <MapPin size={15} className="text-violet-400" strokeWidth={2} />
                  </span>
                  <span className="text-white/70 text-sm">Waterfall City &amp; Midrand, South Africa</span>
                </li>
              </ul>
            </div>

            {/* Office address cards */}
            <address
              className="not-italic grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
              aria-label="Office addresses"
            >
              {offices.map(({ label, lines }) => (
                <div
                  key={label}
                  className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-1.5 hover:border-violet-600/30 transition-colors duration-300"
                >
                  <p className="text-violet-400/90 text-[11px] font-semibold tracking-[0.1em] uppercase m-0 mb-1.5">
                    {label}
                  </p>
                  {lines.map((line) => (
                    <p key={line} className="text-white/50 text-sm m-0 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </address>
          </div>

          {/* contact form  */}
          <div className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-7 h-full">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 h-full min-h-[320px] text-center">
                <div className="w-12 h-12 rounded-full bg-violet-900/50 flex items-center justify-center">
                  <Mail size={22} className="text-violet-400" />
                </div>
                <h3 className="text-white font-semibold text-lg m-0">Message sent!</h3>
                <p className="text-white/50 text-sm m-0">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-label="Contact form"
                className="flex flex-col gap-4 h-full"
              >
                {[
                  { id: "name", name: "name", type: "text", placeholder: "Your Name", required: true },
                  { id: "company", name: "company", type: "text", placeholder: "Company", required: false },
                  { id: "email", name: "email", type: "email", placeholder: "Email Address", required: true },
                ].map(({ id, name, type, placeholder, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className="sr-only">{placeholder}</label>
                    <input
                      id={id}
                      name={name}
                      type={type}
                      required={required}
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0E0E13] border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200"
                    />
                  </div>
                ))}

                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full flex-1 min-h-[140px] px-4 py-3 rounded-lg bg-[#0E0E13] border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-[.98] text-white font-semibold text-sm tracking-wide transition-all duration-200"
                  aria-label="Send message to Bespoke Solutech"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}