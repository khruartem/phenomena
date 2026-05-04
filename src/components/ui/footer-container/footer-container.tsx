import type { FC } from "react";

import { FooterSegmentUI } from "../footer-segment";

import type { TFooterContainerUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./footer-container.module.css";
import { useSetStyle } from "./useSetStyle";

export const FooterContainerUI: FC<TFooterContainerUIProps> = ({
  children,
}) => {
  const { isMobile } = useMedia();
  const divStyle = useSetStyle();

  return (
    <div
      className={styles.footer__container}
      style={{ flexDirection: isMobile ? "column" : "row" }}
    >
      <FooterSegmentUI index="first" />
      <div className={styles.footer__body} style={divStyle}>
        {children}
      </div>
      <FooterSegmentUI index="second" />
    </div>
  );
};
