import type { FC } from "react";

import { TextUI } from "../text";
import { Icon } from "../../icon";
import { PersonPositionUI } from "../person-position";

import type { TPersonInfoUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./person-info.module.css";

export const PersonInfoUI: FC<TPersonInfoUIProps> = ({ info }) => {
  const { character, actor, position, icon } = info;

  return (
    <div id="person-info" className={styles["person-info"]}>
      <div className={styles["person-info__main"]}>
        <TextUI
          typography={Typography.Text_KharkivTone_400_22}
          color={Colors.Badge}
        >
          {character}
        </TextUI>
        <TextUI
          typography={Typography.Text_KharkivTone_400_16}
          color={Colors.White100}
        >
          {actor}
        </TextUI>
      </div>
      {position && icon && (
        <div className={styles["person-info__extra"]}>
          <Icon name={icon} width={28} height={28} color={Colors.White100} />
          <PersonPositionUI position={position} />
        </div>
      )}
    </div>
  );
};
