import type { TGalleryContextValue } from "./types";
import { createComponentContext } from "../../utils/createComponentContext";

const initialValue: TGalleryContextValue = {
  photos: [],
  currentPaginatorIndex: 0,
  paginatorLength: 0,
  handleGalleryClickLeft: () => {},
  handleGalleryClickRight: () => {},
  handleScroll: () => {},
};

export const [GalleryProvider, useGalleryContext] =
  createComponentContext<TGalleryContextValue>(initialValue);
