import { type FC } from "react";
import clsx from "clsx";

import type { TGlowTitleBaseUIProps } from "./types";

import styles from "./glow-title-base.module.css";
import { useMedia } from "../../../hooks/useMedia";

export const GlowTitleBaseUI: FC<TGlowTitleBaseUIProps> = ({ children }) => {
  const {isLarge, isDesktop} = useMedia();

  return (
    <div id="base" className={clsx(
      styles.content__base,
      isLarge && styles.content__base_large,
      isDesktop && styles.content__base_desktop,
    )}>
      {children}
    </div>
  );
};
