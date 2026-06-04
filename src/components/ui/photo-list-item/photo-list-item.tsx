import type { FC } from "react";

import type { TPhotoListItemUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./photo-list-item.module.css";

export const PhotoListItemUI: FC<TPhotoListItemUIProps> = ({ children }) => {
  const photoListItemStyle = useStyle();

  return (
    <li className={styles["photo-list__item"]} style={photoListItemStyle}>
      {children}
    </li>
  );
};
