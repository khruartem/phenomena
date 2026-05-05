import type { CSSProperties } from "react";
import { useMedia } from "../../../hooks/useMedia";

export const useSetStyle = (): CSSProperties => {
  const {isMobile} = useMedia();

  const flexDirection = isMobile ? "row" : "column";

  return {
    flexDirection,
  }
}