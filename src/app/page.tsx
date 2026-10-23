import Link from "next/link";
import HomeHero from "../components/hero/HomeHero";
import ServicesSection from "../components/services/ServicesSection";
// import WorksSection from "../components/works/WorksSection";
import ApproachSection from "../components/approach/ApproachSection";
import ManifestoSection from "../components/manifesto/ManifestoSection";
import Testimonial2 from "../components/ui/testimonial-section-2";
import CTASection from "../components/cta/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HomeHero />

      {/* <WorksSection /> */}
      <ServicesSection />
      <ApproachSection />
      <ManifestoSection />
      <Testimonial2 />
      <CTASection />
    </main>
  );
}
