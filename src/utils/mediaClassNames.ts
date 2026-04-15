import clsx from "clsx";

import type { TMedia } from "./types";

export const setMediaClassNames: (
  baseClassName: string,
  media: TMedia,
) => string = (baseClassName: string, media: TMedia) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = media;

  const mediaClassName = clsx(
    isLarge && "large",
    isDesktop && "desktop",
    isLaptop && "laptop",
    isTablet && "tablet",
    isMobile && "mobile",
  );

  return `${baseClassName}_${mediaClassName}`;
};
