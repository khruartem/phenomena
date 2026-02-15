import type { ElementType, ReactNode } from "react";
import type { Colors } from "../../../utils/colors";
import type { TTypography } from "../../../utils/typography";

export type TTextUIProps = {
  as?: ElementType;
  children: ReactNode;
  typography: TTypography;
  color: Colors;
  className?: string;
};
