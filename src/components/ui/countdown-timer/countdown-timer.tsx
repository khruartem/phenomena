import type { FC } from "react";

import type { TCountdownTimerUIProps } from "./types";

import styles from "./countdown-timer.module.css";

export const CountdownTimerUI: FC<TCountdownTimerUIProps> = ({ timeLeft }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.timer}>{timeLeft}</h1>
    </div>
  );
};
