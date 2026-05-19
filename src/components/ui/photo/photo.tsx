import { forwardRef } from "react";
import clsx from "clsx";

import type { TPhotoUIProps } from "./types";

import styles from "./photo.module.css";

export const PhotoUI = forwardRef<HTMLImageElement, TPhotoUIProps>(
  ({ src, direction }, ref) => {
    return (
      <img
        id="photo"
        loading="lazy"
        src={src}
        className={clsx(styles.photo, styles[`photo_mask-${direction}`])}
        ref={ref}
      />
    );
  },
);
