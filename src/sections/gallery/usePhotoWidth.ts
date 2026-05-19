import clsx from "clsx";
import { useMedia } from "../../hooks/useMedia";

export const usePhotoWidth = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return +clsx(
    isLarge && 384,
    isDesktop && 270,
    isLaptop && 460,
    isTablet && 348,
    isMobile && 388,
  );
};
