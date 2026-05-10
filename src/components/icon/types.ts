import type { CSSProperties } from "react";
import type { Colors } from "../../utils/colors";

export type TIconProps = {
  name: string;
  width?: number;
  height?: number;
  color?: Colors;
  className?: string;
  style?: CSSProperties;
  title?: string;
  onClick?: () => void;
};
