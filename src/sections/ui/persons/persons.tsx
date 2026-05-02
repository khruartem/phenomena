import type { FC } from "react";
import clsx from "clsx";

import { SectionUI } from "../section";
import { PersonsTopUI } from "../persons-top";
import { PersonGroups } from "../../../components/person-groups";

import personsBackgroundLarge from "../../../assets/persons_large.png";
import personsBackgroundDesktop from "../../../assets/persons_desktop.png";
import personsBackgroundLaptop from "../../../assets/persons_laptop.png";
import personsBackgroundTablet from "../../../assets/persons_tablet.png";
import personsBackgroundMobile from "../../../assets/persons_mobile.png";

import { useMedia } from "../../../hooks/useMedia";
import { usePxToVw } from "../../../hooks/usePxToVw";

import styles from "./persons.module.css";

export const PersonsUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const paddingBlockStart = usePxToVw({
    large: 210,
    desktop: 120,
    laptop: 120,
  });
  const paddingBlockEnd = usePxToVw({
    large: 330,
    desktop: 72,
    laptop: 72,
  });

  const backgroundImage = `url(${clsx(
    isLarge && personsBackgroundLarge,
    isDesktop && personsBackgroundDesktop,
    isLaptop && personsBackgroundLaptop,
    isTablet && personsBackgroundTablet,
    isMobile && personsBackgroundMobile,
  )}`;
  const backgroundSize = clsx(isLaptop && "116%");
  const backgroundPosition = clsx(isLaptop && "50% -4%");

  return (
    <SectionUI
      id="persons"
      paddingedBlock={false}
      paddingedInline={false}
      className={styles.persons}
      style={{
        paddingBlockStart,
        paddingBlockEnd,
        backgroundImage,
        backgroundSize,
        backgroundPosition,
      }}
    >
      <PersonsTopUI />
      <PersonGroups />
    </SectionUI>
  );
};
