import type { CSSProperties } from "react";

import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSetStyle = (): CSSProperties => {
  const width = usePxToVw({
    large: 1384,
    desktop: 1152,
    laptop: 940,
    tablet: 708,
    mobile: 388,
  });
  const paddingInlineStart = usePxToVw({
    large: 24,
    desktop: 98,
    laptop: 80,
    tablet: 60,
    mobile: 16,
  });
  const paddingInlineEnd = usePxToVw({
    large: 24,
    laptop: 80,
  });
  const gap = usePxToVw({ mobile: 12 });

  return {
    width,
    paddingInlineStart,
    paddingInlineEnd,
    gap,
  };
};
