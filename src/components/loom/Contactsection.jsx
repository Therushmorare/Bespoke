import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactLoomSection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

         {/* Heading */}
        <div>
          <p className="text-violet-500 text-xs font-bold font-sans tracking-[0.15em] m-0 mb-4">
            06
          </p>
          <h2
            id="getting-started-heading"
            className="font-bold font-serif m-0 leading-tight pb-10"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="text-white">Contact</span>
            <span className="text-violet-400">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* contact info */}
          <div className="flex flex-col gap-8">
            <div>
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
                  <span className="text-white/70 text-sm">Midrand, South Africa</span>
                </li>
              </ul>
            </div>

            {/* Office address card */}
            <address
              className="not-italic bg-[#16151c] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-1.5"
              aria-label="Office address"
            >
              <p className="text-white font-semibold text-sm m-0 mb-2">Office</p>
              {[
                "Unit H22, Workpods",
                "1024 Brand Road",
                "President Park AH",
                "Midrand, 1686",
                "South Africa",
              ].map((line) => (
                <p key={line} className="text-white/50 text-sm m-0 leading-relaxed">
                  {line}
                </p>
              ))}
            </address>
          </div>

          {/*  contact form */}
          <div className="bg-[#16151c] border border-white/[0.07] rounded-2xl p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
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
                className="flex flex-col gap-4"
                noValidate
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

                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0E0E13] border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 resize-y"
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