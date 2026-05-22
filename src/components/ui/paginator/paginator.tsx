import type { FC } from "react";
import { nanoid } from "nanoid";

import { PointUI } from "../point";

import type { TPaginatorUIProps } from "./types";

import styles from "./paginator.module.css";

export const PaginatorUI: FC<TPaginatorUIProps> = ({ points }) => {
  return (
    <ul className={styles.paginator}>
      {points.map((point) => (
        <PointUI key={nanoid()} current={point} />
      ))}
    </ul>
  );
};
