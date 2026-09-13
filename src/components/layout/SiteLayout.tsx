import { useState, type ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { InquiryDialog } from "../../features/inquiry/InquiryDialog";
import styles from "./site-layout.module.css";

type SiteLayoutProps = {
  children: (openInquiry: () => void) => ReactNode;
  pageLabel?: string;
};

export function SiteLayout({ children, pageLabel }: SiteLayoutProps) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  return (
    <div id="top" className={styles.layout}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader onRequestAssessment={() => setInquiryOpen(true)} />
      <main id="main-content" className={styles.main} tabIndex={-1} aria-label={pageLabel}>
        {children(() => setInquiryOpen(true))}
      </main>
      <SiteFooter />
      {inquiryOpen && <InquiryDialog onDismiss={() => setInquiryOpen(false)} />}
    </div>
  );
}
