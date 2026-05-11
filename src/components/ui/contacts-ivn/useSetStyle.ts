import type { CSSProperties } from "react";
import { useMedia } from "../../../hooks/useMedia";

export const useSetStyle = (): CSSProperties => {
  const { isTablet, isMobile } = useMedia();

  const flexDirection = isMobile ? "row" : "column";
  const maxWidth = isTablet ? "21.94ch" : undefined;
  const width = isMobile ? "100%" : undefined;
  const justifyContent = isMobile ? "space-between" : undefined;
  const gap = isMobile ? 0 : 20;

  return {
    flexDirection,
    maxWidth,
    width,
    justifyContent,
    gap,
  };
};
