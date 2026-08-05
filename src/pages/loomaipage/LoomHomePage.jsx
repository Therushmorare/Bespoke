import { useLocation } from "react-router";
import { useEffect } from "react";
import Seo from "../../components/Seo";
import Navbar from '../../components/Navbar'
import LoomHero from '../../components/loom/LoomHero'
import EndorsementsSection from "../../components/loom/Endorsementssection"
import IndustriesServed from "../../components/loom/Industriesserved"
import EcosystemSection from "../../components/loom/Ecosystemsection"
import ProblemStatement from "../../components/loom/Problemstatement"
import WhyLoomExcels from "../../components/loom/WhyLoomExcels"
import ComplianceSecurity from "../../components/loom/ComplianceSecurity"
import GettingStarted from "../../components/loom/Gettingstarted"
import LoomCTA from "../../components/loom/Loomcta"
import ContactLoomSection from "../../components/loom/Contactsection";
import Footer from "../../components/Footer"

const loomSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LOOOM AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.bespokesolutech.co.za/loom",
  description:
    "LOOOM AI is an AI-powered digital audit and risk assessment platform that automates documentation, risk analysis, compliance tracking, and reporting for audit teams.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "ZAR",
    price: "0",
    description: "Pricing available upon consultation",
  },
  publisher: {
    "@type": "Organization",
    name: "Bespoke Solutech (Pty) Ltd",
    url: "https://www.bespokesolutech.co.za/",
  },
};

export default function LoomHomePage() {
  const { hash } = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Scroll to section if hash present
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <Seo
        title="LOOOM AI — AI-Powered Digital Audit & Risk Assessment Software | Bespoke Solutech"
        description="LOOOM AI automates audit documentation, risk analysis, compliance tracking, and reporting — helping audit teams work faster with greater accuracy. Built and operated by Bespoke Solutech, South Africa."
        path="/loom"
        jsonLd={loomSchema}
      />
      <Navbar/>
      <LoomHero/>
      <EndorsementsSection/>
      <EcosystemSection/>
      <ProblemStatement/>
      <WhyLoomExcels/>
      <ComplianceSecurity/>
      <IndustriesServed/>
      <GettingStarted/>
      <LoomCTA/>
      <ContactLoomSection/>
      <Footer/>
    </>
  )
}
