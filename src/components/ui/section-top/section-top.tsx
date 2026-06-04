import type { FC } from "react";
import clsx from "clsx";

import { SectionTitleUI } from "../section-title";

import type { TSectionTopUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./section-top.module.css";

export const SectionTopUI: FC<TSectionTopUIProps> = ({
  title,
  tabBar,
  className,
  style,
}) => {
  const sectionTopStyle = useStyle();

  return (
    <div
      className={clsx(styles.section__top, className && className)}
      style={{ ...sectionTopStyle, ...style }}
    >
      <SectionTitleUI className={styles.section__title}>{title}</SectionTitleUI>
      {tabBar}
    </div>
  );
};
