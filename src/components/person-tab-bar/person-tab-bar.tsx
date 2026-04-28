import { type FC } from "react";

import { TabBarUI } from "../ui/tab-bar";

import { usePersonsContext } from "../../hooks/usePersonsContext";

export const PersonTabBar: FC = () => {
  const { tabs, currentTab, handleChange } = usePersonsContext();

  return (
    <TabBarUI tabs={tabs} currentTab={currentTab} onChange={handleChange} />
  );
};
