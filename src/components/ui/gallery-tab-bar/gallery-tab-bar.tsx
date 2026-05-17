import type { FC } from "react";

import { ArrowUI } from "../arrow";
import { Paginator } from "../../paginator";

import type { TGalleryTabBarUIProps } from "./types";

export const GalleryTabBarUI: FC<TGalleryTabBarUIProps> = ({
  paginator,
  onClickLeft,
  onClickRight,
}) => {
  const { paginatorLength, currentPaginatorIndex } = paginator;
  return (
    <div>
      <ArrowUI direction={"left"} onClick={onClickLeft} />
      <Paginator
        length={paginatorLength}
        currentIndex={currentPaginatorIndex}
      />
      <ArrowUI direction={"right"} onClick={onClickRight} />
    </div>
  );
};
