import { Header } from "../blocks/Header/Header";
import { HeroSection } from "../components/HeroSection";
import { GlassCard } from "../components/GlassCard";
import { Sidebar } from "../components/Sidebar";
import { ProgramStructureSection } from "../components/ProgramStructureSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { PricingSection } from "../components/PricingSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <div className="workspace">
        <Header />
        <HeroSection />
        <div className="card-wrap">
          <div className="card-halo" />
          <GlassCard>
            <Sidebar />
            <ProgramStructureSection />
          </GlassCard>
        </div>
        <BenefitsSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
}
