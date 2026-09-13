import { siteContent } from "../../content/site-content";
import styles from "./layout.module.css";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <a
      className={[styles.brand, compact ? styles.brandCompact : ""].join(" ")}
      href="/"
      aria-label={siteContent.name + " home"}
    >
      <img src="/images/brand/npf-logo.png" alt="" width="80" height="80" />
      <span className={styles.brandName}>
        <strong>NPF</strong>
        <span>Security Services</span>
      </span>
    </a>
  );
}
