import { useEffect, useState, type FC } from "react";

import { GalleryUI } from "../ui/gallery";

import type { TPhoto } from "../../utils/types";

export const Gallery: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const photo = document.querySelector("#photo");
    const photoWidth = photo?.clientWidth || 1;

    const paginatorLength = Math.floor(width / photoWidth);
    console.log(photo, photoWidth, paginatorLength, width);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return <GalleryUI photos={photos} />;
};
