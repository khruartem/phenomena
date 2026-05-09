import type { CSSProperties } from "react";
import type { TLogoType } from "../../../utils/types";

export type TIVNLogoUIProps = {
  type: TLogoType;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};
