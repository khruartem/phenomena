import type { FC } from "react";
import clsx from "clsx";

import { SectionUI } from "../section";
import { TextUI } from "../../../components/ui/text";
import { ButtonUI } from "../../../components/ui/button";

import type { THeroUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";
import { openExternalLink } from "../../../utils/navigation";

import { useMedia } from "../../../hooks/useMedia";

import backgroundHeroLarge from "../../../assets/hero_large.png";
import backgroundHeroDesktop from "../../../assets/hero_desktop.png";
import backgroundHeroLaptop from "../../../assets/hero_laptop.png";
import backgroundHeroTablet from "../../../assets/hero_tablet.png";
import backgroundHeroMobile from "../../../assets/hero_mobile.png";

import styles from "./hero.module.css";

export const HeroUI: FC<THeroUIProps> = ({ externalLink }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return (
    <SectionUI
      paddingedBlock={false}
      paddingedInline={false}
      className={styles.hero}
      style={{
        backgroundImage: `url(${clsx(
          isLarge && backgroundHeroLarge,
          isDesktop && backgroundHeroDesktop,
          isLaptop && backgroundHeroLaptop,
          isTablet && backgroundHeroTablet,
          isMobile && backgroundHeroMobile,
        )})`,
        backgroundPosition: clsx(
          // isDesktop && "50% 40%",
          isMobile && "0 42%"
        ),
        backgroundSize: clsx(
          // isDesktop && "123% 98%",
          isMobile && "100%"
        ),
        paddingInline: clsx(isMobile && "14px"),
      }}
    >
      <TextUI
        as={"h2"}
        typography={
          isDesktop || isMobile
            ? Typography.Text_KharkivTone_400_16
            : Typography.Text_KharkivTone_400_24
        }
        color={Colors.White80}
        className={styles.hero__label}
        style={{
          // paddingBlockEnd: clsx(
          //   isLarge && "13.33vw",
          //   isDesktop && "12.88vw",
          //   isLaptop && "29.30vw",
          //   isTablet && "26.56vw",
          //   isMobile && "29.52vw",
          // ),
          // paddingBlockStart: clsx(
          //   isLarge && "4.5vw",
          //   isDesktop && "6vw",
          //   isLaptop && "22.7vw",
          //   isTablet && "18.7vw",
          //   isMobile && "19vw",
          // ),
          paddingBlock: clsx(
            isLarge && "4.5vw 13.33vw",
            isDesktop && "6vw 12.88vw",
            isLaptop && "22.7vw 29.30vw",
            isTablet && "18.7vw 26.56vw",
            isMobile && "19vw 29.52vw",
          ),
        }}
      >
        {"Фантастический "}
        <span className={styles.hero__label_decorated}>{"спектакль"}</span>
      </TextUI>
      <TextUI
        as={"h1"}
        typography={
          isDesktop || isMobile
            ? Typography.Text_Onest_400_16
            : Typography.Text_Onest_400_20
        }
        color={Colors.White80}
        className={styles.hero__title}
        style={{
          paddingBlockEnd: clsx(
            isLarge && "4.37vw",
            isDesktop && "2.64vw",
            isLaptop && "8.20vw",
            isTablet && "15.63vw",
            isMobile && "19.05vw",
          ),
          maxWidth: clsx(!isMobile && "48ch"),
        }}
      >
        <span className={styles.hero__title_colored}>
          {"Институт внедрения навыков (НИИВН)"}
        </span>
        {" — научная организация, занимающаяся поисками "}
        <span className={styles.hero__title_decorated}>{"феноменальных"}</span>
        {" явлений."}
      </TextUI>
      <ButtonUI
        variant={isMobile ? "secondary" : "primary"}
        onClick={() => openExternalLink(externalLink)}
      >
        {"Участвовать в комиссии"}
      </ButtonUI>
      <TextUI
        as={"p"}
        typography={Typography.Text_Onest_300_14}
        color={Colors.White80}
        className={styles.hero__text}
        style={{
          paddingBlockStart: clsx(
            isLarge && "1.25vw",
            isDesktop && "1.17vw",
            isLaptop && "2.34vw",
            isTablet && "3.13vw",
            isMobile && "4.76vw",
          ),
          maxWidth: clsx(!isMobile && "69ch"),
        }}
      >
        {"Открытые заседания называются "}
        <span className={styles.hero__text_decorated}>{"«Феномены»"}</span>
        {
          " , вы можете посетить их в указанный день. Заседания проходят в формате спектакля, "
        }
        <span className={styles.hero__text_colored}>
          {"продолжительность 2 часа с антрактом."}
        </span>
      </TextUI>
    </SectionUI>
  );
};
