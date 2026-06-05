import { forwardRef } from "react";

import { PhotoListItemUI } from "../photo-list-item";
import { PhotoUI } from "../photo";

import type { TPhotoListUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./photo-list.module.css";

export const PhotoListUI = forwardRef<HTMLUListElement, TPhotoListUIProps>(
  ({ photos, onScroll }, ref) => {
    const photoListStyle = useStyle();

    return (
      <ul
        id="photo-list"
        className={styles["photo-list"]}
        style={photoListStyle}
        ref={ref}
        onScrollEnd={onScroll}
      >
        {photos.map((photo, index) => (
          <PhotoListItemUI key={index}>
            <PhotoUI {...photo} />
          </PhotoListItemUI>
        ))}
      </ul>
    );
  },
);
