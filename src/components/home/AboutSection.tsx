import styles from "./home.module.css";

export function AboutSection() {
  return (
    <section
      className={["container", styles.about].join(" ")}
      id="about"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">About NPF Security Services</h2>
      <p>
        Company introduction and approved affiliation wording — <strong>TO BE FILLED</strong>
      </p>
    </section>
  );
}
