import type { FC } from "react";

import { Icon } from "../../icon";

import type { TPartnerUIProps } from "./types";

export const PartnerUI: FC<TPartnerUIProps> = ({ icon, ...size }) => {
  return <Icon name={icon} {...size} />;
};
