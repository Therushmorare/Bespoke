import { useLocation } from "react-router";
import { useEffect } from "react";
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
export default function LoomHomePage() {
  const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }, [hash]);
  return (
    <>
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
