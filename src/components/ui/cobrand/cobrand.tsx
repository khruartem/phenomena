import type { FC } from "react";

import { LogoUI } from "../logo";
import { Icon } from "../../icon";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./cobrand.module.css";

export const CobrandUI: FC = () => {
  const { isDesktop, isMobile } = useMedia();

  return (
    <div className={styles.cobrand}>
      <LogoUI type={isDesktop || isMobile ? "logo-sign" : "logo-full"} />
      <Icon name={"divider"} width={12} height={12} />
      <Icon name={"ot-logo"} width={135} height={24} />
    </div>
  );
};
