import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../text";

import type { TDigitsUIProps } from "./types";

import { initDigitsTypography } from "../../../utils/initTypography";
import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./digits.module.css";

export const DigitsUI: FC<TDigitsUIProps> = ({ value, text }) => {
  const media = useMedia();
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = media;

  return (
    <div
      className={clsx(
        styles.wrapper,
        (isLarge || isLaptop) && styles["wrapper_large-width"],
        (isDesktop || isTablet) && styles["wrapper_middle-width"],
        isMobile && styles["wrapper_small-width"],
      )}
    >
      <TextUI
        typography={initDigitsTypography(media)}
        color={Colors.White100}
        className={clsx(
          styles.digits,
          (isLarge || isLaptop) && styles["digits_large-height"],
          (isDesktop || isTablet) && styles["digits_middle-height"],
          isMobile && styles["digits_small-height"],
        )}
      >
        {value}
      </TextUI>
      <TextUI
        typography={isMobile ? Typography.Text_16 : Typography.Text_24}
        color={Colors.White100}
        className={styles.text}
      >
        {text}
      </TextUI>
    </div>
  );
};
