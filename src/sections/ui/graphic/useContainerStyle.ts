import type { CSSProperties } from "react";
import clsx from "clsx";

import graphicBackgroundLarge from "../../../assets/graphic_large.png";
import graphicBackgroundDesktop from "../../../assets/graphic_desktop.png";

import { usePxToVw } from "../../../hooks/usePxToVw";
import { useMedia } from "../../../hooks/useMedia";

export const useContainerStyle = (): CSSProperties => {
  const { isLarge, isDesktop } = useMedia();

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
  )}`;

  return {
    height,
    backgroundImage,
  };
};
