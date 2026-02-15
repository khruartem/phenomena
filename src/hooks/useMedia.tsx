import { useMediaQuery } from "react-responsive";

export const useMedia = () => ({
  isLarge: useMediaQuery({ minWidth: 1681 }),
  isDesktop: useMediaQuery({ minWidth: 1201, maxWidth: 1680.9 }),
  isLaptop: useMediaQuery({ minWidth: 1021, maxWidth: 1200.9 }),
  isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1020.9 }),
  isMobile: useMediaQuery({ maxWidth: 767.9 }),
});
