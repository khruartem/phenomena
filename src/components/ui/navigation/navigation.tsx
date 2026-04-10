import type { FC } from "react";

import { Menu } from "../../menu";
import { ButtonUI } from "../button";
import { Socials } from "../../socials";

import styles from "./navigation.module.css";
import { useMedia } from "../../../hooks/useMedia";
import type { TNavigationUIProps } from "./types";
import { Icon } from "../../icon";

export const NavigationUI: FC<TNavigationUIProps> = ({ opened }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();
  const isLargeResolution = isLarge || isDesktop;

  return !isMobile ? (
    <div className={styles.navigation}>
      <Menu />
      <div className={styles.navigation__buttons}>
        {!isMobile && (
          <ButtonUI variant={"secondary"}>{"Участвовать"}</ButtonUI>
        )}
        {isLargeResolution ? (
          <Socials />
        ) : (
          <Icon name={opened ? "close" : "burger"} width={28} height={28} />
        )}
      </div>
    </div>
  ) : (
    <Icon name={opened ? "close" : "burger"} width={28} height={28} />
  );
};
