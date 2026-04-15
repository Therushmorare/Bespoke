import { useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../../components/Navbar"
import HeroSection from "../../components/home/HeroSection"
import AboutUs from "../../components/home/AboutUs"
import WhyChooseUs from "../../components/home/WhyChooseUs"
import ProductsSection from "../../components/home/LoomAi"
import CTASection from "../../components/home/CtaSection"
import Banner from "../../components/home/Banner"
import ContactHomeSection from "../../components/home/Contactsection";
import MapSection from "../../components/home/Mapsection"
import Footer from "../../components/Footer"
export default function HomePage() {
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
    <HeroSection/>
    <AboutUs/>
    <ProductsSection/>
    <WhyChooseUs/>
    <Banner/>
    <CTASection/>
    <ContactHomeSection />
    <MapSection/>
    <Footer/>
    </>
  )
}
