import type { FC } from "react";
import clsx from "clsx";

import { Page } from "../../page";
import { GlowTextUI } from "../../../components/ui/glow-text";

import type { TMainUIProps } from "./types";

import reactLogo from "../../../assets/react.svg";
import viteLogo from "/vite.svg";

import styles from "./main.module.css";
import { ButtonUI } from "../../../components/ui/button";

export const MainUI: FC<TMainUIProps> = () => {
  return (
    <Page className={styles.main}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={clsx(styles.logo, styles.react)}
            alt="React logo"
          />
        </a>
      </div>
      <GlowTextUI>{"ищет феноменов"}</GlowTextUI>
      <div className={styles.card}>
        <ButtonUI variant={"ghost"}>{"Label"}</ButtonUI>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </Page>
  );
};
