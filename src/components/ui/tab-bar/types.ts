import type { TGroup } from "../../../utils/types";

export type TTabBarUIProps = {
  tabs: TGroup[];
  currentTab: TGroup;
  onChange: (tab: TGroup, index: number) => void;
};
