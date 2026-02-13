import type { FC } from "react";
import clsx from "clsx";

import type { TCountdownTimerUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./countdown-timer.module.css";

export const CountdownTimerUI: FC<TCountdownTimerUIProps> = ({ timeLeft }) => {
  const { isLarge, isMobile } = useMedia();

  return (
    <div className={styles.wrapper}>
      <h1
        className={clsx(
          styles.timer,
          isLarge && styles.timer_large,
          isMobile && styles.timer_mobile,
        )}
      >
        {timeLeft}
      </h1>
    </div>
  );
};
