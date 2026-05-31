import type { FC } from "react";

import { PhotoListUI } from "../ui/photo-list";

import { useGalleryContext } from "../../sections/gallery/gallery-context";

export const PhotoList: FC = () => {
  const { photos, handleScroll, photoListRef } = useGalleryContext();

  return (
    <PhotoListUI photos={photos} onScroll={handleScroll} ref={photoListRef} />
  );
};
