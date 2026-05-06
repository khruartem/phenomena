import type { CSSProperties } from "react";

import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSetStyle = (): CSSProperties => {
  const paddingInline = usePxToVw({
    large: 60,
    desktop: 11,
    laptop: 26,
    mobile: 16,
  });

  const paddingBlockStart = usePxToVw({
    large: 44,
    desktop: 44,
    laptop: 44,
    tablet: 34,
    mobile: 0,
  });

  return { paddingInline, paddingBlockStart };
};
