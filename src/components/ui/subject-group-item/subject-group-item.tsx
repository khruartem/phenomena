import type { FC } from "react";

import type { TSubjectGroupItemUIProps } from "./types";

import { useSetStyle } from "./useSetStyle";

import styles from "./subject-group-item.module.css";

export const SubjectGroupItemUI: FC<TSubjectGroupItemUIProps> = ({
  children,
  index,
}) => {
  const liStyle = useSetStyle(index);

  return (
    <li className={styles["subject-group__item"]} style={liStyle}>
      {children}
    </li>
  );
};
