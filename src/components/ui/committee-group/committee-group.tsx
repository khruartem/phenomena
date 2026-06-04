import type { FC } from "react";
import { nanoid } from "nanoid";

import { CommitteemanUI } from "../committeeman";

import type { TCommitteeGroupUIProps } from "./types";

import { useStyle } from "./useSetStyle";

import styles from "./committee-group.module.css";

export const CommitteeGroupUI: FC<TCommitteeGroupUIProps> = ({ persons }) => {
  const groupStyle = useStyle();

  return (
    <ul className={styles["committee-group"]} style={groupStyle}>
      {persons.map(({ info, appearance }) => (
        <li key={nanoid()}>
          <CommitteemanUI
            info={info}
            appearance={{
              ...appearance,
              caption: `Состав спектакля: ${info.main}`,
            }}
          />
        </li>
      ))}
    </ul>
  );
};
