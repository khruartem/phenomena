import type { FC } from "react";

import { LayoutUI } from "./ui";

import type { TLayoutProps } from "./types";

import { usePageContext } from "../hooks/usePageContext";

export const Layout: FC<TLayoutProps> = ({ children }) => {
  const pageContext = usePageContext();

  return (
    <LayoutUI
      noHeader={pageContext?.noHeader}
      noFooter={pageContext?.noFooter}
      className={pageContext?.className}
    >
      {children}
    </LayoutUI>
  );
};
