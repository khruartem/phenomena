import type { FC } from "react";

import { Page } from "../../page";
import { Hero } from "../../../sections/hero";
import { About } from "../../../sections/about";
import { GlowTextUI } from "../../../components/ui/glow-text";

import type { TMainUIProps } from "./types";

import styles from "./main.module.css";

export const MainUI: FC<TMainUIProps> = () => {
  return (
    <Page className={styles.main}>
      <Hero />
      <About />
      <GlowTextUI>{"ищет феноменов"}</GlowTextUI>
    </Page>
  );
};
