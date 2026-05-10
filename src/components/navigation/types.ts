import type { ReactNode } from "react";

export type TNavigationContext = {
  opened: boolean;
  onOpen: () => void;
};

export type TNavigationProvoderProps = {
  value: TNavigationContext;
  children: ReactNode;
};
