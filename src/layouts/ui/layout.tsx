import type { FC } from "react";
import clsx from "clsx";

import type { TLayoutUIProps } from "./types";

import styles from "./layout.module.css";

export const LayoutUI: FC<TLayoutUIProps> = ({ className, children }) => {
  return (
    <main className={clsx(styles.main, className && className)}>
      {children}
    </main>
  );
};
