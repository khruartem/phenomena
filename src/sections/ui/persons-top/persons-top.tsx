import type { FC } from "react";

import { SectionTitleUI } from "../../../components/ui/section-title";
import { PersonTabBar } from "../../../components/person-tab-bar";

import { usePxToVw } from "../../../hooks/usePxToVw";

import styles from "./persons-top.module.css";

export const PersonsTopUI: FC = () => {
  const width = usePxToVw({
    large: 1384,
    desktop: 1152,
    laptop: 940,
    tablet: 708,
    mobile: 388,
  });
  const paddingInlineStart = usePxToVw({
    large: 24,
    desktop: 98,
    laptop: 80,
    tablet: 60,
    mobile: 16,
  });
  const paddingInlineEnd = usePxToVw({
    large: 24,
    laptop: 80,
  });
  const gap = usePxToVw({ mobile: 12 });

  return (
    <div
      className={styles.persons__top}
      style={{ width, paddingInlineStart, paddingInlineEnd, gap }}
    >
      <SectionTitleUI className={styles.persons__title}>
        {"Действующие лица"}
      </SectionTitleUI>
      <PersonTabBar />
    </div>
  );
};
