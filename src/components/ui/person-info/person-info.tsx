import type { FC } from "react";

import { TextUI } from "../text";
import { PersonPositionUI } from "../person-position";

import type { TPersonInfoUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./person-info.module.css";

export const PersonInfoUI: FC<TPersonInfoUIProps> = ({ info, style }) => {
  const { main, extra, position } = info;

  return (
    <div id="person-info" className={styles["person-info"]} style={style}>
      <div className={styles["person-info__main"]}>
        <TextUI
          typography={Typography.Text_KharkivTone_400_22}
          color={Colors.Badge}
        >
          {main}
        </TextUI>
        <TextUI
          typography={Typography.Text_KharkivTone_400_16}
          color={Colors.White100}
        >
          {extra}
        </TextUI>
      </div>
      {position && <PersonPositionUI position={position} />}
    </div>
  );
};
