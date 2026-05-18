export type TGalleryContextValue = {
  currentPaginatorIndex: number;
  calculatePaginatorLength: () => number;
  handlePhotoInView: (
    index: number,
    currentPaginatorIndex: number,
    inView: boolean,
  ) => void;
  handleGalleryClickLeft: () => void;
  handleGalleryClickRight: () => void;
};
