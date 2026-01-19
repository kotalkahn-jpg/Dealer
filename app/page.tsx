import Hero from "@/components/sections/hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import FiltersBar from "@/components/sections/FiltersBar";
import KeyStats from "@/components/sections/KeyStats";
import MissionVision from "@/components/sections/MissionVision";
import ServicesSection from "@/components/sections/services";
import WhoWeServe from "@/components/sections/WhoWeServe";
import TrustPartners from "@/components/sections/TrustPartners";
import FinalCTA from "@/components/sections/services/FinalCTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <FiltersBar/>
      <WhoWeAre/>
      <KeyStats />
      <MissionVision />
        <ServicesSection />
      <WhoWeServe/>
      <TrustPartners/>
      <FinalCTA/>
      
    </main>
  );
}
