import type { FC } from "react";

import { PageContext } from "./page-context";

import type { TPageProvider } from "./types";

export const PageProvider: FC<TPageProvider> = ({ value, children }) => {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
