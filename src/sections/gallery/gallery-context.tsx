import type { TGalleryContextValue } from "./types";
import { createComponentContext } from "../../utils/createComponentContext";

const initialValue: TGalleryContextValue = {
  currentPaginatorIndex: 0,
  paginatorLength: 0,
  handleGalleryClickLeft: () => {},
  handleGalleryClickRight: () => {},
};

export const [GalleryProvider, useGalleryContext] =
  createComponentContext<TGalleryContextValue>(initialValue);
