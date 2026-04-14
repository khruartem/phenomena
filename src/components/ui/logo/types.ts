import type { CSSProperties } from "react";
import type { TLogoType } from "../../../utils/types";

export type TLogoUIProps = {
  type: TLogoType;
  className?: string;
  style?: CSSProperties;
};
