import type { FC } from "react";
import clsx from "clsx";

import type { TSectionUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./section.module.css";

export const SectionUI: FC<TSectionUIProps> = ({
  children,
  id,
  paddingedBlock = true,
  paddingedInline = true,
  gap = 0,
  hidden = false,
  className,
  style,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const paddingedBlockStyle = clsx(
    isLarge && "5.21vw",
    isDesktop && "4.39vw",
    isLaptop && "5.86vw",
    isTablet && "0 4.17vw",
    isMobile && "9.52vw",
  );

  const paddingedInlineStyle = clsx(
    isLarge && "8.12vw",
    isDesktop && "7.83vw",
    isLaptop && "4.10vw",
    isTablet && "3.91vw",
    isMobile && "3.81vw",
  );

  return (
    <section
      id={id}
      className={clsx(styles.section, className && className)}
      style={{
        display: clsx(hidden && "none"),
        paddingBlock: clsx(paddingedBlock && paddingedBlockStyle),
        paddingInline: clsx(paddingedInline && paddingedInlineStyle),
        gap,
        ...style,
      }}
    >
      {children}
    </section>
  );
};
