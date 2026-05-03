import type { CSSProperties } from "react";
import clsx from "clsx";

import { useMedia } from "../../../hooks/useMedia";

export const useSetStyle = (index: number): CSSProperties => {
  const { isLarge, isDesktop } = useMedia();

  const marginInlineEnd = clsx(
    isLarge && index === 0 && "2.40vw",
    isLarge && index === 1 && "6.04vw",
    isLarge && index === 2 && "1.98vw",
    isLarge && index === 5 && "3.33vw",
    isLarge && index === 6 && "2.29vw",
    isLarge && index === 7 && "1.04vw",
  );
  const marginBlockStart = clsx(
    isLarge && index === 0 && "5.52vw",
    isLarge && index === 1 && "7.50vw",
    isLarge && index === 3 && "9.69vw",
    isLarge && index === 4 && "-1.67vw",
    isLarge && index === 5 && "4.27vw",
    isLarge && index === 6 && "-0.52vw",
    isLarge && index === 8 && "4.27vw",
  );
  const marginInline = clsx(isDesktop && index === 4 && "auto");

  return {
    marginInlineEnd,
    marginBlockStart,
    marginInline,
  };
};
