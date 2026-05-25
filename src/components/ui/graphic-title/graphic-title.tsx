import type { FC } from "react";

import { TextUI } from "../text";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useMedia } from "../../../hooks/useMedia";
import { useTypography } from "./useTypography";

import styles from "./graphic-title.module.css";

export const GraphicTitleUI: FC = () => {
  const { isLaptop, isTablet, isMobile } = useMedia();
  const smallResolution = isLaptop || isTablet || isMobile;

  const mainTypography = useTypography("main");
  const subTypography = useTypography("sub");

  return smallResolution ? (
    <div
      className={styles.graphic__title}
      style={{ gap: isLaptop ? 8 : undefined }}
    >
      <TextUI typography={Typography[mainTypography]} color={Colors.Badge}>
        {"Институт внедрения навыков"}
      </TextUI>
      <TextUI typography={Typography[subTypography]} color={Colors.White100}>
        {"ищет феноменов"}
      </TextUI>
    </div>
  ) : null;
};
