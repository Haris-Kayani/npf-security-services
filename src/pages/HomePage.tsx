import { SiteLayout } from "../components/layout/SiteLayout";
import { HeroSection } from "../components/home/HeroSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { ClientsSection } from "../components/home/ClientsSection";

export function HomePage() {
  return (
    <SiteLayout>
      {(openInquiry) => (
        <>
          <HeroSection onRequestAssessment={openInquiry} />
          <ProcessSection />
          <ServicesSection onRequestAssessment={openInquiry} />
          <ClientsSection />
        </>
      )}
    </SiteLayout>
  );
}
