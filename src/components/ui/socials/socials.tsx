import type { FC } from "react";

import { Icon } from "../../icon";

import type { TSocialsUIProps } from "./types";

import styles from "./socials.module.css";

export const SocialsUI: FC<TSocialsUIProps> = ({ items, gap }) => {
  return (
    <ul className={styles.socials} style={{ gap }}>
      {items.map((item, index) => (
        <li key={index} className={styles.socials__item}>
          <Icon
            name={item.icon}
            width={28}
            height={28}
            onClick={item.onClick}
          />
        </li>
      ))}
    </ul>
  );
};
