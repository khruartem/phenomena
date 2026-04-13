import type { ReactNode } from "react";

export type TSectionUIProps = {
  children: ReactNode;
  paddingedBlock?: boolean;
  paddingedInline?: boolean;
  gap?: number;
  hidden: boolean;
  className?: string;
};
