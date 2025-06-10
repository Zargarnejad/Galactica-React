import classNames from "classnames";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, isActive, index }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{index}</b> {title}
      </Link>
    </li>
  );
};
