import type { FC } from "react";

import type { TTabUIProps } from "./types";

import { Tabs } from "../../../utils/tabs";

import styles from "./tab.module.css";
import { TextUI } from "../text";
import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

export const TabUI: FC<TTabUIProps> = ({ tab, current, onClick }) => {
  return (
    <li className={styles.tab} onClick={onClick}>
      <TextUI
        typography={Typography.Text_KharkivTone_400_16}
        color={current ? Colors.White100 : Colors.White50}
        className={styles.tab__text}
      >
        {Tabs[tab]}
      </TextUI>
    </li>
  );
};
