import type { FC } from "react";

import { PersonFrameUI } from "../person-frame";
import { PersonInfoUI } from "../person-info";

import type { TCommitteemanUIProps } from "./types";

import styles from "./committeeman.module.css";
import { useMedia } from "../../../hooks/useMedia";
import clsx from "clsx";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const CommitteemanUI: FC<TCommitteemanUIProps> = ({
  info,
  appearance,
}) => {
  const { isLarge, isDesktop, isLaptop } = useMedia();

  const maxWidth = usePxToVw(
    clsx(isLarge && 520, isDesktop && 368, isLaptop && 460),
  );
  const minHeight = usePxToVw(clsx(isLarge && 228, isDesktop && 268));

  return (
    <div className={styles.committeeman} style={{ maxWidth, minHeight }}>
      {appearance?.image && <PersonFrameUI appearance={appearance} />}
      <PersonInfoUI info={info} />
    </div>
  );
};
