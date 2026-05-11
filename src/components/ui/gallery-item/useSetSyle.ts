import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSetStyle = (): CSSProperties => {
  const minWidth = usePxToVw({
    large: 384,
    desktop: 270,
    laptop: 480,
    tablet: 348,
    mobile: 388,
  });

  return {
    minWidth,
  };
};
