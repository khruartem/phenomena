// import { useEffect, useRef, useState, type FC } from "react";

// import { GalleryUI } from "../ui/gallery";

// import type { TPhoto } from "../../utils/types";
// import { GalleryProvider } from "./gallery-context";
// import type { TGalleryContextValue } from "./types";

// const photos: TPhoto[] = [
//   {
//     src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_1.webp",
//     direction: "left",
//   },
//   {
//     src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_2.webp",
//     direction: "right",
//   },
//   {
//     src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_3.webp",
//     direction: "left",
//   },
//   {
//     src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_4.webp",
//     direction: "right",
//   },
//   {
//     src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_5.webp",
//     direction: "left",
//   },
//   {
//     src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_6.webp",
//     direction: "right",
//   },
//   {
//     src: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_7.webp",
//     direction: "left",
//   },
// ];

// export const Gallery: FC = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [photoWidth, setPhotoWidth] = useState(0);
//   const [currentPaginatorIndex, setCurrentPaginatorIndex] = useState<number>(0);
//   const [paginatorLength, setPaginatorLength] = useState<number>(0);
//   const [incriment, setIncriment] = useState<number>(0);

//   const galleryRef = useRef<HTMLUListElement>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       const photo = document.querySelector("#photo");
//       const photoWidth = photo?.clientWidth || 1;
//       const galleryWidth = galleryRef.current?.clientWidth || 0;

//       setPhotoWidth(photoWidth);
//       setIncriment(Math.floor(galleryWidth / photoWidth));
//       setPaginatorLength(Math.floor(photos.length / incriment));
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handlePhotoInView = (
//     index: number,
//     currentPaginatorIndex: number,
//     inView: boolean,
//   ) => {
//     if (inView && index % incriment === 0) {
//       const paginatorIndex = Math.floor(index / incriment);

//       if (paginatorIndex !== currentPaginatorIndex) {
//         setCurrentPaginatorIndex(paginatorIndex);
//       }
//     }
//   };

//   const handleGalleryClickLeft = () => {
//     if (galleryRef.current)
//       galleryRef.current.scrollLeft -= photoWidth * incriment;
//   };
//   const handleGalleryClickRight = () => {
//     if (galleryRef.current)
//       galleryRef.current.scrollLeft += photoWidth * incriment;
//   };

//   const contextValue: TGalleryContextValue = {
//     currentPaginatorIndex,
//     paginatorLength,
//     handlePhotoInView,
//     handleGalleryClickLeft,
//     handleGalleryClickRight,
//   };

//   return (
//     <GalleryProvider value={contextValue}>
//       <GalleryUI photos={photos} ref={galleryRef} />
//     </GalleryProvider>
//   );
// };

import { useRef, useState, type FC } from "react";

import { GalleryUI } from "../ui/gallery";

import type { TPhoto } from "../../utils/types";
import { GalleryProvider } from "./gallery-context";
import type { TGalleryContextValue } from "./types";

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

  const calculateIncriment = () => {
    const galleryWidth = 1152;
    const photoWidth = 270;

    return Math.floor(galleryWidth / photoWidth);
  };

  const calculatePaginatorLength = () => {
    return Math.round(photos.length / calculateIncriment());
  };

  const handlePhotoInView = (
    index: number,
    currentPaginatorIndex: number,
    inView: boolean,
  ) => {
    const incriment = calculateIncriment();

    if (inView && index % incriment === 0) {
      const paginatorIndex = Math.floor(index / incriment);

      if (paginatorIndex !== currentPaginatorIndex) {
        setCurrentPaginatorIndex(paginatorIndex);
      }
    }
  };

  const handleGalleryClickLeft = () => {
    // const photoWidth = photoRef.current?.clientWidth || 0;
    const photoWidth = 270;
    const incriment = calculateIncriment();

    if (galleryRef.current)
      galleryRef.current.scrollLeft -= photoWidth * incriment;
  };

  const handleGalleryClickRight = () => {
    const photoWidth = 270;
    const incriment = calculateIncriment();

    if (galleryRef.current)
      galleryRef.current.scrollLeft += photoWidth * incriment;
  };

  const contextValue: TGalleryContextValue = {
    currentPaginatorIndex,
    calculatePaginatorLength,
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
