import type { FC } from "react";

import { TextUI } from "../text";

import type { TSloganUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./slogan.module.css";

export const SloganUI: FC<TSloganUIProps> = ({ text }) => {
  return (
    <TextUI
      typography={Typography.Text_32}
      color={Colors.Light}
      className={styles.slogan}
    >
      {text}
    </TextUI>
  );
};
