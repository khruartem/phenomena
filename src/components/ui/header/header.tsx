import type { FC } from "react";

import { CobrandUI } from "../cobrand";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  return (
    <header className={styles.header}>
      <CobrandUI />
    </header>
  );
};
