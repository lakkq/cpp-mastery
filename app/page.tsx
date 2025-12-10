import { Header } from "../blocks/Header/Header";
import { HeroSection } from "../blocks/Hero/HeroSection";
import { Main } from "../blocks/Main/Main";
import { BenefitsSection } from "../components/BenefitsSection";
import { PricingSection } from "../components/PricingSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <div className="workspace">
        <Header />
        <HeroSection />
        <Main />
        <BenefitsSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
}
