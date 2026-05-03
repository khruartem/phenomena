import type { CSSProperties } from "react";

import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSetStyle = (): CSSProperties => {
  const paddingInline = usePxToVw({
    large: 156,
    desktop: 107,
    laptop: 42,
    tablet: 30,
    mobile: 16,
  });

  const columnGap = usePxToVw({ desktop: 34, laptop: 26, tablet: 36 });
  const rowGap = usePxToVw({ laptop: 40, tablet: 40, mobile: 20 });

  const paddingBlockStart = usePxToVw({ desktop: 60, tablet: 40, mobile: 20 });
  const paddingBlockEnd = usePxToVw({ large: 40, desktop: 140 });

  return {
    paddingInline,
    paddingBlockStart,
    paddingBlockEnd,
    columnGap,
    rowGap,
  };
};
