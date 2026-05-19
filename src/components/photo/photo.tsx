import { useEffect, type FC } from "react";
import { useInView } from "react-intersection-observer";

import { PhotoUI } from "../ui/photo";

import type { TPhotoProps } from "./types";

import { useGalleryContext } from "../../sections/gallery/gallery-context";

export const Photo: FC<TPhotoProps> = ({ index, photo }) => {
  const { handlePhotoInView } = useGalleryContext();
  const [photoRef, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    handlePhotoInView(index, inView);
  });

  return <PhotoUI {...photo} ref={photoRef} />;
};
