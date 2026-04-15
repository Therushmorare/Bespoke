import { Link } from "react-router";
const features = [
  {
    label: "Automated risk assessments",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Intelligent audit workflows",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
  },
  {
    label: "AI-powered compliance tracking",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    label: "Real-time reporting dashboards",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Secure cloud infrastructure",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
  },
];

const products = [
  {
    id: "looom-ai",
    name: "LOOOM AI",
    tags: ["Digital Audit Tool", "AI Audit Tools", "Audit Automation Software"],
    description:
      "LOOOM AI is an intelligent digital audit and risk assessment platform designed to modernise and automate compliance, governance, and internal audit processes. The system leverages artificial intelligence to streamline audit workflows, improve reporting accuracy, and enhance organisational oversight.",
    features,
    pricing: "Pricing available upon consultation",
    readMoreHref: "#looom-ai",
    accent: "#7c3aed",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-label="Our Products"
      className="bg-[#0E0E13] px-6 py-10"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Section heading */}
        <div className="mb-14">
          <h2 className="text-white font-bold text-3xl md:text-4xl m-0 font-serif">
            Our Products
          </h2>
          <div className="w-12 h-[3px] bg-violet-600 rounded-full mt-3" aria-hidden="true" />
        </div>

        {/* Product list */}
        <div className="flex flex-col gap-24">
          {products.map((product) => (
            <article
              key={product.id}
              aria-label={product.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className="flex flex-col gap-6">

                {/* Product name */}
                <h3
                  className="text-white font-bold m-0 font-serif"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
                >
                  {product.name}
                </h3>

                {/* SEO keyword tags */}
                <div className="flex flex-wrap gap-x-1 gap-y-1" aria-label="Keywords">
                  {product.tags.map((tag, i) => (
                    <span key={tag} className="text-violet-500 text-sm font-medium">
                      {tag}{i < product.tags.length - 1 && (
                        <span className="text-violet-500 mx-1">|</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-white/70 text-[15px] leading-relaxed m-0">
                  {product.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-3" role="list" aria-label="Key features">
                  {product.features.map((f) => (
                    <span
                      key={f.label}
                      role="listitem"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm text-violet-300"
                    >
                      <span className="text-violet-400" aria-hidden="true">{f.icon}</span>
                      {f.label}
                    </span>
                  ))}
                </div>

                {/* Pricing pill */}
                <div>
                  <span className="inline-block px-5 py-2.5 rounded-lg border border-dashed border-violet-500/60 text-violet-400 text-sm">
                    {product.pricing}
                  </span>
                </div>

                {/* Read more */}
                <div className="flex justify-center">
                  <Link
                    to="/loom"
                    aria-label={`Read more about ${product.name}`}
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-semibold no-underline transition-colors duration-200"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* product visual card */}
              <div
                aria-hidden="true"
                className="w-full rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[420px]"
                style={{ background: product.accent }}
              >
                <span
                  className="text-white font-bold font-serif select-none"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
                >
                  {product.name}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}