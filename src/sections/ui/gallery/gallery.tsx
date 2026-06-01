import { type FC } from "react";

import { SectionUI } from "../section";
import { SectionTopUI } from "../../../components/ui/section-top";
import { GalleryTabBar } from "../../../components/gallery-tab-bar";
import { PhotoList } from "../../../components/photo-list";

import { useGalleryGap } from "./useGalleryGap";
import { useGalleryStyle } from "./useGalleryStyle";

import styles from "./gallery.module.css";

export const GalleryUI: FC = () => {
  const galleryGap = useGalleryGap();
  const galleryStyle = useGalleryStyle();

  return (
    <SectionUI
      id="gallery"
      gap={galleryGap}
      style={galleryStyle}
    >
      <SectionTopUI
        title="Фотоотчеты"
        tabBar={<GalleryTabBar />}
        className={styles.section__top_gallery}
      />
      <PhotoList />
    </SectionUI>
  );
};
