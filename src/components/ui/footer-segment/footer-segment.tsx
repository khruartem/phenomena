import type { FC } from "react";
import clsx from "clsx";

import type { TFooterSegmentUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./footer-segment.module.css";

export const FooterSegmentUI: FC<TFooterSegmentUIProps> = ({ index }) => {
  const { isMobile } = useMedia();

  const first = isMobile ? "top" : "left";
  const second = isMobile ? "bottom" : "right";

  const baseClassName = "footer-segment";
  const displayClassName = `${baseClassName}-${isMobile ? "block" : "inline"}`;
  const displayByIndexClassName = `${displayClassName}_${index === "first" ? first : second}`;

  return (
    <div
      className={clsx(
        styles[displayClassName],
        styles[displayByIndexClassName],
      )}
    ></div>
  );
};
