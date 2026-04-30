import clsx from "clsx";
import { useMedia } from "./useMedia";

export const usePxToVw = (px: number | string) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const pxNum = typeof px === "string" ? Number(px) : px;

  const pxToVw = (px: number, viewport: number) => {
    return ((px / viewport) * 100).toFixed(2);
  };

  return (
    clsx(
      isLarge && pxToVw(pxNum, 1920),
      isDesktop && pxToVw(pxNum, 1366),
      isLaptop && pxToVw(pxNum, 1024),
      isTablet && pxToVw(pxNum, 768),
      isMobile && pxToVw(pxNum, 420),
    ) + "vw"
  );
};
