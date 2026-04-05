import type { FC } from "react";

import type { TLogoUIProps } from "./types";

import { Icon } from "../../icon";

export const LogoUI: FC<TLogoUIProps> = ({ type, className, style }) => {
  return (
    <Icon
      name={type}
      width={type === "logo-full" ? 182 : 38}
      height={32}
      className={className}
      style={style}
    />
  );
};
