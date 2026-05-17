import type { FC } from "react";
import clsx from "clsx";

import type { TPointUIProps } from "./types";

import styles from "./point.module.css";

export const PointUI: FC<TPointUIProps> = ({ current }) => {
  return (
    <li className={clsx(styles.point, current && styles.point_current)}></li>
  );
};
