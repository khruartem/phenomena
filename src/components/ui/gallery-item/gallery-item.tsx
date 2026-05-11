import type { FC } from "react";

import type { TGalleryItemUIProps } from "./types";

import { useSetStyle } from "./useSetSyle";

export const GalleryItemUI: FC<TGalleryItemUIProps> = ({ children }) => {
  const liStyle = useSetStyle();

  return <li style={liStyle}>{children}</li>;
};
