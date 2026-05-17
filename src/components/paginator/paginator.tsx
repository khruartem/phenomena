import { useEffect, useState, type FC } from "react";

import { PaginatorUI } from "../ui/paginator";

import type { TPaginatorProps } from "./types";

export const Paginator: FC<TPaginatorProps> = ({ length, currentIndex }) => {
  const [points, setPoints] = useState<boolean[]>([false]);

  useEffect(() => {
    (() => {
      const points: boolean[] = new Array(length);
      points.fill(false);
      points[currentIndex] = true;

      setPoints(points);
    })();
  }, [currentIndex, length]);

  return <PaginatorUI points={points} />;
};
