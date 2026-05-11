import type { FC } from "react";
import clsx from "clsx";

import type { TFooterSegmentUIProps } from "./types";

import leftSegment from "../../../assets/footer_decor_left.png";
import rightSegment from "../../../assets/footer_decor_right.png";
import topSegment from "../../../assets/footer_decor_top.png";
import bottomSegment from "../../../assets/footer_decor_bottom.png";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./footer-segment.module.css";

export const FooterSegmentUI: FC<TFooterSegmentUIProps> = ({ index }) => {
  const { isMobile } = useMedia();

  const first = isMobile ? "top" : "left";
  const second = isMobile ? "bottom" : "right";

  const baseClassName = "footer-segment";
  const displayClassName = `${baseClassName}-${isMobile ? "block" : "inline"}`;
  const displayByIndexClassName = `${displayClassName}_${index === "first" ? first : second}`;

  const src =
    index === "first"
      ? clsx(first === "top" && topSegment, first === "left" && leftSegment)
      : clsx(
          second === "bottom" && bottomSegment,
          second === "right" && rightSegment,
        );

  return (
    <img
      src={src}
      className={clsx(
        styles[displayClassName],
        styles[displayByIndexClassName],
      )}
      alt="Декоративный сегмент футэра"
    />
  );
};
