import type { FC } from "react";
import clsx from "clsx";

import { HeaderUI } from "../../components/ui/header";
import { FooterUI } from "../../components/ui/footer";

import type { TLayoutUIProps } from "./types";

import styles from "./layout.module.css";

export const LayoutUI: FC<TLayoutUIProps> = ({
  className,
  children,
  noHeader = false,
  noFooter = false,
}) => {
  return (
    <>
      {!noHeader && <HeaderUI />}
      <main className={clsx(styles.main, className && className)}>
        {children}
      </main>
      {!noFooter && <FooterUI />}
    </>
  );
};
