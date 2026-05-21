import { useRef, useState, type FC, type SyntheticEvent } from "react";

import { GalleryUI } from "../ui/gallery";

import type { TPhoto } from "../../utils/types";
import { GalleryProvider } from "./gallery-context";
import type { TGalleryContextValue } from "./types";
import { useGalleryWidth } from "./useGalleryWidth";
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
  
  const galleryRef = useRef<HTMLUListElement>(null);

  const galleryWidth = useGalleryWidth();
  const photoWidth = usePhotoWidth();
  const incriment = Math.floor(galleryWidth / photoWidth);
  const paginatorLength = Math.round(
    photos.length / incriment,
  );

  const handleScroll = (e: SyntheticEvent) => {
    console.log(e.currentTarget.scrollLeft)
    const paginatorIndex = Math.round(
      e.currentTarget.scrollLeft / (photoWidth * incriment),
    );
    setCurrentPaginatorIndex(paginatorIndex);
  };

  const handleGalleryClickLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollLeft - photoWidth * incriment,
        behavior: "smooth",
      });
    }
  };

  const handleGalleryClickRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollLeft + photoWidth * incriment,
        behavior: "smooth",
      });
    }
  };

  const contextValue: TGalleryContextValue = {
    currentPaginatorIndex,
    paginatorLength,
    handleGalleryClickLeft,
    handleGalleryClickRight,
  };

  return (
    <GalleryProvider value={contextValue}>
      <GalleryUI photos={photos} onScroll={handleScroll} ref={galleryRef} />
    </GalleryProvider>
  );
};
