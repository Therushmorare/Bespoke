import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
 { label: "Home", href: "#home", section: "home" },
  { label: "About", href: "#about", section: "about" },
  { label: "Products", href: "#products", section: "products" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      aria-label="Bespoke Solutech site header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0d14]/90 border-b border-violet-700/20 backdrop-blur-sm"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link
          to="/"
          aria-label="Bespoke Solutech — home"
          className="flex items-center gap-3 no-underline flex-shrink-0"
        >
         <img src="./logo.png" alt="Bespoke Logo" width={70} height={100}/>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden sm:flex items-center gap-1 flex-1 justify-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={`/#${link.section}`}
              aria-current={activeLink === link.label ? "page" : undefined}
              onClick={() => setActiveLink(link.label)}
              className={`px-[18px] py-1.5 rounded-full text-sm no-underline transition-all duration-200 ${
                activeLink === link.label
                  ? "text-violet-400 bg-violet-600/10 font-medium"
                  : "text-white/70 hover:text-white font-normal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Us*/}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#contact"
            aria-label="Contact Bespoke Solutech"
            className="hidden sm:inline-block px-6 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-sm font-semibold tracking-wide no-underline transition-all duration-200"
          >
            Contact Us
          </a>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden p-1 text-white bg-transparent border-none cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="sm:hidden bg-[#0e0d14] border-t border-white/5 px-6 pt-4 pb-6 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
              className={`px-4 py-3 rounded-lg text-[15px] no-underline transition-colors duration-150 ${
                activeLink === link.label
                  ? "text-violet-400 bg-violet-600/10 font-semibold"
                  : "text-white/75 hover:text-white font-normal"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 px-4 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-[15px] font-semibold text-center no-underline transition-colors duration-150"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}