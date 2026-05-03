import type { FC } from "react";

import { SectionTitleUI } from "../../../components/ui/section-title";
import { PersonTabBar } from "../../../components/person-tab-bar";

import { useSetStyle } from "./useSetStyle";

import styles from "./persons-top.module.css";

export const PersonsTopUI: FC = () => {
  const divStyle = useSetStyle();

  return (
    <div className={styles.persons__top} style={divStyle}>
      <SectionTitleUI className={styles.persons__title}>
        {"Действующие лица"}
      </SectionTitleUI>
      <PersonTabBar />
    </div>
  );
};
