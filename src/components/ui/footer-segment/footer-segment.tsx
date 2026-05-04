import type { FC } from "react";
import clsx from "clsx";

import { Icon } from "../../icon";

import type { TFooterSegmentUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./footer-segment.module.css";

export const FooterSegmentUI: FC<TFooterSegmentUIProps> = ({ index }) => {
  const { isMobile } = useMedia();

  const first = isMobile ? "top" : "left";
  const second = isMobile ? "bottom" : "right";
  const size = isMobile
    ? { width: 388, height: 44 }
    : { width: 76, height: 200 };

  const baseClassName = "footer-segment";
  const displayClassName = `${baseClassName}-${isMobile ? "block" : "inline"}`;
  const displayByIndexClassName = `${displayClassName}_${index === "first" ? first : second}`;

  return (
    <Icon
      name={`footer-segment-${index === "first" ? first : second}`}
      {...size}
      className={clsx(
        styles[displayClassName],
        styles[displayByIndexClassName],
      )}
    />
  );
};
