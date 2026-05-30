import { forwardRef } from "react";

import type { TGlowTitleLitUIProps } from "./types";

import styles from "./glow-title-lit.module.css";

export const GlowTitleLitUI = forwardRef<HTMLDivElement, TGlowTitleLitUIProps>(
  ({ children }, ref) => {
    return (
      <div id="lit" className={styles.content__lit} ref={ref}>
        {children}
      </div>
    );
  },
);
