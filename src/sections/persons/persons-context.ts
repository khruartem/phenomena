import { createContext, type SyntheticEvent } from "react";
import type { TGroup } from "../../utils/types";
import type { TPersonsContextValue } from "./types";

const initialValue: TPersonsContextValue = {
  groups: [],
  tabs: [],
  currentTab: "subjects",
  handleChange: (tab: TGroup, index: number) => {
    console.log(tab, index);
  },
  handleScroll: (e: SyntheticEvent) => {
    console.log(e);
  },
};

export const PersonsContext = createContext<TPersonsContextValue>(initialValue);
