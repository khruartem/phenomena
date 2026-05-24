import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";
import { useMedia } from "../../../hooks/useMedia";

export const useButtonsStyle = (): CSSProperties => {
  const { isMobile } = useMedia();

  const bottom = isMobile ? -68 : -20;
  const gap = usePxToVw({
    large: 24,
    desktop: 24,
    laptop: 24,
    tablet: 12,
    mobile: 8,
  });
  const flexDirection = isMobile ? "column" : "row";

  return {
    gap,
    bottom,
    flexDirection,
  };
};
