import type { FC } from "react";
import { TextUI } from "../text";
import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./teleport.module.css";

export const TeleportUI: FC = () => {
  return (
    <div className={styles.teleport}>
      <TextUI typography={Typography.Text_16} color={Colors.Light}>
        {"Следите за"}
      </TextUI>
      <a href={"https://t.me/ivn_journal"} target="_blank">
        {"новостями"}
      </a>
    </div>
  );
};
