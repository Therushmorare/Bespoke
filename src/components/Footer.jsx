import { Mail, Phone, MapPin } from "lucide-react";

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Refund Policy", href: "#refund" },
];

const officeLines = [
  "Unit H22, Workpods",
  "1024 Brand Road",
  "President Park AH",
  "Midrand, 1686",
  "South Africa",
];

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@bespokesolutech?is_from_webapp=1&sender_device=pc",
    bg: "#010101",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bespokesolutech/",
    bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/BespokeSolutech",
    bg: "#1da1f2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587888885633",
    bg: "#1877f2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
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
      className="bg-[#260247] px-6 pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Top: brand + contact + socials */}
        <div className="mb-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-5">
          <img src="./logo.png" alt="Bespoke Logo" width={100} />
          </div>

          {/* Tagline */}
          <p className="text-white/80 text-sm font-sans m-0 mb-5">
            Digital Solutions, Professionally Operated.
          </p>

          {/* Contact rows */}
          <ul className="flex flex-col gap-3 list-none m-0 p-0 mb-7">
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-violet-400 flex-shrink-0" aria-hidden="true" />
              <a href="mailto:sales@bespokesolutech.co.za" className="text-white/65 text-sm no-underline hover:text-violet-400 transition-colors duration-200">
                sales@bespokesolutech.co.za
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-violet-400 flex-shrink-0" aria-hidden="true" />
              <a href="tel:+27108807341" className="text-white/65 text-sm no-underline hover:text-violet-400 transition-colors duration-200">
                010 880 7341
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-violet-400 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/65 text-sm">Midrand, South Africa</span>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3" role="list" aria-label="Social media links">
            {socials.map(({ label, href, bg, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Bespoke Solutech on ${label}`}
                role="listitem"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-80 active:scale-95"
                style={{ background: bg }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-10" aria-hidden="true" />

        {/* Bottom columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">

          {/* Company */}
          <nav aria-label="Company links">
            <p className="text-white/40 text-[11px] font-bold tracking-[0.18em] uppercase font-sans m-0 mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/70 text-sm no-underline hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <p className="text-white/40 text-[11px] font-bold tracking-[0.18em] uppercase font-sans m-0 mb-5">
              Legal
            </p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/70 text-sm no-underline hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Office */}
          <address aria-label="Office address" className="not-italic">
            <p className="text-white/40 text-[11px] font-bold tracking-[0.18em] uppercase font-sans m-0 mb-5">
              Office
            </p>
            <div className="flex flex-col gap-1.5">
              {officeLines.map((line) => (
                <p key={line} className="text-white/70 text-sm font-sans m-0 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </address>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/35 text-xs font-sans m-0">
            © {year} Bespoke Solutech. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}