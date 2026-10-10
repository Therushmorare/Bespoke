import { BarChart2, Eye, Database, LayoutGrid, Globe, Gift, Building2, CreditCard, MessagesSquare } from "lucide-react";

const productGroups = [
  {
    id: "product-group-1",
    heading: "Procurement and ESG Solutions",
    description: "Controlled procurement lifecycles and credible ESG performance reporting.",
    products: [
      {
        icon: LayoutGrid,
        title: "Bid Bridge",
        eyebrow: "PROCUREMENT AND BID LIFECYCLE MANAGEMENT",
        description: "An AI-enabled procurement platform covering procurement requests, approvals, publication, supplier submissions, evaluation, adjudication and award management.",
        stat: "IN DEVELOPMENT",
        capabilities: ["Procurement request creation", "Multi-level approval workflows", "Bid publication and supplier access", "Supplier submissions", "Evaluation and adjudication", "Award, audit trail and reporting"],
      },
      {
        icon: Globe,
        title: "Impact 360",
        eyebrow: "ESG PERFORMANCE MANAGEMENT AND REPORTING",
        description: "An AI-enabled ESG management and reporting platform helping organisations define, capture, monitor and report environmental, social and governance performance.",
        stat: "IN DEVELOPMENT",
        capabilities: ["ESG goals and targets", "Data and evidence collection", "Baselines and performance tracking", "Materiality processes", "Dashboards", "AI-assisted ESG reporting"],
      },
    ],
  },
  {
    id: "product-group-2",
    heading: "Talent and Asset Solutions",
    description: "Structured recruitment workflows and accountable asset oversight.",
    products: [
      {
        icon: Eye,
        title: "Talently",
        eyebrow: "SMART TALENT ACQUISITION AND MANAGEMENT",
        description: "A smart talent acquisition and management platform that helps recruiters identify, assess and match suitable candidates with organisational opportunities.",
        stat: "AVAILABLE",
        capabilities: ["Vacancy and approval workflows", "Candidate profiles", "Talent-to-role matching", "Screening and shortlisting", "Interview coordination", "Recruitment reporting"],
      },
      {
        icon: BarChart2,
        title: "AssetVault",
        eyebrow: "INTELLIGENT ASSET MANAGEMENT AND VERIFICATION",
        description: "An intelligent asset management and verification platform enabling organisations to track physical assets, monitor movements, conduct verification and identify anomalies.",
        stat: "LAUNCHING SOON",
        capabilities: ["Centralised asset register", "Asset location tracking", "Physical verification", "Movement monitoring", "Anomaly identification", "Management reporting"],
      },
    ],
  },
  {
    id: "product-group-3",
    heading: "Funding and Programme Management",
    description: "Connected workflows for skills funding, placements and grant administration.",
    products: [
      {
        icon: Database,
        title: "SetaSync",
        eyebrow: "SETA FUNDING AND PLACEMENT MANAGEMENT",
        description: "A SETA funding, student and workplace-placement management platform supporting the complete student-to-organisation workflow in one connected environment.",
        stat: "AVAILABLE",
        capabilities: ["Funding-window administration", "Student registration", "Host-company management", "Workplace placements", "Agreement and document tracking", "Stipend and progress monitoring"],
      },
      {
        icon: Gift,
        title: "Grant4Me",
        eyebrow: "INTELLIGENT GRANT MANAGEMENT",
        description: "An intelligent grant management platform supporting institutions and applicants from programme setup and application through evaluation, approval and funding.",
        stat: "LAUNCHING SOON",
        capabilities: ["Grant programme creation", "Applications and eligibility checks", "Evaluation workflows", "Applicant communication", "Funding tracking", "Programme monitoring"],
      },
    ],
  },
  {
    id: "product-group-4",
    heading: "Construction, Lending and Digital Community Solutions",
    description: "Specialised platforms extending the portfolio into project risk, financial services and digital engagement.",
    products: [
      {
        icon: Building2,
        title: "SiteIQ",
        eyebrow: "CONSTRUCTION RISK ANALYSIS AND PROJECT OVERSIGHT",
        description: "Enables risk professionals to evaluate and monitor construction projects from commencement to completion.",
        stat: "LAUNCHING SOON",
        capabilities: ["Project viability assessment", "BOQ analysis", "Site visits and inspections", "Risk severity monitoring", "Stakeholder collaboration", "Project reporting"],
      },
      {
        icon: CreditCard,
        title: "ApproveIT",
        eyebrow: "LOAN ORIGINATION AND PORTFOLIO MANAGEMENT",
        description: "Improves applicant verification, assessment, approval and portfolio monitoring for financial institutions.",
        stat: "IN DEVELOPMENT",
        capabilities: ["Digital applications", "Applicant verification", "Approval workflows", "Interest and repayment tracking", "Portfolio monitoring", "Performance reporting"],
      },
      {
        icon: MessagesSquare,
        title: "The Feed",
        eyebrow: "SOCIAL BLOGGING AND DIGITAL COMMUNITY",
        description: "A Gen Z-focused social blogging and digital community platform combining publishing with community engagement.",
        stat: "LAUNCHING SOON",
        capabilities: ["User profiles", "Content publishing", "Personalised feeds", "Community interaction", "Interest-based discovery", "Digital engagement"],
      },
    ],
  },
];
export default function PlatformProducts() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="products-heading"
      className=" bg-[#0E0E13]  px-6 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl ">
        <h2 id="products-heading" className="mb-12 text-4xl font-bold tracking-tight text-white">
          Our Products
        </h2>
        <div className="space-y-16">
          {productGroups.map((group) => (
            <section key={group.id} aria-labelledby={group.id}>
              <h3 id={group.id} className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {group.heading}
              </h3>
              <div className="mt-3 h-0.5 w-12 bg-[#6757ff]" />
              <p className="mb-7 mt-3 text-sm leading-6 text-white/50">{group.description}</p>
              <div className={`grid grid-cols-1 gap-7 ${group.products.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {group.products.map(
            ({ icon: Icon, title, eyebrow, description, stat, capabilities }) => (
              <article
                key={`${title}-${eyebrow}`}
                aria-label={title}
                className="relative overflow-hidden bg-[#16151c] border border-white/[0.07] hover:border-violet-600/30 transition-colors duration-300 px-7 pb-8 pt-9 shadow-sm sm:px-9 rounded-2xl"
              >
            
                {/* Icon + status */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <Icon
                    size={29}
                    strokeWidth={1.7}
                    className="text-[#6757ff]"
                    aria-hidden="true"
                  />

                  <span className={`px-3 py-1 text-[10px] font-semibold tracking-[0.14em] ${stat === "AVAILABLE" ? "bg-emerald-50 text-emerald-700" : stat === "LAUNCHING SOON" ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-600"}`}>
                    {stat}
                  </span>
                </div>

                {/* Product heading */}
                <h4 className="m-0 text-3xl font-bold tracking-tight text-white">
                  {title}
                </h4>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6757ff]">
                  {eyebrow}
                </p>

                <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/50">
                  {description}
                </p>

                <div className="my-6 h-px bg-slate-200" />

                {/* Capabilities */}
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Key Capabilities
                </p>

                <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <p
                      key={capability}
                      className="m-0 text-sm font-medium leading-5 text-white"
                    >
                      {capability}
                    </p>
                  ))}
                </div>
              </article>
            )
          )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
