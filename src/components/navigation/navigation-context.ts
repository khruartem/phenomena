import { createContext } from "react";
import type { TNavigationContext } from "./types";

const initialValue: TNavigationContext = {
  opened: false,
  onOpen: () => {},
};

export const NavigationContext =
  createContext<TNavigationContext>(initialValue);
