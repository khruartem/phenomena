import { forwardRef } from "react";

import { PersonGroup } from "../../person-group";

import type { TPersonGroupsUIProps } from "./types";

import styles from "./persons-groups.module.css";

export const PersonGroupsUI = forwardRef<
  HTMLUListElement,
  TPersonGroupsUIProps
>(({ groups, onScroll }, ref) => {
  return (
    <ul className={styles.persons__groups} ref={ref} onScrollEnd={onScroll}>
      {groups.map((group) => (
        <li key={group.type} id={group.type} className={styles.persons__group}>
          <PersonGroup type={group.type} persons={group.persons} />
        </li>
      ))}
    </ul>
  );
});
