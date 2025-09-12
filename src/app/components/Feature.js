import Image from "next/image";
import styles from "./Feature.module.css";

export default function Feature({ viewmode = "grid" }) {
  console.log(viewmode);
  return (
    <section className={styles.topSection}>
      <picture className={styles.left}>
        <Image
          src="/starfield.svg"
          alt="Starfield background representing AI tech"
          width={586}
          height={586}
          className={styles.stickyImage}
        />
      </picture>

      <div className={styles.right}>
        <header>
          <h4 className={styles.title}>
            A World <br /> Supercomputer
          </h4>

          <p className={styles.tag}>/ THE NEXUS LAYER 1</p>
        </header>
        <picture className={styles.pluscircle}>
          <Image
            src="/CirclePlus.svg"
            width={16}
            height={16}
            alt="circle plus"
          />
        </picture>
        <p className={styles.desc}>
          Nexus is a new kind of Layer 1 blockchain — purpose-built for the AI
          era. It’s verifiable. Exponentially scalable. Built for agents. And
          open to anyone.
        </p>

        <div className={styles.buttonGroup} aria-label="Main actions">
          <button className={`${styles.btn} ${styles.black}`}>
            Button Name
            <span className={styles.arrowCircle}>
              <span className={styles.arrow}>
                <img src="/Arrows.svg"></img>
              </span>
              <span className={styles.arrow2}>
                <img src="/Arrows.svg"></img>
              </span>
            </span>
          </button>
          <button className={`${styles.btn} ${styles.outline}`}>
            Button Name
            <span className={styles.arrow}>
              <img src="/Arrows.svg"></img>
            </span>
          </button>
        </div>
        {viewmode === "list" && (
          <ul className={styles.features} aria-label="Key features">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <li className={styles.feature} key={i}>
                  <div className={styles.featureLeft}>
                    <h3>Horizontally + Vertically Scalable</h3>
                  </div>
                  <div className={styles.featureRight}>
                    <p>
                      The Nexus Layer 1 is EVM-compatible and optimized for
                      verifiable compute. Use Rust or Solidity to deploy
                      applications that invoke zk-proven computation or power
                      agentic services.
                    </p>
                    <figure className={styles.icon}>
                      <img src="/Socials.svg" alt="Icon" />
                    </figure>
                  </div>
                </li>
              ))}
          </ul>
        )}
        {viewmode === "grid" && (
          <ul className={styles.featuresgrid} aria-label="Key features">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <li className={styles.featuregrid} key={i}>
                  <figure className={styles.icon}>
                    <img src="/Socials.svg" alt="Icon" />
                  </figure>
                  <div className={styles.featuregridtop}>
                    <h3>Horizontally + Vertically Scalable</h3>
                  </div>
                  <div className={styles.featuregridRight}>
                    <p>
                      The Nexus Layer 1 is EVM-compatible and optimized for
                      verifiable compute. Use Rust or Solidity to deploy
                      applications that invoke zk-proven computation or power
                      agentic services.
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
}
