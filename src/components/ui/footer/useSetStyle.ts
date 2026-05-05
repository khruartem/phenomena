import type { CSSProperties } from "react";

import { useMedia } from "../../../hooks/useMedia";

export const useSetStyle = (): CSSProperties => {
  const { isMobile } = useMedia();

  const paddingInline = isMobile ? 30 : 20;

  return {
    paddingInline,
  };
};
