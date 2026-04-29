import { forwardRef } from "react";

import { SubjectGroupUI } from "../subject-group";
import { CommitteeGroupUI } from "../committee-group";

import type { TPersonGroupsUIProps } from "./types";

import styles from "./persons-groups.module.css";

export const PersonGroupsUI = forwardRef<
  HTMLUListElement,
  TPersonGroupsUIProps
>(({ groups, onScroll }, ref) => {
  return (
    <ul className={styles.persons__groups} ref={ref} onScrollEnd={onScroll}>
      {groups.map((group, index) => (
        <li key={index} id={group.type} className={styles.persons__group}>
          {group.type === "subjects" && (
            <SubjectGroupUI persons={group.persons} />
          )}
          {group.type === "committee" && (
            <CommitteeGroupUI persons={group.persons} />
          )}
        </li>
      ))}
    </ul>
  );
});
