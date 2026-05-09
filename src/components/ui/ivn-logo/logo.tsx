import type { FC } from "react";
import clsx from "clsx";

import type { TIVNLogoUIProps } from "./types";

import { Icon } from "../../icon";

import styles from "./ivn-logo.module.css";

export const IVNLogoUI: FC<TIVNLogoUIProps> = ({
  type,
  className,
  style,
  onClick,
}) => {
  return (
    <Icon
      name={type}
      width={type === "logo-full" ? 182 : 38}
      height={32}
      className={clsx(styles.logo, className)}
      style={style}
      onClick={onClick}
    />
  );
};
