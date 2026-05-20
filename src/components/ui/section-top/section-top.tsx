import type { FC } from "react";

import { SectionTitleUI } from "../section-title";

import type { TSectionTopUIProps } from "./types";

import { useSetStyle } from "./useSetStyle";

import styles from "./section-top.module.css";
import clsx from "clsx";

export const SectionTopUI: FC<TSectionTopUIProps> = ({
  title,
  tabBar,
  className,
  style,
}) => {
  const divStyle = useSetStyle();

  return (
    <div
      className={clsx(styles.section__top, className && className)}
      style={{ ...divStyle, ...style }}
    >
      <SectionTitleUI className={styles.section__title}>{title}</SectionTitleUI>
      {tabBar}
    </div>
  );
};
