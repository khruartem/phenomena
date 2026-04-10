import type { FC } from "react";

import { CobrandUI } from "../cobrand";
import { Menu } from "../../menu";
import { ButtonUI } from "../button";
import { Socials } from "../../socials";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  const { isLarge } = useMedia();

  return (
    <header className={styles.header} style={{ height: isLarge ? 72 : 56 }}>
      <CobrandUI />
      <Menu />
      <div className={styles.header__buttons}>
        <ButtonUI variant={"secondary"}>{"Участвовать"}</ButtonUI>
        <Socials />
      </div>
    </header>
  );
};
