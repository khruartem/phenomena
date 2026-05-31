import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useGalleryStyle = (): CSSProperties => {
  const paddingBlockStart = usePxToVw({
    large: 100,
    desktop: 60,
    laptop: 60,
    tablet: 60,
    mobile: 40,
  });

  const paddingBlockEnd = usePxToVw({
    large: 180,
    desktop: 100,
    laptop: 100,
    tablet: 100,
    mobile: 100,
  });

  return {
    paddingBlockStart,
    paddingBlockEnd,
  };
};
