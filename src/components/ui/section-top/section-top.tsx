import type { FC } from "react";

import { SectionTitleUI } from "../section-title";

import type { TSectionTopUIProps } from "./types";

import { useSetStyle } from "./useSetStyle";

import styles from "./section-top.module.css";

export const SectionTopUI: FC<TSectionTopUIProps> = ({ title, tabBar }) => {
  const divStyle = useSetStyle();

  return (
    <div className={styles.section__top} style={divStyle}>
      <SectionTitleUI className={styles.section__title}>{title}</SectionTitleUI>
      {tabBar}
    </div>
  );
};
