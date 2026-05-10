import type { FC } from "react";
import { HashLink } from "react-router-hash-link";

import type { TMenuItemUIProps } from "./types";

import styles from "./menu-item.module.css";

export const MenuItemUI: FC<TMenuItemUIProps> = ({ label, to, onClick }) => {
  return (
    <li className={styles.menu__item}>
      <HashLink
        to={`/${to}`}
        scroll={(el) => {
          el.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }}
        onClick={onClick}
      >
        {label}
      </HashLink>
    </li>
  );
};
