import type { TGalleryContextValue } from "./types";
import { createComponentContext } from "../../utils/createComponentContext";

const initialValue: TGalleryContextValue = {
  currentPaginatorIndex: 0,
  paginatorLength: 0,
  handlePhotoInView: (
    index: number,
    currentPaginatorIndex: number,
    inView: boolean,
  ) => console.log(index, currentPaginatorIndex, inView),
  handleGalleryClickLeft: () => {},
  handleGalleryClickRight: () => {},
};

export const [GalleryProvider, useGalleryContext] =
  createComponentContext<TGalleryContextValue>(initialValue);
