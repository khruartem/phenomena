import clsx from "clsx";
import { useMedia } from "../../../hooks/useMedia";
import type { Typography } from "../../../utils/typography";

export const useTypography = (
  type: "main" | "sub",
): keyof typeof Typography => {
  const { isLaptop, isTablet, isMobile } = useMedia();

  const main = clsx(isLaptop && 40, isTablet && 32, isMobile && 16);
  const sub = clsx(isLaptop && 80, isTablet && 60, isMobile && 32);

  return `Text_KharkivTone_400_${type === "main" ? main : sub}` as keyof typeof Typography;
};
