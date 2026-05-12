import type { FC } from "react";

import styles from "./photo.module.css";
import type { TPhotoUIProps } from "./types";
import clsx from "clsx";

export const PhotoUI: FC<TPhotoUIProps> = ({ src, direction }) => {
  return (
    <img
      id="photo"
      loading="lazy"
      src={src}
      className={clsx(styles.photo, styles[`photo_mask-${direction}`])}
    />
  );
};
