import type { CSSProperties } from "react";
import clsx from "clsx";

import graphicBackgroundLarge from "../../../assets/graphic_large.png";
import graphicBackgroundDesktop from "../../../assets/graphic_desktop.png";
import graphicBackgroundLaptop from "../../../assets/graphic_laptop.png";
import graphicBackgroundTablet from "../../../assets/graphic_tablet.png";
import graphicBackgroundMobile from "../../../assets/graphic_mobile.png";

import { useMedia } from "../../../hooks/useMedia";
import { createUseStyleHook } from "../../../utils/createUseStyleHook";

const useCallBack = (): CSSProperties => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const backgroundImage = `url(${clsx(
    isLarge && graphicBackgroundLarge,
    isDesktop && graphicBackgroundDesktop,
    isLaptop && graphicBackgroundLaptop,
    isTablet && graphicBackgroundTablet,
    isMobile && graphicBackgroundMobile,
  )}`;

  return {
    backgroundImage,
  };
};

export const useContainerStyle = createUseStyleHook(
  {
    height: {
      large: 480,
      desktop: 348,
      laptop: 283,
      tablet: 214,
      mobile: 156,
    },
  },
  useCallBack,
);
