import type { CSSProperties } from "react";
import clsx from "clsx";

import graphicBackgroundLarge from "../../../assets/graphic_large.png";
import graphicBackgroundDesktop from "../../../assets/graphic_desktop.png";
import graphicBackgroundLaptop from "../../../assets/graphic_laptop.png";
import graphicBackgroundTablet from "../../../assets/graphic_tablet.png";
import graphicBackgroundMobile from "../../../assets/graphic_mobile.png";

import { usePxToVw } from "../../../hooks/usePxToVw";
import { useMedia } from "../../../hooks/useMedia";

export const useContainerStyle = (): CSSProperties => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const height = usePxToVw({
    large: 480,
    desktop: 348,
    laptop: 283,
    tablet: 214,
    mobile: 156,
  });
  const backgroundImage = `url(${clsx(
    isLarge && graphicBackgroundLarge,
    isDesktop && graphicBackgroundDesktop,
    isLaptop && graphicBackgroundLaptop,
    isTablet && graphicBackgroundTablet,
    isMobile && graphicBackgroundMobile,
  )}`;

  return {
    height,
    backgroundImage,
  };
};
