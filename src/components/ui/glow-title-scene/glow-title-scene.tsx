import { forwardRef } from "react";

import type { TGlowTitleSceneUIProps } from "./types";

import styles from "./glow-title-scene.module.css";

export const GlowTitleSceneUI = forwardRef<
  HTMLDivElement,
  TGlowTitleSceneUIProps
>(({ children, onMouseEnter, onMouseMove, onMouseLeave }, ref) => {
  return (
    <div
      className={styles.scene}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      {children}
    </div>
  );
});
