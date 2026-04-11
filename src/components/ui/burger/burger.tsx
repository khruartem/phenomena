import type { FC } from "react";

import styles from "./burger.module.css";
import { Menu } from "../../menu";
import { ButtonUI } from "../button";
import { Socials } from "../../socials";

export const BurgerUI: FC = () => {
  return (
    <div className={styles.burger}>
      <Menu />
      <div className={styles.burger__bottom}>
        <div className={styles.burger__buttons}>
          <ButtonUI variant={"secondary"} onClick={() => {}}>
            {"Участвовать в комиссии"}
          </ButtonUI>
          <ButtonUI variant={"ghost"} onClick={() => {}}>
            {"Поддержать ИВН"}
          </ButtonUI>
          <Socials gap={20} />
        </div>
      </div>
    </div>
  );
};
