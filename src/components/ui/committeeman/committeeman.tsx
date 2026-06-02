import type { FC } from "react";

import { PersonFrameUI } from "../person-frame";
import { PersonInfoUI } from "../person-info";

import type { TCommitteemanUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./committeeman.module.css";

export const CommitteemanUI: FC<TCommitteemanUIProps> = ({
  info,
  appearance,
}) => {
  const committeemanStyle = useStyle();

  return (
    <div className={styles.committeeman} style={committeemanStyle}>
      {appearance?.image && <PersonFrameUI appearance={appearance} />}
      <PersonInfoUI type={"committee"} info={info} />
    </div>
  );
};
