import type { CSSProperties, ReactNode } from "react";

export type TSectionUIProps = {
  children: ReactNode;
  id?: string;
  // paddingedBlock?: boolean;
  paddingedInline?: boolean;
  paddingedInlineStart?: boolean;
  paddingedInlineEnd?: boolean;
  gap?: number;
  hidden?: boolean;
  className?: string;
  style?: CSSProperties;
};
