import type { RefObject, SyntheticEvent } from "react";
import type { TPhoto } from "../../utils/types";

export type TGalleryContextValue = {
  photos: TPhoto[];
  currentPaginatorIndex: number;
  paginatorLength: number;
  handleGalleryClickLeft: () => void;
  handleGalleryClickRight: () => void;
  handleScroll: (e: SyntheticEvent) => void;
  photoListRef?: RefObject<HTMLUListElement | null>;
};
