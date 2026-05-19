import { useRef, useState, type FC } from "react";

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
  const paginatorLength = Math.round(photos.length / incriment);

  console.log(incriment);

  const handlePhotoInView = (index: number, inView: boolean) => {
    if (inView && index % incriment === 0) {
      const paginatorIndex = Math.floor(index / incriment);

      if (paginatorIndex !== currentPaginatorIndex) {
        setCurrentPaginatorIndex(paginatorIndex);
      }
    }
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
    handlePhotoInView,
    handleGalleryClickLeft,
    handleGalleryClickRight,
  };

  return (
    <GalleryProvider value={contextValue}>
      <GalleryUI photos={photos} ref={galleryRef} />
    </GalleryProvider>
  );
};
