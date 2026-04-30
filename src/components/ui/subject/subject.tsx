import type { FC } from "react";
import clsx from "clsx";

import { PersonFrameUI } from "../person-frame";
import { PersonInfoUI } from "../person-info";

import type { TSubjectUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./subject.module.css";

export const SubjectUI: FC<TSubjectUIProps> = ({ info, appearance }) => {
  const { isLaptop, isTablet, isMobile } = useMedia();
  const mobileResolution = isLaptop || isTablet || isMobile;

  const { size, decorated } = appearance;

  return (
    <div
      className={clsx(
        styles["subject"],
        styles[`subject_${isMobile ? "S" : size}`],
        decorated && styles["subject_decorated"],
        mobileResolution && styles["subject_mobile"],
      )}
    >
      <PersonFrameUI
        appearance={{ ...appearance, size: mobileResolution ? "S" : size }}
      />
      <PersonInfoUI
        info={info}
        style={{ alignItems: mobileResolution ? "center" : undefined }}
      />
    </div>
  );
};
