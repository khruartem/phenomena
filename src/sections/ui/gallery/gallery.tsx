import { forwardRef } from "react";

import { SectionUI } from "../section";
import { SectionTopUI } from "../../../components/ui/section-top";
import { GalleryTabBar } from "../../../components/gallery-tab-bar";
import { GalleryItemUI } from "../../../components/ui/gallery-item";
import { PhotoUI } from "../../../components/ui/photo";

import type { TGalleryUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";
import { useSetStyle } from "./useSetSyle";

import styles from "./gallery.module.css";

export const GalleryUI = forwardRef<HTMLUListElement, TGalleryUIProps>(
  ({ photos }, ref) => {
    const { isLarge } = useMedia();
    const ulStyle = useSetStyle();

    return (
      <SectionUI id="gallery" gap={isLarge ? 68 : 32}>
        <SectionTopUI title="Фотоотчеты" tabBar={<GalleryTabBar />} />
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
