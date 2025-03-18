import { HeroSection } from "@/components/hero/hero-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AboutSection } from "@/components/sections/about-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ConceptSection />
      <SolutionSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
