'use client'; // if you need interactivity

import Image from "next/image";
import styles from './Feature.module.css';

export default function Feature() {
  return (
    <section className={styles.topSection}>
      <div className={styles.left}>
        <Image
          src="/starfield.png"
          alt="Starfield background representing AI tech"
          width={400}
          height={400}
        />
      </div>

      <div className={styles.right}>
        <header>
          <h1 className={styles.title}>
            A World <br /> Supercomputer
          </h1>
          <p className={styles.tag}>/ THE NEXUS LAYER 1</p>
        </header>

        <div className={styles.circlePlus} aria-hidden="true"></div>

        <p className={styles.desc}>
          Nexus is a new kind of Layer 1 blockchain — purpose-built for the AI era.
          It’s verifiable. Exponentially scalable. Built for agents. And open to anyone.
        </p>

        <nav className={styles.buttonGroup} aria-label="Main actions">
          <button className={`${styles.btn} ${styles.black}`}>
            Button Name
            <span className={styles.arrowCircle}>
              <span className={styles.arrow}>→</span>
            </span>
          </button>
          <button className={`${styles.btn} ${styles.outline}`}>
            Button Name →
          </button>
        </nav>

        <section className={styles.features} aria-label="Key features">
          <ul>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <li className={styles.feature} key={i}>
                  <article>
                    <header className={styles.featureLeft}>
                      <h2>Horizontally + Vertically Scalable</h2>
                    </header>
                    <div className={styles.featureRight}>
                      <p>
                        The Nexus Layer 1 is EVM-compatible and optimized for
                        verifiable compute. Use Rust or Solidity to deploy
                        applications that invoke zk-proven computation or power
                        agentic services.
                      </p>
                      <div className={styles.icon}>
                        <i className="fas fa-gamepad"></i>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
