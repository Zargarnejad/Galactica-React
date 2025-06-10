export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <img src={icon} />
      <a href={url}>{title}</a>
    </li>
  );
};
