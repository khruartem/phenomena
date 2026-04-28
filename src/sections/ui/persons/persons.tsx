import type { FC } from "react";
import clsx from "clsx";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../../../components/ui/section-title";
import { PersonTabBar } from "../../../components/person-tab-bar";
import { PersonGroups } from "../../../components/person-groups";

import personsBackgroundLarge from "../../../assets/persons_large.png";
import personsBackgroundDesktop from "../../../assets/persons_desktop.png";
import personsBackgroundLaptop from "../../../assets/persons_laptop.png";
import personsBackgroundTablet from "../../../assets/persons_tablet.png";
import personsBackgroundMobile from "../../../assets/persons_mobile.png";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./persons.module.css";

export const PersonsUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const personsBackground = clsx(
    isLarge && personsBackgroundLarge,
    isDesktop && personsBackgroundDesktop,
    isLaptop && personsBackgroundLaptop,
    isTablet && personsBackgroundTablet,
    isMobile && personsBackgroundMobile,
  );

  return (
    <SectionUI
      id="persons"
      paddingedBlock={false}
      paddingedInline={false}
      className={styles.persons}
      style={{
        paddingBlock: clsx(isLarge && "7.08vw 17.19vw"),
        backgroundImage: `url(${personsBackground})`,
      }}
    >
      <div
        className={styles.persons__top}
        style={{ width: clsx(isLarge && "72.08vw") }}
      >
        <SectionTitleUI className={styles.persons__title}>
          {"Действующие лица"}
        </SectionTitleUI>
        <PersonTabBar />
      </div>
      <PersonGroups />
    </SectionUI>
  );
};
