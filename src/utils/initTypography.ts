import { Typography } from "./typography";

export const initDigitsTypography = (mediaQuery: {
  isLarge: boolean;
  isDesktop: boolean;
  isLaptop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = mediaQuery;

  if (isLarge || isLaptop) return Typography.Digits_120;
  if (isDesktop || isTablet) return Typography.Digits_80;
  if (isMobile) return Typography.Digits_60;
};
