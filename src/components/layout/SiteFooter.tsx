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
          <div className={styles.footerBrand}>
            <Brand compact />
            <p className={styles.footerTagline}>A Safer Pakistan, Together</p>
          </div>
          <dl className={styles.contacts}>
            {siteContent.contacts.map(({ kind, label, value }) => {
              const Icon = contactIcons[kind];
              const href =
                kind === "email"
                  ? `mailto:${value}`
                  : kind === "address"
                    ? "https://www.google.com/maps/search/?api=1&query=National%20Police%20Foundation%2C%20G-10%2F4%2C%20Islamabad&query_place_id=ChIJSdnj8ye-3zgRPScSLOA1QhY"
                    : undefined;
              return (
                <div className={styles.contact} key={kind}>
                  <Icon size={28} weight="light" aria-hidden="true" />
                  <div>
                    <dt>{label}</dt>
                    <dd>
                      {href ? (
                        <a
                          href={href}
                          target={kind === "address" ? "_blank" : undefined}
                          rel={kind === "address" ? "noreferrer" : undefined}
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </footer>
  );
}
