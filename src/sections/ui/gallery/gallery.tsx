import { forwardRef } from "react";

import { GalleryItemUI } from "../../../components/ui/gallery-item";
import { PhotoUI } from "../../../components/ui/photo";

import type { TGalleryUIProps } from "./types";

import { useSetStyle } from "./useSetSyle";

import styles from "./gallery.module.css";
import { SectionUI } from "../section";
import { useMedia } from "../../../hooks/useMedia";

export const GalleryUI = forwardRef<HTMLUListElement, TGalleryUIProps>(
  ({ photos }, ref) => {
    const { isLarge } = useMedia();
    const ulStyle = useSetStyle();

    return (
      <SectionUI id="gallery" gap={isLarge ? 68 : 32}>
        <ul className={styles.gallery} style={ulStyle} ref={ref}>
          {photos.map(({ src, direction }, index) => (
            <GalleryItemUI key={index}>
              <PhotoUI src={src} direction={direction} />
            </GalleryItemUI>
          ))}
        </ul>
      </SectionUI>
    );
  },
);
