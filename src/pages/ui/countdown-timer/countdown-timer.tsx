import type { FC } from "react";
import clsx from "clsx";

import { Page } from "../../page";
import { LogoUI } from "../../../components/ui/logo";
import { DigitsUI } from "../../../components/ui/digits";
import { DotsUI } from "../../../components/ui/dots";
import { TeleportUI } from "../../../components/ui/teleport";
import { Slogan } from "../../../components/slogan";

import type { TCountdownTimerUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./countdown-timer.module.css";

export const CountdownTimerUI: FC<TCountdownTimerUIProps> = ({ timeLeft }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = timeLeft;

  return (
    <Page
      className={clsx(
        styles.main_timer,
        isLarge && styles.main_timer_large,
        isDesktop && styles.main_timer_desktop,
        isLaptop && styles.main_timer_laptop,
        isTablet && styles.main_timer_tablet,
        isMobile && styles.main_timer_mobile,
      )}
    >
      <LogoUI
        type={"logo-full"}
        style={{
          marginBlockEnd: clsx(
            isLarge && "12.50vw",
            isDesktop && "12.59vw",
            isLaptop && "28.91vw",
            isTablet && "28.65vw",
            isMobile && "30vw",
          ),
        }}
      />
      <div
        className={styles.timer}
        style={{
          rowGap: clsx(
            isLaptop && "5.86vw",
            isTablet && "5.21vw",
            isMobile && "4.76vw",
          ),
          maxWidth: clsx(isTablet && "57.30vw"),
        }}
      >
        <DigitsUI value={daysLeft} text={"дней"} />
        <DotsUI direction={isLarge || isDesktop ? "right" : "left"} />
        <DigitsUI value={hoursLeft} text={"часов"} />
        {(isLarge || isDesktop) && <DotsUI direction="left" />}
        <DigitsUI value={minutesLeft} text={"минут"} />
        <DotsUI direction={isLarge || isDesktop ? "left" : "right"} />
        <DigitsUI value={secondsLeft} text={"секунд"} />
      </div>
      <div
        className={clsx(
          styles.bottom,
          isLarge && styles.bottom_large,
          isDesktop && styles.bottom_desktop,
          isLaptop && styles.bottom_laptop,
          isTablet && styles.bottom_tablet,
          isMobile && styles.bottom_mobile,
        )}
      >
        <Slogan />
        <TeleportUI />
      </div>
    </Page>
  );
};
