import type { CSSProperties } from "react";

import { useMedia } from "../../../hooks/useMedia";

export const useContainerStyle = (): CSSProperties => {
  const { isMobile } = useMedia();
  const flexDirection = isMobile ? "column" : "row";

  return { flexDirection };
};
