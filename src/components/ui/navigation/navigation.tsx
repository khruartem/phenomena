import type { FC } from "react";
import clsx from "clsx";

import { Menu } from "../../menu";
import { ButtonUI } from "../button";
import { Socials } from "../../socials";
import { OpenNavigation } from "../../open-navigation";
import { Burger } from "../../burger";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./navigation.module.css";

export const NavigationUI: FC = () => {
  const { isLarge, isDesktop, isMobile } = useMedia();
  const isLargeResolution = isLarge || isDesktop;

  return (
    <>
      {!isMobile ? (
        <div
          className={styles.navigation}
          style={{ gap: clsx(isLarge && "48px", isDesktop && "50px") }}
        >
          {isLargeResolution && <Menu />}
          <div
            className={styles.navigation__buttons}
            style={{ gap: isLargeResolution ? 4 : 8 }}
          >
            {!isMobile && (
              <ButtonUI variant={"secondary"} onClick={() => {}}>
                {"Участвовать"}
              </ButtonUI>
            )}
            {isLargeResolution ? <Socials /> : <OpenNavigation />}
          </div>
        </div>
      ) : (
        <OpenNavigation />
      )}
      {!isLargeResolution && <Burger />}
    </>
  );
};
