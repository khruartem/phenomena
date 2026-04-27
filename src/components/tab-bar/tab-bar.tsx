import { useState, type FC } from "react";

import { TabBarUI } from "../ui/tab-bar";

import type { TTab } from "../../utils/types";

export const TabBar: FC = () => {
  const [currentTab, setCurrentTab] = useState<TTab>("subjects");
  const tabs: TTab[] = ["subjects", "committee"];

  const handleChange = (tab: TTab) => {
    setCurrentTab(tab);
  };

  return (
    <TabBarUI tabs={tabs} currentTab={currentTab} onChange={handleChange} />
  );
};
