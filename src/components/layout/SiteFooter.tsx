import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react";
import { siteContent } from "../../content/site-content";
import { Brand } from "./Brand";
import styles from "./layout.module.css";

const contactIcons = {
  phone: PhoneIcon,
  email: EnvelopeSimpleIcon,
  address: MapPinIcon,
};

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact" aria-label="Company contact information">
      <div className="container">
        <div className={styles.footerMain}>
          <Brand compact />
          <dl className={styles.contacts}>
            {siteContent.contacts.map(({ kind, label, value }) => {
              const Icon = contactIcons[kind];
              return (
                <div className={styles.contact} key={kind}>
                  <Icon size={28} weight="light" aria-hidden="true" />
                  <div>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
        <div className={styles.footerBottom}>
          <p>{siteContent.fullName}</p>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
