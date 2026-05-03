import type { FC } from "react";

import { SectionUI } from "../section";
import { PersonsTopUI } from "../persons-top";
import { PersonGroups } from "../../../components/person-groups";

import { useSetStyle } from "./useSetStyle";

import styles from "./persons.module.css";

export const PersonsUI: FC = () => {
  const sectionStyle = useSetStyle();

  return (
    <SectionUI
      id="persons"
      paddingedBlock={false}
      paddingedInline={false}
      className={styles.persons}
      style={sectionStyle}
    >
      <PersonsTopUI />
      <PersonGroups />
    </SectionUI>
  );
};
