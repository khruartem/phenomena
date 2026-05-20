import type { FC } from "react";

import type { TGalleryItemUIProps } from "./types";

import { useSetStyle } from "./useSetSyle";

import styles from "./gallery-item.module.css";

export const GalleryItemUI: FC<TGalleryItemUIProps> = ({ children }) => {
  const liStyle = useSetStyle();

  return (
    <li className={styles.gallery__item} style={liStyle}>
      {children}
    </li>
  );
};
