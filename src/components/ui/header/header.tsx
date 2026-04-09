import type { FC } from "react";

import { CobrandUI } from "../cobrand";
import { Menu } from "../../menu";
import { ButtonUI } from "../button";

import styles from "./header.module.css";
import { Socials } from "../../socials";

export const HeaderUI: FC = () => {
  return (
    <header className={styles.header}>
      <CobrandUI />
      <Menu />
      <div className={styles.header__buttons}>
        <ButtonUI variant={"secondary"}>{"Участвовать"}</ButtonUI>
        <Socials />
      </div>
    </header>
  );
};
