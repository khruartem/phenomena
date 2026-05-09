import type { FC } from "react";

import { IVNLogo } from "../../ivn-logo";
import { Icon } from "../../icon";
import { OTLogo } from "../../ot-logo";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./cobrand.module.css";

export const CobrandUI: FC = () => {
  const { isDesktop, isMobile } = useMedia();

  return (
    <div className={styles.cobrand}>
      <IVNLogo type={isDesktop || isMobile ? "logo-sign" : "logo-full"} />
      <Icon name={"divider"} width={12} height={12} />
      <OTLogo />
    </div>
  );
};
