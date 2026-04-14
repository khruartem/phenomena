import type { FC } from "react";
import clsx from "clsx";

import { CobrandUI } from "../cobrand";
import { Navigation } from "../../navigation";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return (
    <header
      className={styles.header}
      style={{
        height: isLarge ? 72 : 56,
        paddingBlock: isLarge ? 16 : 8,
        paddingInline: clsx(
          isLarge && "8.13vw",
          isDesktop && "7.83vw",
          isLaptop && "4.10vw",
          isTablet && "3.91vw",
          isMobile && "3.81vw",
        ),
      }}
    >
      <CobrandUI />
      <Navigation />
    </header>
  );
};
