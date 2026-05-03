import type { CSSProperties } from "react";

import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSetStyle = (): CSSProperties => {
  const width = usePxToVw({
    large: 520,
    desktop: 368,
    laptop: 460,
  });
  
  const height = usePxToVw({
    large: 228,
    desktop: 268,
  });

  return {
    width,
    height,
  };
};
