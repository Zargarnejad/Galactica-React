import styles from "./page.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverImage}>
      <p>Date {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={roverName} />
    </div>
  );
};
