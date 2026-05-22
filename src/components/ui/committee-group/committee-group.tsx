import type { FC } from "react";
import { nanoid } from "nanoid";

import { CommitteemanUI } from "../committeeman";

import type { TCommitteeGroupUIProps } from "./types";

import { useSetStyle } from "./useSetStyle";

import styles from "./committee-group.module.css";

export const CommitteeGroupUI: FC<TCommitteeGroupUIProps> = ({ persons }) => {
  const ulStyle = useSetStyle();

  return (
    <ul className={styles["committee-group"]} style={ulStyle}>
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
