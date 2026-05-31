import { useRef, useState, type FC, type SyntheticEvent } from "react";

import { GalleryUI } from "../ui/gallery";

import type { TPhoto } from "../../utils/types";
import type { TGalleryContextValue } from "./types";

import { GalleryProvider } from "./gallery-context";

import { usePhotoListWidth } from "./usePhotoListWidth";
import { usePhotoWidth } from "./usePhotoWidth";

const photos: TPhoto[] = [
  {
    src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_1.webp",
    direction: "left",
  },
  {
    src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_2.webp",
    direction: "right",
  },
  {
    src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_3.webp",
    direction: "left",
  },
  {
    src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_4.webp",
    direction: "right",
  },
  {
    src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_5.webp",
    direction: "left",
  },
  {
    src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_6.webp",
    direction: "right",
  },
  {
    src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_7.webp",
    direction: "left",
  },
];

export const Gallery: FC = () => {
  const [currentPaginatorIndex, setCurrentPaginatorIndex] = useState<number>(0);

  const photoListRef = useRef<HTMLUListElement>(null);

  const photoListWidth = usePhotoListWidth();
  const photoWidth = usePhotoWidth();
  const incriment = Math.floor(photoListWidth / photoWidth);
  const paginatorLength = Math.round(photos.length / incriment);

  const handleScroll = (e: SyntheticEvent) => {
    const paginatorIndex = Math.round(
      e.currentTarget.scrollLeft / (photoWidth * incriment),
    );
    setCurrentPaginatorIndex(paginatorIndex);
  };

  const handleGalleryClickLeft = () => {
    if (photoListRef.current) {
      photoListRef.current.scrollTo({
        left: photoListRef.current.scrollLeft - photoWidth * incriment,
        behavior: "smooth",
      });
    }
  };

  const handleGalleryClickRight = () => {
    if (photoListRef.current) {
      photoListRef.current.scrollTo({
        left: photoListRef.current.scrollLeft + photoWidth * incriment,
        behavior: "smooth",
      });
    }
  };

  const contextValue: TGalleryContextValue = {
    photos,
    currentPaginatorIndex,
    paginatorLength,
    handleGalleryClickLeft,
    handleGalleryClickRight,
    handleScroll,
    photoListRef,
  };

  return (
    <GalleryProvider value={contextValue}>
      <GalleryUI />
    </GalleryProvider>
  );
};
