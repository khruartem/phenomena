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
  ({ photos, onScroll }, ref) => {
    const { isLarge, isDesktop } = useMedia();
    const ulStyle = useSetStyle();

    return (
      <SectionUI
        id="gallery"
        gap={isLarge ? 68 : 32}
        paddingedInline={false}
        paddingedInlineStart
        paddingedInlineEnd={isLarge || isDesktop ? true : false}
      >
        <SectionTopUI
          title="Фотоотчеты"
          tabBar={<GalleryTabBar />}
          className={styles.section__top_gallery}
        />
        <ul
          id="photo-list"
          className={styles.gallery}
          style={ulStyle}
          ref={ref}
          onScrollEnd={onScroll}
        >
          {photos.map((photo, index) => (
            <GalleryItemUI key={index}>
              <PhotoUI {...photo} />
            </GalleryItemUI>
          ))}
        </ul>
      </SectionUI>
    );
  },
);
