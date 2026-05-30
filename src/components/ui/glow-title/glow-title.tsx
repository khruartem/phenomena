import { useRef, type FC } from "react";

import type { TGlowTitleUIProps } from "./types";

import styles from "./glow-title.module.css";
import clsx from "clsx";
import { TextUI } from "../text";
import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

export const GlowTitleUI: FC<TGlowTitleUIProps> = ({ children }) => {
  const content = useRef<HTMLDivElement | null>(null);
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
    const backgroundOn =
      "linear-gradient(180deg, var(--fire) 0%, var(--red) 100%)";

    if (lit.current && content.current) {
      lit.current.style.maskImage = maskOn;
      lit.current.style.backgroundImage = backgroundOn;
      lit.current.style.backgroundClip = "text";

      content.current.classList.add(styles.content_blured);
    } else return;
  };

  const handleMouseLeave = () => {
    const maskOff =
      "radial-gradient(circle 0px at -9999px -9999px, black 0%, transparent 100%)";
    const backgroundOff = "unset";

    if (lit.current && content.current) {
      lit.current.style.maskImage = maskOff;
      lit.current.style.backgroundImage = backgroundOff;
      lit.current.style.backgroundClip = "unset";

      content.current.classList.remove(styles.content_blured);
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
      <div className={styles.content} ref={content}>
        <div id="base" className={clsx(styles.content__base)}>
          <TextUI
            id="top"
            typography={Typography.Text_KharkivTone_400_60}
            color={Colors.Badge}
          >
            {"Институт внедрения навыков"}
          </TextUI>
          <span id="bottom" className={styles.content__base_imaged}>
            {children}
          </span>
        </div>
        <div id="lit" className={styles.content__lit} ref={lit}>
          <TextUI id="top" typography={Typography.Text_KharkivTone_400_60}>
            {"Институт внедрения навыков"}
          </TextUI>
          <span id="bottom">{children}</span>
        </div>
      </div>
    </div>
  );
};
