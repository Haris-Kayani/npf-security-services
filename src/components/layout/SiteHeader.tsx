import { useState } from "react";
import { ListIcon, MapPinIcon, XIcon } from "@phosphor-icons/react";
import { siteContent } from "../../content/site-content";
import { Brand } from "./Brand";
import styles from "./layout.module.css";

type SiteHeaderProps = {
  onRequestAssessment: () => void;
};

export function SiteHeader({ onRequestAssessment }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headquartersAddress =
    siteContent.contacts
      .find(({ kind }) => kind === "address")
      ?.value.replace(/\s*\n\s*/g, " ") ?? "3rd Floor, NPF Plaza, Service Road South, Mauve Area, Sector G-10/4, Islamabad";

  function openInquiry() {
    setMenuOpen(false);
    onRequestAssessment();
  }

  return (
    <>
      <div className={styles.previewBar}>
        <div className="container">
          <span className={styles.previewAddress}>
            <MapPinIcon size={13} weight="bold" aria-hidden="true" />
            {headquartersAddress}
          </span>
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
