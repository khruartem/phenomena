import { useState, type FC } from "react";

import { NavigationUI } from "../ui/navigation";
import { NavigationProvider } from "./navigation-provider";

import type { TNavigationContext } from "./types";

export const Navigation: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);

  const handleOpen = () => {
    setOpened(!opened);
  };

  const contextValue: TNavigationContext = {
    opened,
    onOpen: handleOpen,
  };

  return (
    <NavigationProvider value={contextValue}>
      <NavigationUI />
    </NavigationProvider>
  );
};
