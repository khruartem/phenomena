import type { TPhoto } from "../../utils/types";

export const useGalleryParams = (photos: TPhoto[], photo: Element | null, photoList: Element | null) => {
  const photoWidth = photo?.clientWidth || 1;
  const photoListWidth = photoList?.clientWidth || 0;
  const incriment = Math.floor(photoListWidth / photoWidth);
  const paginatorLength = Math.floor(photos.length / incriment);
  
  console.log(photo)
  return [photoWidth, incriment, paginatorLength] as const;
};
