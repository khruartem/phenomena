import type { FC } from "react";

import { LayoutUI } from "./ui";

import type { TLayoutProps } from "./types";

import { usePageContext } from "../hooks/usePageContext";

export const Layout: FC<TLayoutProps> = ({ children }) => {
  const { noHeader, noFooter, className } = usePageContext();

  return (
    <LayoutUI noHeader={noHeader} noFooter={noFooter} className={className}>
      {children}
    </LayoutUI>
  );
};
