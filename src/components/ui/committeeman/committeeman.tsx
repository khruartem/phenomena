import type { FC } from "react";

import { PersonFrameUI } from "../person-frame";
import { PersonInfoUI } from "../person-info";

import type { TCommitteemanUIProps } from "./types";

import { usePxToVw } from "../../../hooks/usePxToVw";

import styles from "./committeeman.module.css";

export const CommitteemanUI: FC<TCommitteemanUIProps> = ({
  info,
  appearance,
}) => {
  const width = usePxToVw({
    large: 520,
    desktop: 368,
    laptop: 460,
  });
  const height = usePxToVw({
    large: 228,
    desktop: 268,
  });

  return (
    <div className={styles.committeeman} style={{ width, height }}>
      {appearance?.image && <PersonFrameUI appearance={appearance} />}
      <PersonInfoUI type={"committee"} info={info} />
    </div>
  );
};
