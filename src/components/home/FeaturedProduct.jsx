import { useNavigate } from "react-router";

const features = [
  { label: "Automated risk assessments" },
  { label: "Intelligent audit workflows" },
  { label: "AI-powered compliance tracking" },
  { label: "Real-time reporting dashboards" },
  { label: "Secure cloud infrastructure" },
];

const products = [
  {
    id: "looom-ai",
    name: "LOOOM AI",
    tagline: "AI-Powered Digital Audit & Risk Assessment",
    tags: ["Digital Audit Tool", "AI Audit Tools", "Audit Automation Software"],
    description:
      "LOOOM AI is an intelligent digital audit and risk assessment platform designed to modernise and automate compliance, governance, and internal audit processes. The system leverages artificial intelligence to streamline audit workflows, improve reporting accuracy, and enhance organisational oversight.",
    features,
    pricing: "Pricing available upon consultation",
    href: "/loom",
    accent: "#7c3aed",
    featured: true,
  },
  
];

function FeaturedCard({ product, onSelect }) {
  return (
    <article
      aria-label={product.name}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-[#16151c] border border-white/[0.07] rounded-3xl p-8 lg:p-12"
    >
      <div className="flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wide uppercase">
          Featured Product
        </span>

        <div className="flex flex-col gap-2">
          <h3
            className="text-white font-bold m-0 font-serif"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            {product.name}
          </h3>
          {product.tagline && (
            <p className="text-violet-300/90 text-base m-0">{product.tagline}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-x-1 gap-y-1" aria-label="Keywords">
          {product.tags.map((tag, i) => (
            <span key={tag} className="text-violet-500 text-sm font-medium">
              {tag}
              {i < product.tags.length - 1 && <span className="text-violet-500 mx-1">|</span>}
            </span>
          ))}
        </div>

        <p className="text-white/70 text-[15px] leading-relaxed m-0">{product.description}</p>

        <ul className="flex flex-wrap gap-3 list-none m-0 p-0" aria-label="Key features">
          {product.features.map((f) => (
            <li
              key={f.label}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm"
            >
              {f.label}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-5 mt-2">
          <span className="inline-block px-5 py-2.5 rounded-lg border border-dashed border-violet-500/60 text-violet-400 text-sm">
            {product.pricing}
          </span>
          <button
            onClick={onSelect}
            aria-label={`Read more about ${product.name}`}
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-semibold no-underline transition-colors duration-200"
          >
            Read More <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="w-full rounded-2xl flex items-center justify-center min-h-[260px] lg:min-h-[380px]"
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
  );
}

function ProductCard({ product, onSelect }) {
  return (
    <article
      aria-label={product.name}
      className="flex flex-col bg-[#16151c] border border-white/[0.07] rounded-2xl p-6 gap-4 hover:border-violet-600/30 transition-colors duration-300"
    >
      <div
        aria-hidden="true"
        className="w-full rounded-xl flex items-center justify-center h-32"
        style={{ background: product.accent }}
      >
        <span className="text-white font-bold font-serif select-none text-xl">
          {product.name}
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-white font-bold text-lg font-serif m-0">{product.name}</h3>
        {product.tagline && (
          <p className="text-violet-300/90 text-sm m-0">{product.tagline}</p>
        )}
        <p className="text-white/60 text-sm leading-relaxed m-0 line-clamp-3">
          {product.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5" aria-label="Keywords">
        {product.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="text-violet-400 text-xs font-medium px-2.5 py-1 rounded-full bg-violet-600/10 border border-violet-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={onSelect}
        aria-label={`Read more about ${product.name}`}
        className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-semibold no-underline transition-colors duration-200 mt-1"
      >
        Read More <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

export default function ProductsSection() {
  const navigate = useNavigate();
  const featured = products.find((p) => p.featured);
  const rest = products.filter((p) => !p.featured);

  // Structured data so search engines can surface each product individually
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.name,
        description: p.description,
        applicationCategory: "BusinessApplication",
        url: `https://www.bespokesolutech.co.za${p.href}`,
      },
    })),
  };

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="bg-[#0E0E13] px-6 py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-sans mb-3">
            What We Build
          </p>
          <h2 id="products-heading" className="text-white font-bold text-3xl md:text-4xl m-0 font-serif">
            Our Products
          </h2>
          <div className="w-12 h-[3px] bg-violet-600 rounded-full mt-3" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-8">
          {featured && (
            <FeaturedCard product={featured} onSelect={() => navigate(featured.href)} />
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((p) => (
                <ProductCard key={p.id} product={p} onSelect={() => navigate(p.href)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}