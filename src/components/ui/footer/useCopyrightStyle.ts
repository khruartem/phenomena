import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useCopyrightStyle = (): CSSProperties => {
  const textAlign = "start";
  const paddingInlineStart = usePxToVw({
    large: 136,
    desktop: 87,
    laptop: 102,
    tablet: 86,
  });

  return {
    textAlign,
    paddingInlineStart,
  };
};
