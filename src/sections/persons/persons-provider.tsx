import type { FC } from "react";

import { PersonsContext } from "./persons-context";

import type { TPersonsProviderPorps } from "./types";

export const PersonsProvider: FC<TPersonsProviderPorps> = ({
  value,
  children,
}) => {
  return (
    <PersonsContext.Provider value={value}>{children}</PersonsContext.Provider>
  );
};
