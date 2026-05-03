import type { FC } from "react";

import { Icon } from "../../icon";

import type { TFooterContainerUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./footer-container.module.css";

export const FooterContainerUI: FC<TFooterContainerUIProps> = ({
  children,
}) => {
  const { isMobile } = useMedia();

  const firstPart = isMobile ? "left" : "top";
  const secondPart = isMobile ? "right" : "bottom";
  const sizePart = isMobile
    ? { width: 76, height: 200 }
    : { width: 388, height: 44 };

  return (
    <div className={styles.footer__container}>
      <Icon name={`footer-segment-${firstPart}`} {...sizePart} />
      <div className={styles.footer__body}>{children}</div>
      <Icon name={`footer-segment-${secondPart}`} {...sizePart} />
    </div>
  );
};
