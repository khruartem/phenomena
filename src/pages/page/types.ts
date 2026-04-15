import type { ReactNode } from "react";

export type TPageProps = {
  children: ReactNode;
  className?: string;
  noHeader?: boolean;
  noFooter?: boolean;
};

export type TPageContext = {
  className?: string;
  noHeader?: boolean;
  noFooter?: boolean;
};

export type TPageProvider = {
  value: TPageContext;
  children: ReactNode;
};
