import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useSetStyle = (): CSSProperties => {
  // const paddingInline = usePxToVw({
  //   large: 156,
  //   desktop: 107,
  //   laptop: 42,
  //   tablet: 30,
  //   mobile: 16,
  // });

  const gap = usePxToVw({
    large: 24,
    desktop: 24,
    laptop: 20,
    tablet: 12,
    mobile: 8,
  });

  const height = usePxToVw({
    large: 288,
    desktop: 203,
    laptop: 345,
    tablet: 261,
    mobile: 288,
  });

  return {
    // paddingInline,
    gap,
    height,
  };
};
