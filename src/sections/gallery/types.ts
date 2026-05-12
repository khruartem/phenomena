export type TGalleryContextValue = {
    currentPaginatorIndex: number;
    paginatorLength: number;
    handlePhotoInView: (index: number, currentPaginatorIndex: number, inView: boolean) => void;
    handleGalleryClickLeft: () => void;
    handleGalleryClickRight: () => void;
}