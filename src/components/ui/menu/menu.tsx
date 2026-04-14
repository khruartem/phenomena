import type { FC } from "react";

import { MenuItemUI } from "../menu-item";

import type { TMenuUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./menu.module.css";

export const MenuUI: FC<TMenuUIProps> = ({ items }) => {
  const { isLarge, isDesktop } = useMedia();

  return (
    <nav className={styles.menu}>
      <ul
        className={styles.menu__list}
        style={{ flexDirection: isLarge || isDesktop ? "row" : "column" }}
      >
        {items.map(({ label, to }, index) => (
          <MenuItemUI key={index} label={label} to={to} />
        ))}
      </ul>
    </nav>
  );
};
