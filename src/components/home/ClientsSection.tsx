import type { CSSProperties } from "react";
import { clients } from "../../content/clients";
import styles from "./clients.module.css";

export function ClientsSection() {
  if (clients.length === 0) return null;

  // Each half must fill the container before the identical second half loops in.
  const repetitions = Math.max(1, Math.ceil(8 / clients.length));
  const items = Array.from({ length: repetitions }, (_, repetition) =>
    clients.map((client) => ({ client, repetition })),
  ).flat();
  const trackStyle = { "--loop-duration": items.length * 5 + "s" } as CSSProperties;

  return (
    <section
      className={["container", styles.section].join(" ")}
      id="clients"
      aria-labelledby="clients-heading"
    >
      <div className={styles.introduction}>
        <h2 id="clients-heading">Our clients</h2>
        <p>Security guard services</p>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track} style={trackStyle}>
          {[0, 1].map((group) => (
            <ul
              className={styles.logoGroup}
              key={group}
              aria-label={group === 0 ? "NPF SS clients" : undefined}
              aria-hidden={group === 1 ? true : undefined}
            >
              {items.map(({ client, repetition }) => {
                const duplicate = group === 1 || repetition > 0;
                return (
                  <li
                    className={styles.logoItem}
                    key={client.id + "-" + repetition}
                    aria-hidden={duplicate ? true : undefined}
                  >
                    <img
                      className={client.presentation === "wide" ? styles.wideLogo : styles.logo}
                      src={client.logo}
                      alt={duplicate ? "" : client.name}
                      width={client.width}
                      height={client.height}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
