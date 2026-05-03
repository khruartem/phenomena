import type { FC } from "react";

import { CommitteemanUI } from "../committeeman";

import type { TCommitteeGroupUIProps } from "./types";

import { useSetStyle } from "./useSetStyle";

import styles from "./committee-group.module.css";

export const CommitteeGroupUI: FC<TCommitteeGroupUIProps> = ({ persons }) => {
  const ulStyle = useSetStyle();

  return (
    <ul className={styles["committee-group"]} style={ulStyle}>
      {persons.map(({ info, appearance }, index) => (
        <li key={index}>
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
