import type { FC } from "react";
import clsx from "clsx";

import { CommitteemanUI } from "../committeeman";

import type { TCommitteeGroupUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";
import { usePxToVw } from "../../../hooks/usePxToVw";

import styles from "./committee-group.module.css";

export const CommitteeGroupUI: FC<TCommitteeGroupUIProps> = ({ persons }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  // const paddingInline = clsx(
  //   isLarge && "8.12vw",
  //   isDesktop && "7.83vw",
  //   isLaptop && "4.10vw",
  //   isTablet && "3.91vw",
  //   isMobile && "0",
  // );
  const paddingInline = usePxToVw({
    large: 156,
    desktop: 107,
    laptop: 42,
    tablet: 30,
    mobile: 16,
  });
  const gap = clsx(
    (isLarge || isDesktop) && "24px",
    (isLaptop || isTablet) && "20px",
    isMobile && "33.81vw",
  );
  const rowGap = usePxToVw({ desktop: 40, laptop: 40 });
  // const paddingBlockStart = clsx(isLarge && "3.13vw", isMobile && "18.10vw");
  const paddingBlockStart = usePxToVw({
    large: 68,
    desktop: 60,
    laptop: 56,
    tablet: 56,
    mobile: 76,
  });

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
