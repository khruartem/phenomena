import { type FC } from "react";

import { PaginatorUI } from "../ui/paginator";
import { useGalleryContext } from "../../sections/gallery/gallery-context";

// import type { TPaginatorProps } from "./types";

// export const Paginator: FC<TPaginatorProps> = ({ length, currentIndex }) => {
export const Paginator: FC = () => {
  // const [points, setPoints] = useState<boolean[]>([false]);

  const { calculatePaginatorLength, currentPaginatorIndex } =
    useGalleryContext();

  const paginatorLength = calculatePaginatorLength();
  console.log(paginatorLength)

  const points: boolean[] = new Array(paginatorLength);
  points.fill(false);
  points[currentPaginatorIndex] = true;

  // useEffect(() => {
  //   (() => {
  //     const points: boolean[] = new Array(paginatorLength);
  //     points.fill(false);
  //     points[currentPaginatorIndex] = true;

  //     setPoints(points);
  //   })();
  // }, [currentPaginatorIndex, paginatorLength]);

  return <PaginatorUI points={points} />;
};
