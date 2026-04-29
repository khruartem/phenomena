import type { FC } from "react";

import { PersonFrameUI } from "../person-frame";
import { PersonInfoUI } from "../person-info";

import type { TCommitteemanUIProps } from "./types";

import styles from "./committeeman.module.css";

export const CommitteemanUI: FC<TCommitteemanUIProps> = ({
  info,
  appearance,
}) => {
  return (
    <div className={styles.committeeman}>
      {appearance?.image && <PersonFrameUI appearance={appearance} />}
      <PersonInfoUI info={info} />
    </div>
  );
};
