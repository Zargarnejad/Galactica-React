import { background } from "@chakra-ui/react";
import styles from "./page.module.css";

export const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us

  return (
    <section className={styles.crewSection}>
      <div className={styles.crewDescContainer}>
        <h2>Who we are?</h2>
        <p className={styles.crewDescription}>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
      </div>
      <div>
        <div className={styles.crewImagesContainer}>
          <div className={styles.crewCard}>
            <div className={styles.imageFrame}>
              <img
                className={styles.crewImage}
                src="/crew/image-mark-shuttleworth.png"
                alt="Mark Shuttleworth"
              />
            </div>
            <p className={styles.crewTitle}>Mark Shuttleworth</p>
            <p className={styles.crewSubtitle}>Chief Engineer</p>
            <p className={styles.crewCardDescription}>
              Our chief astrophysicist, Dr. Redding, is a renowned scientist who
              has contributed to major space discoveries. He ensures that every
              journey is as educational as it is exhilarating.
            </p>
          </div>

          <div className={styles.crewCard}>
            <div className={styles.imageFrame}>
              <img
                className={styles.crewImage}
                src="/crew/image-douglas-hurley.png"
                alt="Douglas Hurley"
              />
            </div>
            <p className={styles.crewTitle}>Douglas Hurley</p>
            <p className={styles.crewSubtitle}>Mission Specialist</p>
            <p className={styles.crewCardDescription}>
              As a mission specialist, Alex’s job is to ensure that every aspect
              of the journey runs smoothly. With a background in both science
              and adventure tourism, Alex is the perfect guide for our space
              travelers.
            </p>
          </div>

          <div className={styles.crewCard}>
            <div className={styles.imageFrame}>
              <img
                className={styles.crewImage}
                src="/crew/image-anousheh-ansari.png"
                alt="Anousheh Ansari"
              />
            </div>
            <p className={styles.crewTitle}>Anousheh Ansari</p>
            <p className={styles.crewSubtitle}>Chief Astrophysicist</p>
            <p className={styles.crewCardDescription}>
              A former NASA astronaut with over 15 years of experience, Captain
              Vega leads our missions with unparalleled expertise and a passion
              for space exploration.
              <br />
              <br />
            </p>
          </div>

          <div className={styles.crewCard}>
            <div className={styles.imageFrame}>
              <img
                className={styles.crewImage}
                src="/crew/image-victor-glover.png"
                alt="Victor Glover"
              />
            </div>
            <p className={styles.crewTitle}>Victor Glover</p>
            <p className={styles.crewSubtitle}>Crew Member</p>
            <p className={styles.crewCardDescription}>
              Our chief astrophysicist, Dr. Redding, is a renowned scientist who
              has contributed to major space discoveries. He ensures that every
              journey is as educational as it is exhilarating.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
