import type { FC } from "react";

import { Menu } from "../../menu";
import { ButtonUI } from "../button";
import { Socials } from "../../socials";
import { Copyright } from "../../copyright";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./burger.module.css";
import type { TBurgerUIProps } from "./types";
import clsx from "clsx";

export const BurgerUI: FC<TBurgerUIProps> = ({ opened }) => {
  const { isMobile } = useMedia();

  return (
    <div
      className={clsx(
        styles.burger,
        opened ? styles.burger_opened : styles.burger_closed,
      )}
    >
      {/* <div
        className={styles.burger__content}
        style={{ transform: opened ? "translateY(0)" : "translateY(100%)" }}
      > */}
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
          style={{ paddingBlockEnd: isMobile ? 20 : 40 }}
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
    </div>
  );
};
