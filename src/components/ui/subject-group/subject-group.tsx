import { type FC } from "react";
import { nanoid } from "nanoid";

import { SubjectUI } from "../subject";
import { SubjectGroupItemUI } from "../subject-group-item";

import type { TSubjectGroupUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./subject-group.module.css";

export const SubjectGroupUI: FC<TSubjectGroupUIProps> = ({ persons }) => {
  const groupStyle = useStyle();

  return (
    <ul className={styles["subject-group"]} style={groupStyle}>
      {persons.map(({ info, appearance }, index) => (
        <SubjectGroupItemUI key={nanoid()} index={index}>
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
