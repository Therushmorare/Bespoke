import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home",     section: "home" },
  { label: "About",    section: "about" },
  { label: "Products", section: "products" },
  { label: "Contact",  section: "contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Privacy Policy",     href: "#privacy" },
  { label: "Refund Policy",      href: "#refund" },
];

const contactLinks = [
  { icon: Mail,  label: "sales@bespokesolutech.co.za", href: "mailto:sales@bespokesolutech.co.za" },
  { icon: Phone, label: "010 880 7341",                href: "tel:+27108807341" },
  { icon: MapPin,label: "Waterfall City & Midrand, SA", href: null },
];

const offices = [
  {
    label: "Waterfall Chartered Accountants Chambers Offices",
    lines: [
      "Allandale Building, Office C, First Floor",
      "23 Magwa Crescent",
      "Waterfall City, 2090",
      "Gauteng, South Africa",
    ],
  },
  {
    label: "Bespoke Solutech",
    lines: [
      "Unit H22, Workpods, 1024 Brand Road",
      "President Park AH",
      "Midrand, 1686",
      "Gauteng, South Africa",
    ],
  },
];

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@bespokesolutech?is_from_webapp=1&sender_device=pc",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bespokesolutech/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/BespokeSolutech",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587888885633",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Bespoke Solutech footer"
      className="relative bg-[#0E0E13] border-t border-white/[0.06] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-violet-700/[0.07] blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-12 py-16 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <img src="/logo.png" alt="Bespoke Solutech" width={90} className="block" />

            <p className="text-white/50 text-sm leading-relaxed m-0 max-w-[260px]">
              Operating and managing digital products and services for businesses across South Africa.
            </p>

            {/* Contact */}
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon size={13} className="text-violet-500 shrink-0" strokeWidth={2} aria-hidden="true" />
                  {href ? (
                    <a
                      href={href}
                      className="text-white/50 text-sm no-underline hover:text-violet-400 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-white/50 text-sm">{label}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2.5" role="list" aria-label="Social media links">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                  aria-label={`Bespoke Solutech on ${label}`}
                  className="w-9 h-9 rounded-xl bg-[#16151c] border border-white/[0.07] flex items-center justify-center text-white/50 hover:text-violet-400 hover:border-violet-600/30 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Company links">
            <p className="text-white/35 text-[11px] font-bold tracking-[0.2em] uppercase m-0 mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              {navLinks.map(({ label, section }) => (
                <li key={label}>
                  <Link
                    to={`/#${section}`}
                    className="text-white/60 text-sm no-underline hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <p className="text-white/35 text-[11px] font-bold tracking-[0.2em] uppercase m-0 mb-5">
              Legal
            </p>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/60 text-sm no-underline hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Offices */}
          <address aria-label="Office addresses" className="not-italic">
            <p className="text-white/35 text-[11px] font-bold tracking-[0.2em] uppercase m-0 mb-5">
              Offices
            </p>
            <div className="flex flex-col gap-5">
              {offices.map(({ label, lines }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <span className="text-violet-400/80 text-[11px] font-semibold tracking-[0.1em] uppercase">
                    {label}
                  </span>
                  {lines.map((line) => (
                    <p key={line} className="text-white/60 text-sm m-0 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6">
          <p className="text-white/25 text-xs m-0">
            © {year} Bespoke Solutech (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-white/20 text-xs m-0">
            Digital Solutions, Professionally Operated.
          </p>
        </div>

      </div>
    </footer>
  );
}