import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSectionStyle = (): CSSProperties => {
  const paddingBlockStart = usePxToVw({
    large: 170,
    desktop: 60,
    laptop: 20,
    tablet: 60,
    mobile: 80,
  });
  const paddingBlockEnd = usePxToVw({
    large: 170,
    desktop: 80,
    laptop: 97,
    tablet: 82,
    mobile: 144,
  });

  return {
    paddingBlockStart,
    paddingBlockEnd,
  };
};
