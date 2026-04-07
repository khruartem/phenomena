import type { FC } from "react";

import { CobrandUI } from "../cobrand";
import { Menu } from "../../menu";
import { ButtonUI } from "../button";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  return (
    <header className={styles.header}>
      <CobrandUI />
      <Menu />
      <ButtonUI variant={"secondary"}>{"Label"}</ButtonUI>
    </header>
  );
};
