export type TGalleryTabBarUIProps = {
  paginator: { paginatorLength: number; currentPaginatorIndex: number };
  onClickLeft: () => void;
  onClickRight: () => void;
};
