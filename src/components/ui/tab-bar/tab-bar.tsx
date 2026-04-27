import type { CSSProperties, FC } from "react";

import { TabUI } from "../tab";

import type { TTabBarUIProps } from "./types";

import styles from "./tab-bar.module.css";

export const TabBarUI: FC<TTabBarUIProps> = ({
  tabs,
  currentTab,
  onChange,
}) => {
  return (
    <ul
      className={styles.tabs}
      style={
        { "--left": `${tabs.indexOf(currentTab) * 132}px` } as CSSProperties
      }
    >
      {tabs.map((tab, index) => (
        <TabUI
          key={index}
          tab={tab}
          current={currentTab === tab}
          onClick={() => onChange(tab)}
        />
      ))}
    </ul>
  );
};
