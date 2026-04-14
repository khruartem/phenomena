import type { FC } from "react";

import { Page } from "../../page";
import { GlowTextUI } from "../../../components/ui/glow-text";

import type { TMainUIProps } from "./types";

import styles from "./main.module.css";
import { ButtonUI } from "../../../components/ui/button";
import { Icon } from "../../../components/icon";
import { HeaderUI } from "../../../components/ui/header";

export const MainUI: FC<TMainUIProps> = () => {
  return (
    <Page className={styles.main}>
      <HeaderUI />
      <GlowTextUI>{"ищет феноменов"}</GlowTextUI>
      <div className={styles.card}>
        <ButtonUI variant={"ghost"} onClick={() => {}}>
          <Icon name="telegram" width={28} height={28} />
          {/* {"Label"} */}
        </ButtonUI>
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
