import { createContext } from "react";
import type { TPageContext } from "./types";

const initValue = {
  className: undefined,
};

export const PageContext = createContext<TPageContext>(initValue);
