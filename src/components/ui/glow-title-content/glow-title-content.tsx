import { forwardRef } from "react";

import type { TGlowTitleContentUIProps } from "./types";

import styles from "./glow-title-content.module.css";

export const GlowTitleContentUI = forwardRef<
  HTMLDivElement,
  TGlowTitleContentUIProps
>(({ children }, ref) => {
  return (
    <div className={styles.content} ref={ref}>
      {children}
    </div>
  );
});
