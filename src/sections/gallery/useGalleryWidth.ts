import clsx from "clsx";
import { useMedia } from "../../hooks/useMedia";

export const useGalleryWidth = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return +clsx(
    isLarge && 1608,
    isDesktop && 1152,
    isLaptop && 940,
    isTablet && 708,
    isMobile && 388,
  );
};
