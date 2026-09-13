import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { siteContent } from "../../content/site-content";
import { Brand } from "./Brand";
import styles from "./layout.module.css";

type SiteHeaderProps = {
  onRequestAssessment: () => void;
};

export function SiteHeader({ onRequestAssessment }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function openInquiry() {
    setMenuOpen(false);
    onRequestAssessment();
  }

  return (
    <>
      <div className={styles.previewBar}>
        <div className="container">
          <span>Design preview</span>
          <span>Company content awaiting confirmation</span>
        </div>
      </div>
      <header className={styles.header}>
        <div className={["container", styles.headerInner].join(" ")}>
          <Brand />
          <button
            className={styles.menuToggle}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
          </button>
          <nav
            id="main-navigation"
            className={styles.navigation}
            data-open={menuOpen}
            aria-label="Main navigation"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                document
                  .querySelector<HTMLButtonElement>("[aria-controls='main-navigation']")
                  ?.focus();
              }
            }}
          >
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  window.location.pathname.replace(/\/+$/, "") === item.href ? "page" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="button button-primary" type="button" onClick={openInquiry}>
              Request assessment
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
