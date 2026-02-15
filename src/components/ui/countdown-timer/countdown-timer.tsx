import type { FC } from "react";

import type { TCountdownTimerUIProps } from "./types";
import { DigitsUI } from "../digits";
import { DotsUI } from "../dots";

import styles from "./countdown-timer.module.css";

export const CountdownTimerUI: FC<TCountdownTimerUIProps> = ({ timeLeft }) => {
  const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = timeLeft;

  return (
    <div className={styles.timer}>
      <DigitsUI value={daysLeft} text={"дней"} />
      <DotsUI direction="right" />
      <DigitsUI value={hoursLeft} text={"часов"} />
      <DotsUI direction="left" />
      <DigitsUI value={minutesLeft} text={"минут"} />
      <DotsUI direction="left" />
      <DigitsUI value={secondsLeft} text={"секунд"} />
    </div>
  );
};
