import styles from "./Footer.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <img className={styles.socialmediaIcon} src={icon} />
      <a href={url}>{title}</a>
    </li>
  );
};
