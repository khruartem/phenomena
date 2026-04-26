import type { FC } from "react";
import clsx from "clsx";

import { PersonFrameUI } from "../person-frame";
import { PersonInfoUI } from "../person-info";

import type { TPersonUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./person.module.css";

export const PersonUI: FC<TPersonUIProps> = ({ info, appearance }) => {
  const { isLaptop, isTablet, isMobile } = useMedia();
  const mobileResolution = isLaptop || isTablet || isMobile;

  const { size, decorated } = appearance;

  return (
    <div
      className={clsx(
        styles["card-container"],
        styles[`card-container_${isMobile ? "S" : size}`],
        decorated && styles["card-container_decorated"],
        mobileResolution && styles["card-container_mobile"],
      )}
    >
      <PersonFrameUI
        appearance={{ ...appearance, size: mobileResolution ? "S" : size }}
      />
      <PersonInfoUI info={info} />
    </div>
  );
};
