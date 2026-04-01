import { useRef, type FC } from "react";

import type { TGradientTextSpotUIProps } from "./types";

import styles from "./gradient-text-spot.module.css";

export const GradientTextSpotUI: FC<TGradientTextSpotUIProps> = ({
  children,
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  const handleMouseEnter = () => {
    ref.current?.classList.add(styles.hovered);
  };

  const handleMouseLeave = () => {
    ref.current?.classList.remove(styles.hovered);
    ref.current?.style.removeProperty("--x");
    ref.current?.style.removeProperty("--y");
  };

  return (
    <h2
      ref={ref}
      className={styles["gradient-text-spot"]}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </h2>
  );
};