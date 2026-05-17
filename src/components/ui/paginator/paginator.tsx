import type { FC } from "react";

import { PointUI } from "../point";

import type { TPaginatorUIProps } from "./types";

export const PaginatorUI: FC<TPaginatorUIProps> = ({ points }) => {
  return (
    <ul>
      {points.map((point, index) => (
        <PointUI key={index} current={point} />
      ))}
    </ul>
  );
};
