import type { FC } from "react";

import { GalleryTabBarUI } from "../ui/gallery-tab-bar";

import { useGalleryContext } from "../../sections/gallery/gallery-context";

export const GalleryTabBar: FC = () => {
  const {
    handleGalleryClickLeft,
    handleGalleryClickRight,
    paginatorLength,
    currentPaginatorIndex,
  } = useGalleryContext();

  return (
    <GalleryTabBarUI
      paginator={{ paginatorLength, currentPaginatorIndex }}
      onClickLeft={handleGalleryClickLeft}
      onClickRight={handleGalleryClickRight}
    />
  );
};
