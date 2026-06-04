import type { CSSProperties } from "react";
import { useMedia } from "../../../hooks/useMedia";
import { createUseStyleHook } from "../../../utils/createUseStyleHook";

const useCallBack = (): CSSProperties => {
  const { isMobile } = useMedia();

  const bottom = isMobile ? -68 : -20;
  const flexDirection = isMobile ? "column" : "row";

  return {
    bottom,
    flexDirection,
  };
};

export const useButtonsStyle = createUseStyleHook(
  {
    gap: {
      large: 24,
      desktop: 24,
      laptop: 24,
      tablet: 12,
      mobile: 8,
    },
  },
  useCallBack,
);
