import type { FC } from "react";

import { FooterSegmentUI } from "../footer-segment";

import type { TFooterContainerUIProps } from "./types";

import { useContainerStyle } from "./useContainerStyle";
import { useBodyStyle } from "./useBodyStyle";

import styles from "./footer-container.module.css";

export const FooterContainerUI: FC<TFooterContainerUIProps> = ({
  children,
}) => {
  const containerStyle = useContainerStyle();
  const bodyStyle = useBodyStyle();

  return (
    <div className={styles.footer__container} style={containerStyle}>
      <FooterSegmentUI index="first" />
      <div className={styles.footer__body} style={bodyStyle}>
        {children}
      </div>
      <FooterSegmentUI index="second" />
    </div>
  );
};
