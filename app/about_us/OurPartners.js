
import styles from "./page.module.css";

export const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
    return (
      <section className={styles.partnerContainer}>
        <p>
          We collaborate with some of the most respected names in the space and
          technology industries to make every journey extraordinary.
        </p>
        <div className={styles.partnerLogoContainer}>
          <img
            className={styles.partnerLogo}
            src="/business_partners/alphabet-logo.png"
            alt="alphabet logo"
          />
          <img
            className={styles.partnerLogo}
            src="/business_partners/amazon_logo.png"
            alt="amazon logo"
          />
          <img
            className={styles.partnerLogo}
            src="/business_partners/CBC_Logo_White.png"
            alt="cbc logo"
          />
          <img
            className={styles.partnerLogo}
            src="/business_partners/Microsoft-logo-white.png"
            alt="microsoft logo"
          />
          <img
            className={styles.partnerLogo}
            src="/business_partners/nyu-logo.png"
            alt="nyu logo"
          />
          <img
            className={styles.partnerLogo}
            src="/business_partners/QueensLogo_white.png"
            alt="queens logo"
          />
          <img
            className={styles.partnerLogo}
            src="/business_partners/samsung-logo.png"
            alt="samsung logo"
          />
          <img
            className={styles.partnerLogo}
            src="/business_partners/sodexo-logo.png"
            alt="sodexo logo"
          />
        </div>
      </section>
    );
  }

  