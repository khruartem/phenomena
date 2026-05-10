import type { FC } from "react";

import { NavigationContext } from "./navigation-context";

import type { TNavigationProvoderProps } from "./types";

export const NavigationProvider: FC<TNavigationProvoderProps> = ({
  value,
  children,
}) => {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
