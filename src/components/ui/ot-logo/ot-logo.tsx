import type { FC } from "react";

import { Icon } from "../../icon";

import type { TOTLogoUIProps } from "./types";

import styles from "./ot-logo.module.css";

export const OTLogoUI: FC<TOTLogoUIProps> = ({ onClick }) => {
  return (
    <Icon
      name={"ot-logo"}
      width={135}
      height={24}
      className={styles["ot-logo"]}
      onClick={onClick}
    />
  );
};
