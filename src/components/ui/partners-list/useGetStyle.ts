import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useGetStyle = (): CSSProperties => {
  const gap = usePxToVw({
    large: 56,
    desktop: 56,
    laptop: 48,
    tablet: 48,
    mobile: 24,
  });

  return {
    gap,
  };
};
