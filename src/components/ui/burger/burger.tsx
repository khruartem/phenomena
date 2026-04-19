import type { FC } from "react";
import clsx from "clsx";

import { Menu } from "../../menu";
import { ButtonUI } from "../button";
import { Socials } from "../../socials";
import { Copyright } from "../../copyright";

import type { TBurgerUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./burger.module.css";
import { createPortal } from "react-dom";

export const BurgerUI: FC<TBurgerUIProps> = ({ opened }) => {
  const { isLaptop, isTablet, isMobile } = useMedia();

  return createPortal(
    <div
      className={clsx(
        styles.burger,
        opened ? styles.burger_opened : styles.burger_closed,
      )}
    >
      <div
        className={clsx(
          styles.burger__content,
          opened
            ? styles.burger__content_opened
            : styles.burger__content_closed,
        )}
      >
        <Menu />
        <div
          className={styles.burger__bottom}
          style={{
            paddingBlockEnd: isMobile ? 20 : 40,
            gap: clsx(
              isLaptop && "3.91vw",
              isTablet && "5.21vw",
              isMobile && window.innerHeight >= 855 ? "9.52vw" : 7,
            ),
          }}
        >
          <div
            className={styles.burger__buttons}
            style={{ width: isMobile ? 297 : 540 }}
          >
            <ButtonUI variant={"secondary"} onClick={() => {}}>
              {"Участвовать в комиссии"}
            </ButtonUI>
            <ButtonUI variant={"ghost"} onClick={() => {}}>
              {"Поддержать ИВН"}
            </ButtonUI>
            <Socials gap={20} />
          </div>
          <Copyright />
        </div>
      </div>
    </div>,
    document.body,
  );
};
