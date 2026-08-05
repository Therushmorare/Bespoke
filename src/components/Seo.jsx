const SITE = "https://www.bespokesolutech.co.za";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

export default function Seo({
  title = "Bespoke Solutech | Digital Solutions, Professionally Operated",
  description = "Bespoke Solutech operates and manages digital products and services for businesses across South Africa.",
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt = "Bespoke Solutech — Digital Solutions, Professionally Operated",
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const url = `${SITE}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Bespoke Solutech" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BespokeSolutech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Page-specific structured data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
