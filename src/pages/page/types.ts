import type { ReactNode } from "react";

export type TPageProps = {
  children: ReactNode;
  className?: string;
};

export type TPageContext = {
  className?: string;
};

export type TPageProvider = {
  value: TPageContext;
  children: ReactNode;
};
