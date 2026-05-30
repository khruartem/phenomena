import clsx from "clsx";
import { useMedia } from "../../../hooks/useMedia";
import type { Typography } from "../../../utils/typography";

export const useTypography = (
  type: "top" | "bottom",
): keyof typeof Typography => {
  const { isLarge, isDesktop } = useMedia();

  const top = clsx(isLarge && 60, isDesktop && 46);
  const bottom = clsx(isLarge && 120, isDesktop && 92);

  return `Text_KharkivTone_400_${type === "top" ? top : bottom}` as keyof typeof Typography;
};
