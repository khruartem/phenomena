import type { CSSProperties } from "react";

import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSetStyle = (): CSSProperties => {
  const paddingInline = usePxToVw({
    large: 60,
    desktop: 11,
    laptop: 26,
    mobile: 16,
  });

  return { paddingInline };
};
