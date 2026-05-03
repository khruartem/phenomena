import { type FC } from "react";

import { SubjectUI } from "../subject";
import { SubjectGroupItemUI } from "../subject-group-item";

import type { TSubjectGroupUIProps } from "./types";

import { useSetStyle } from "./useSetStyle";

import styles from "./subject-group.module.css";

export const SubjectGroupUI: FC<TSubjectGroupUIProps> = ({ persons }) => {
  const ulStyle = useSetStyle();

  return (
    <ul className={styles["subject-group"]} style={ulStyle}>
      {persons.map(({ info, appearance }, index) => (
        <SubjectGroupItemUI key={index} index={index}>
          <SubjectUI
            info={info}
            appearance={{
              ...appearance,
              caption: `Изображение персонажа ${info.main} в исполнении ${info.extra}`,
            }}
          />
        </SubjectGroupItemUI>
      ))}
    </ul>
  );
};
