import type { FC } from "react";

import { Menu } from "../../menu";
import { ButtonUI } from "../button";
import { Socials } from "../../socials";
import { OpenNavigationUI } from "../open-navigation";
import { BurgerUI } from "../burger";

import type { TNavigationUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./navigation.module.css";
import clsx from "clsx";

export const NavigationUI: FC<TNavigationUIProps> = ({ opened, onOpen }) => {
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
            {isLargeResolution ? (
              <Socials />
            ) : (
              <OpenNavigationUI opened={opened} onOpen={onOpen} />
            )}
          </div>
        </div>
      ) : (
        <OpenNavigationUI opened={opened} onOpen={onOpen} />
      )}
      {!isLargeResolution && <BurgerUI opened={opened} />}
    </>
  );
};
