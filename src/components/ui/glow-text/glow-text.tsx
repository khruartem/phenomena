import { useRef, type FC } from "react";

import type { TGlowTextUIProps } from "./types";

import styles from "./glow-text.module.css";

export const GlowTextUI: FC<TGlowTextUIProps> = ({ children }) => {
  const scene = useRef<HTMLDivElement | null>(null);
  const lit = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (lit.current && scene.current) {
      const litRect = lit.current?.getBoundingClientRect();
      const x = e.clientX - litRect?.left;
      const y = e.clientY - litRect?.top;
      lit.current.style.setProperty("--x", `${x}px`);
      lit.current.style.setProperty("--y", `${y}px`);
      scene.current.style.setProperty("--x", `${x}px`);
      scene.current.style.setProperty("--y", `${y}px`);
    } else return;
  };

  const handleMouseEnter = () => {
    const maskOn =
      "radial-gradient(circle 168px at var(--x) var(--y), black 0%, black 30%, transparent 100%)";

    if (lit.current) {
      lit.current.style.maskImage = maskOn;
    } else return;
  };

  const handleMouseLeave = () => {
    const maskOff =
      "radial-gradient(circle 0px at -9999px -9999px, black 0%, transparent 100%)";

    if (lit.current) {
      lit.current.style.maskImage = maskOff;
    } else return;
  };

  return (
    <div
      className={styles.scene}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scene}
    >
      <div className={styles.title}>
        <div id="base" className={styles.title__base}>
          {children}
        </div>
        <div id="lit" className={styles.title__lit} ref={lit}>
          {children}
        </div>
      </div>
    </div>
  );
};
