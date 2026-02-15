import type { FC } from "react";

import type { TDotsUIProps } from "./types";

import dotsLeft from "../../../assets/icons/dots_left.svg";
import dotsRight from "../../../assets/icons/dots_right.svg";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./dots.module.css"

export const DotsUI: FC<TDotsUIProps> = ({ direction }) => {
  const { isDesktop, isMobile } = useMedia();

  return (
    <img
      style={{
        width: isDesktop || isMobile ? "32px" : "40px",
        height: isDesktop || isMobile ? "80px" : "100px",
      }}
      src={direction === "left" ? dotsLeft : dotsRight}
      alt="Dots"
      className={styles.dots}
    />
  );
};
