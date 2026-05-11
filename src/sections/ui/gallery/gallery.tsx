import type { FC } from "react";

import { PhotoUI } from "../../../components/ui/photo";

import type { TGalleryUIProps } from "./types";

import styles from "./gallery.module.css";
import { GalleryItemUI } from "../../../components/ui/gallery-item";
import { useSetStyle } from "./useSetSyle";

export const GalleryUI: FC<TGalleryUIProps> = ({ photos }) => {
  const ulStyle = useSetStyle();

  return (
    <ul className={styles.gallery} style={ulStyle}>
      {photos.map(({ src, direction }, index) => (
        <GalleryItemUI key={index}>
          <PhotoUI src={src} direction={direction} />
        </GalleryItemUI>
      ))}
    </ul>
  );
};
