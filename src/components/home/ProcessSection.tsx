import { siteContent } from "../../content/site-content";
import styles from "./home.module.css";

export function ProcessSection() {
  return (
    <section className={["container", styles.process].join(" ")} aria-labelledby="process-heading">
      <div className={styles.sectionEyebrow}>
        <h2 className="eyebrow" id="process-heading">
          A clear path to the right support
        </h2>
        <span className={styles.draftNote}>Proposed process · TO BE CONFIRMED</span>
      </div>
      <ol className={styles.processList}>
        {siteContent.process.map((step, index) => (
          <li key={step.title}>
            <span className={styles.stepNumber} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
