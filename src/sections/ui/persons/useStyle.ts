import type { CSSProperties } from "react";
import clsx from "clsx";

import personsBackgroundLarge from "../../../assets/persons_large.png";
import personsBackgroundDesktop from "../../../assets/persons_desktop.png";
import personsBackgroundLaptop from "../../../assets/persons_laptop.png";
import personsBackgroundTablet from "../../../assets/persons_tablet.png";
import personsBackgroundMobile from "../../../assets/persons_mobile.png";

import { createUseStyleHook } from "../../../utils/createUseStyleHook";

import { useMedia } from "../../../hooks/useMedia";

const useCallBack = (): CSSProperties => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const backgroundImage = `url(${clsx(
    isLarge && personsBackgroundLarge,
    isDesktop && personsBackgroundDesktop,
    isLaptop && personsBackgroundLaptop,
    isTablet && personsBackgroundTablet,
    isMobile && personsBackgroundMobile,
  )}`;

  const backgroundSize = clsx(isLaptop && "116%");
  const backgroundPosition = clsx(isLaptop && "50% -4%");

  return {
    backgroundImage,
    backgroundSize,
    backgroundPosition,
  };
};

export const useStyle = createUseStyleHook(
  {
    paddingBlockStart: {
      large: 210,
      desktop: 120,
      laptop: 120,
      tablet: 120,
      mobile: 72,
    },
    paddingBlockEnd: {
      large: 330,
      desktop: 72,
      laptop: 72,
      tablet: 80,
      mobile: 16,
    },
  },
  useCallBack,
);
