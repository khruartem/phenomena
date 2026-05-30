import clsx from "clsx";
import type { CSSProperties } from "react";
import { useMedia } from "../../../hooks/useMedia";

export const useBaseStyle = (): CSSProperties => {
  const { isLarge } = useMedia();

  const backgroundPosition = clsx(isLarge && "0.15px 1.2px");

  return { backgroundPosition };
};
