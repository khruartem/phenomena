import type { FC } from "react";

import { TextUI } from "../text";
import { PersonPositionUI } from "../person-position";

import type { TPersonInfoUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./person-info.module.css";

export const PersonInfoUI: FC<TPersonInfoUIProps> = ({ info }) => {
  const { isLaptop, isTablet, isMobile } = useMedia();
  const mobileResolution = isLaptop || isTablet || isMobile;

  const { character, actor, position } = info;

  return (
    <div
      id="person-info"
      className={styles["person-info"]}
      style={{ alignItems: mobileResolution ? "center" : undefined }}
    >
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
      <PersonPositionUI position={position} />
    </div>
  );
};
