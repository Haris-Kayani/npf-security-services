import { useState } from "react";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { HeroSection } from "../components/home/HeroSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { AboutSection } from "../components/home/AboutSection";
import { InquiryDialog } from "../features/inquiry/InquiryDialog";

export function HomePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  function openInquiry() {
    setInquiryOpen(true);
  }

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader onRequestAssessment={openInquiry} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection onRequestAssessment={openInquiry} />
        <ProcessSection />
        <ServicesSection onRequestAssessment={openInquiry} />
        <AboutSection />
      </main>
      <SiteFooter />
      {inquiryOpen && <InquiryDialog onDismiss={() => setInquiryOpen(false)} />}
    </div>
  );
}
