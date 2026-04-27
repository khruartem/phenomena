import type { TTab } from "../../../utils/types";

export type TTabBarUIProps = {
  tabs: TTab[];
  currentTab: TTab;
  onChange: (tab: TTab) => void;
};
