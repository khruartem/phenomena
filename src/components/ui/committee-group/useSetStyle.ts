import type { CSSProperties } from "react";
import clsx from "clsx";

import { usePxToVw } from "../../../hooks/usePxToVw";
import { useMedia } from "../../../hooks/useMedia";

export const useSetStyle = (): CSSProperties => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const paddingInline = usePxToVw({
    large: 156,
    desktop: 107,
    laptop: 42,
    tablet: 30,
    mobile: 16,
  });
  const gap = clsx(
    (isLarge || isDesktop) && "24px",
    (isLaptop || isTablet) && "20px",
    isMobile && "33.81vw",
  );
  const rowGap = usePxToVw({ desktop: 40, laptop: 40 });
  const paddingBlockStart = usePxToVw({
    large: 68,
    desktop: 60,
    laptop: 56,
    tablet: 56,
    mobile: 76,
  });
  const paddingBlockEnd = usePxToVw({
    laptop: 72,
  });

  return {
    paddingInline,
    gap,
    rowGap: isDesktop || isLaptop ? rowGap : gap,
    paddingBlockStart,
    paddingBlockEnd,
  };
};
