import type { CSSProperties } from "react";

import { useMedia } from "../../../hooks/useMedia";

export const useFooterStyle = (): CSSProperties => {
  const { isMobile } = useMedia();

  const paddingInline = isMobile ? 16 : 20;

  return {
    paddingInline,
  };
};
