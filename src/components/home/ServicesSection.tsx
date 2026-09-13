import { ArrowRightIcon } from "@phosphor-icons/react";
import { siteContent } from "../../content/site-content";
import styles from "./home.module.css";

type ServicesSectionProps = {
  onRequestAssessment: () => void;
};

export function ServicesSection({ onRequestAssessment }: ServicesSectionProps) {
  return (
    <div className={styles.informationBorder}>
      <div className={["container", styles.informationGrid].join(" ")}>
        <section id="services" aria-labelledby="services-heading">
          <h2 className={styles.sectionTitle} id="services-heading">
            Services
          </h2>
          <ul className={styles.serviceList}>
            {siteContent.serviceSlots.map((id) => (
              <li key={id}>
                <h3>Service name — TO BE FILLED</h3>
                <p>Service description — TO BE FILLED</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.coverage} id="coverage" aria-labelledby="coverage-heading">
          <div className={styles.coverageLayout}>
            <div>
              <h2 className={styles.sectionTitle} id="coverage-heading">
                Coverage
              </h2>
              <div className={styles.coverageDetails}>
                <p className={styles.coverageIntro}>Tell us where you need support.</p>
                <dl>
                  <div>
                    <dt>Cities and service areas</dt>
                    <dd>TO BE FILLED</dd>
                  </div>
                  <div>
                    <dt>Branch locations</dt>
                    <dd>TO BE FILLED</dd>
                  </div>
                </dl>
                <button className="text-link" type="button" onClick={onRequestAssessment}>
                  Include your location in an inquiry
                  <ArrowRightIcon size={21} aria-hidden="true" />
                </button>
              </div>
            </div>
            <img
              className={styles.coverageMap}
              src="/images/coverage/pakistan-map.png"
              alt="Map of Pakistan marking Peshawar, Islamabad, Rawalpindi, Sargodha, Faisalabad, Lahore, Quetta, Multan and Karachi."
              width={1122}
              height={1402}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
