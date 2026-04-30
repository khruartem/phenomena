import clsx from "clsx";
import { useMedia } from "./useMedia";

type TConvertObject = {
  large?: number;
  desktop?: number;
  laptop?: number;
  tablet?: number;
  mobile?: number;
};

const useConvert = (px?: number | string) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  if (px) {
    const pxNum = (typeof px === "string" ? Number(px) : px) - 0.1;

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
  } else return undefined;
};

export const usePxToVw = (px: TConvertObject) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const pxLarge = useConvert(px.large);
  const pxDesktop = useConvert(px.desktop);
  const pxLaptop = useConvert(px.laptop);
  const pxTablet = useConvert(px.tablet);
  const pxMobile = useConvert(px.mobile);

  return clsx(
    isLarge && pxLarge,
    isDesktop && pxDesktop,
    isLaptop && pxLaptop,
    isTablet && pxTablet,
    isMobile && pxMobile,
  );
};
