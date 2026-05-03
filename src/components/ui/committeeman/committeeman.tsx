import type { FC } from "react";

import { PersonFrameUI } from "../person-frame";
import { PersonInfoUI } from "../person-info";

import type { TCommitteemanUIProps } from "./types";

import { useSetStyle } from "./useSetStyle";

import styles from "./committeeman.module.css";

export const CommitteemanUI: FC<TCommitteemanUIProps> = ({
  info,
  appearance,
}) => {
  const divStyle = useSetStyle();

  return (
    <div className={styles.committeeman} style={divStyle}>
      {appearance?.image && <PersonFrameUI appearance={appearance} />}
      <PersonInfoUI type={"committee"} info={info} />
    </div>
  );
};
