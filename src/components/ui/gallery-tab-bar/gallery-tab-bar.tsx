import type { FC } from "react";

import { ArrowUI } from "../arrow";
import { Paginator } from "../../paginator";

import type { TGalleryTabBarUIProps } from "./types";

import styles from "./gallery-tab-bar.module.css";

export const GalleryTabBarUI: FC<TGalleryTabBarUIProps> = ({
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className={styles["gallery-tab-bar"]}>
      <ArrowUI direction={"left"} onClick={onClickLeft} />
      <Paginator />
      <ArrowUI direction={"right"} onClick={onClickRight} />
    </div>
  );
};
