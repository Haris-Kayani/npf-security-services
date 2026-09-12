import { ArrowRightIcon } from "@phosphor-icons/react";
import { siteContent } from "../../content/site-content";
import styles from "./home.module.css";

type HeroSectionProps = {
  onRequestAssessment: () => void;
};

export function HeroSection({ onRequestAssessment }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <p className="eyebrow">{siteContent.hero.eyebrow}</p>
        <h1 id="hero-heading">{siteContent.hero.headingLines.map((line) => <span key={line}>{line} </span>)}</h1>
        <p className={styles.heroDescription}>{siteContent.hero.description}</p>
        <div className={styles.heroActions}>
          <button className="button button-primary" type="button" onClick={onRequestAssessment}>
            Request an assessment
            <ArrowRightIcon size={25} weight="light" aria-hidden="true" />
          </button>
          <a className="text-link" href="#services">
            Explore services
          </a>
        </div>
        <span className="draft-label">Draft content — to be replaced</span>
      </div>
      <figure className={styles.heroImage}>
        <img
          src="/images/placeholders/office-entrance.png"
          alt="Placeholder photograph of an anonymous guard outside an office entrance; to be replaced with approved company photography."
          width="1234"
          height="1275"
          fetchPriority="high"
        />
        <span className={styles.imageWatermark} aria-hidden="true">
          Placeholder
        </span>
        <figcaption>NPF SS photography — TO BE REPLACED</figcaption>
      </figure>
    </section>
  );
}

