import { type FC } from "react";

import { PaginatorUI } from "../ui/paginator";

import { useGalleryContext } from "../../sections/gallery/gallery-context";

export const Paginator: FC = () => {
  const { paginatorLength, currentPaginatorIndex } = useGalleryContext();

  const points: boolean[] = new Array(paginatorLength);
  points.fill(false);
  points[currentPaginatorIndex] = true;

  return <PaginatorUI points={points} />;
};
