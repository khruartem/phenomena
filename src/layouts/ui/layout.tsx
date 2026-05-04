import type { FC } from "react";
import clsx from "clsx";

import { HeaderUI } from "../../components/ui/header";
import { FooterUI } from "../../components/ui/footer";

import type { TLayoutUIProps } from "./types";

import styles from "./layout.module.css";

export const LayoutUI: FC<TLayoutUIProps> = ({
  className,
  children,
  noHeader,
  noFooter,
}) => {
  return (
    <>
      {!noHeader && <HeaderUI />}
      <main
        className={clsx(
          styles.main,
          noHeader && noFooter && styles.main_blank,
          className && className,
        )}
      >
        {children}
      </main>
      {!noFooter && <FooterUI />}
    </>
  );
};
