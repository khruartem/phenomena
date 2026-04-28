import type { ReactNode, RefObject, SyntheticEvent } from "react";
import type { TGroup, TPersonGroup } from "../../utils/types";

export type TPersonsContextValue = {
  groups: TPersonGroup[];
  tabs: TGroup[];
  currentTab: TGroup;
  groupsRef?: RefObject<HTMLUListElement | null>;
  handleChange: (tab: TGroup, index: number) => void;
  handleScroll: (e: SyntheticEvent) => void;
  setTab: (tab: TGroup) => void;
};

export type TPersonsProviderPorps = {
  value: TPersonsContextValue;
  children: ReactNode;
};
