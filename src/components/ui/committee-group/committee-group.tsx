import type { FC } from "react";
import clsx from "clsx";

import { CommitteemanUI } from "../committeeman";

import type { TCommitteeGroupUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./committee-group.module.css";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const CommitteeGroupUI: FC<TCommitteeGroupUIProps> = ({ persons }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const paddingInline = clsx(
    isLarge && "8.12vw",
    isDesktop && "7.83vw",
    isLaptop && "4.10vw",
    isTablet && "3.91vw",
    isMobile && "0",
  );

  const gap = clsx(
    (isLarge || isDesktop) && "24px",
    (isLaptop || isTablet) && "20px",
    isMobile && "33.81vw",
  );

  // const rowGap = usePxToVw(clsx(isDesktop && 40));
  const rowGap = usePxToVw({ desktop: 40, laptop: 40 });

  const paddingBlockStart = clsx(isLarge && "3.13vw", isMobile && "18.10vw");

  return (
    <ul
      className={styles["committee-group"]}
      style={{
        paddingInline,
        gap,
        rowGap: isDesktop || isLaptop ? rowGap : gap,
        paddingBlockStart,
      }}
    >
      {persons.map(({ info, appearance }) => (
        <li>
          <CommitteemanUI
            info={info}
            appearance={{
              ...appearance,
              caption: `Изобажение состава спектакля: ${info.main}`,
            }}
          />
        </li>
      ))}
    </ul>
  );
};
