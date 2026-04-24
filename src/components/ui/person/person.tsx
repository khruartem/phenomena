import type { FC } from "react";
import clsx from "clsx";

import { PersonInfoUI } from "../person-info";

import type { TPersonUIProps } from "./types";

import { Colors } from "../../../utils/colors";

import styles from "./person.module.css";

// Нормализованные пути (координаты ÷ 248), скругления из SVG дизайнера
const CLIP_PATHS = {
  // Срезы: верхний-левый + нижний-правый
  left: `
    M 0.26743 0.00403
    H 0.97619
    C 0.98711 0.00403 0.99597 0.01289 0.99597 0.02381
    V 0.73257
    C 0.99597 0.74412 0.99137 0.75521 0.98319 0.76339
    L 0.76339 0.98319
    C 0.75521 0.99137 0.74412 0.99597 0.73257 0.99597
    H 0.02381
    C 0.01289 0.99597 0.00403 0.98711 0.00403 0.97619
    V 0.26743
    C 0.00403 0.25588 0.00863 0.24477 0.01681 0.23661
    L 0.23661 0.01681
    C 0.24477 0.00863 0.25588 0.00403 0.26743 0.00403
    Z
  `,
  // Срезы: верхний-правый + нижний-левый (горизонтально зеркальный)
  right: `
    M 0.02381 0.00403
    H 0.73257
    C 0.74412 0.00403 0.75521 0.00863 0.76339 0.01681
    L 0.98319 0.23661
    C 0.99137 0.24477 0.99597 0.25588 0.99597 0.26743
    V 0.97619
    C 0.99597 0.98711 0.98711 0.99597 0.97619 0.99597
    H 0.26743
    C 0.25588 0.99597 0.24477 0.99137 0.23661 0.98319
    L 0.01681 0.76339
    C 0.00863 0.75521 0.00403 0.74412 0.00403 0.73257
    V 0.02381
    C 0.00403 0.01289 0.01289 0.00403 0.02381 0.00403
    Z
  `,
};

// SVG-пути рамки в оригинальных координатах (viewBox 248x248)
const BORDER_PATHS = {
  left: `M66.3223 1H242.096C244.802 1.00026 247 3.19753 247 5.9043V181.678C247 184.542 245.86 187.293 243.833 189.32L189.32 243.833C187.293 245.86 184.542 247 181.678 247H5.9043C3.19753 247 1.00026 244.802 1 242.096V66.3223C1 63.4583 2.14003 60.7066 4.16699 58.6797L58.6797 4.16699C60.7066 2.14003 63.4583 1 66.3223 1Z`,
  right: `M5.9043 1H181.678C184.542 1 187.293 2.14003 189.32 4.16699L243.833 58.6797C245.86 60.7066 247 63.4583 247 66.3223V242.096C246.999 244.802 244.802 247 242.096 247H66.3223C63.4583 247 60.7066 245.86 58.6797 243.833L4.16699 189.32C2.14003 187.293 1 184.542 1 181.678V5.9043C1.00026 3.19753 3.19753 1.00026 5.9043 1Z`,
};

const BORDER_STYLES = {
  left: {
    stroke: Colors.White100,
    strokeOpacity: 0.5,
  },
  right: {
    stroke: Colors.Dark80,
    strokeOpacity: undefined,
  },
};

export const PersonUI: FC<TPersonUIProps> = ({
  direction,
  size,
  src,
  alt,
  decorated,
}) => {
  const clipId = `person-clip-${direction}`;

  return (
    <div
      className={clsx(
        styles["card-container"],
        styles[`card-container_${size}`],
        decorated && styles["card-container_decorated"],
      )}
    >
      <div
        className={clsx(
          styles["person-container"],
          styles[`person-container_${direction}-top`],
          styles[`person-container_${direction}-bottom`],
          
        )}
      >
        <div className={clsx(styles.person, styles[`person_${direction}`])}>
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                <path d={CLIP_PATHS[direction]} />
              </clipPath>
            </defs>
          </svg>

          <svg
            className={styles.person__border}
            viewBox="0 0 248 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d={BORDER_PATHS[direction]}
              stroke={BORDER_STYLES[direction].stroke}
              strokeOpacity={BORDER_STYLES[direction].strokeOpacity}
              strokeWidth="7"
            />
          </svg>
          <img src={src} alt={alt} />
        </div>
      </div>
      <PersonInfoUI
        info={{
          character: "Character",
          actor: "Actor",
          position: "Position",
          icon: "regular",
        }}
      />
    </div>
  );
};
