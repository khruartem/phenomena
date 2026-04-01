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
    <>
      {/* <h2 className={styles.text}>{children}</h2> */}
      <svg
        className={styles.logo}
        width="900"
        height="200"
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />

            <feOffset in="blur" dx="0" dy="6" result="offsetBlur" />

            <feComposite
              in="offsetBlur"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="innerShadow"
            />

            <feColorMatrix
              in="innerShadow"
              type="matrix"
              values="
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 .75 0"
              result="shadowColor"
            />

            <feComposite in="shadowColor" in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        <text x="10" y="0" className={styles.text} filter="url(#innerShadow)">
          {children}
        </text>
      </svg>
    </>
  );
};
