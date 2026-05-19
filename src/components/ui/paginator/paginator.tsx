import type { FC } from "react";

import { PointUI } from "../point";

import type { TPaginatorUIProps } from "./types";

import styles from "./paginator.module.css";

export const PaginatorUI: FC<TPaginatorUIProps> = ({ points }) => {
  return (
    <ul className={styles.paginator}>
      {points.map((point, index) => (
        <PointUI key={index} current={point} />
      ))}
    </ul>
  );
};
