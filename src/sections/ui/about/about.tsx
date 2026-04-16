import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../../../components/ui/section-title";
import { TextUI } from "../../../components/ui/text";

import type { TAboutUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./about.module.css";
import clsx from "clsx";
import { useMedia } from "../../../hooks/useMedia";

export const AboutUI: FC<TAboutUIProps> = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return (
    <SectionUI>
      <SectionTitleUI>{"О спектакле"}</SectionTitleUI>
      <ul className={styles.about__text}>
        <li
          className={clsx(
            styles["bordered-left"],
            isLarge && styles["paddinged-left-large"],
            isDesktop && styles["paddinged-left-desktop"],
            isLaptop && styles["paddinged-left-laptop"],
            isTablet && [
              styles["paddinged-left-tablet"],
              styles["paddinged-right-tablet"],
              styles["bordered-right"],
            ],
            isMobile && [
              styles["paddinged-left-mobile"],
              styles["paddinged-right-mobile"],
              styles["bordered-right"],
            ],
          )}
        >
          <TextUI
            as={"p"}
            typography={Typography.Text_Onest_400_20}
            color={Colors.White80}
          >
            {
              "По приглашению научного журнала в московскую гостиницу заселяется три человека со "
            }
            <TextUI
              typography={Typography.Text_Onest_400_20}
              color={Colors.White100}
            >
              {"сверхъестественными"}
            </TextUI>
            {" способностями."}
          </TextUI>
        </li>
        <li
          className={clsx(
            styles["bordered-right"],
            isLarge && styles["paddinged-right-large"],
            isDesktop && styles["paddinged-right-desktop"],
            isLaptop && styles["paddinged-right-laptop"],
            isTablet && [
              styles["paddinged-right-tablet"],
              styles["paddinged-left-tablet"],
              styles["bordered-left"],
            ],
            isMobile && [
              styles["paddinged-right-mobile"],
              styles["paddinged-left-mobile"],
              styles["bordered-left"],
            ],
          )}
        >
          <TextUI
            as={"p"}
            typography={Typography.Text_KharkivTone_400_24}
            color={Colors.White80}
          >
            {"Один из них "}
            <TextUI
              typography={Typography.Text_KharkivTone_400_24}
              color={Colors.Pudge}
              className={styles["text__block_style-1"]}
            >
              {"видит сквозь стены"}
            </TextUI>
            {" , другой "}
            <TextUI
              typography={Typography.Text_KharkivTone_400_24}
              color={Colors.White50}
            >
              {"обладает "}
              <TextUI
                typography={Typography.Text_KharkivTone_400_24}
                color={Colors.White50}
                className={styles["text__block_style-2"]}
              >
                {"телепатией"}
              </TextUI>
            </TextUI>
            {" , а третий "}
            <TextUI
              typography={Typography.Text_KharkivTone_400_24}
              color={Colors.Badge}
            >
              {" передвигает предметы "}
              <TextUI
                typography={Typography.Text_KharkivTone_400_24}
                color={Colors.Badge}
                className={styles["text__block_style-3"]}
              >
                {"силой мысли."}
              </TextUI>
            </TextUI>
          </TextUI>
        </li>
        <li
          className={clsx(
            isLarge && styles["paddinged-left-large"],
            isDesktop && styles["paddinged-left-desktop"],
            isLaptop && styles["paddinged-left-laptop"],
            isTablet && styles["paddinged-left-tablet"],
            isMobile && [
              styles["paddinged-left-mobile"],
              styles["paddinged-right-mobile"],
            ],
          )}
        >
          <TextUI
            as={"p"}
            typography={Typography.Text_Onest_400_20}
            color={Colors.White80}
          >
            {"Свела троицу "}
            <span>{"Ларичева"}</span>
            {
              " ,которая годами ищет следующую ступень эволюции человечества. Пока учёные готовятся проведению тестов, выясняется, что у каждого из героев "
            }
            <span>
              {"есть свои"} <span>{"мотивы"}</span>
            </span>
            {" дождаться комиссии…"}
          </TextUI>
        </li>
        <li
          className={clsx(
            isLarge && styles["paddinged-right-large"],
            isTablet && styles["paddinged-left-tablet"],
            isMobile && [
              styles["paddinged-left-mobile"],
              styles["paddinged-right-mobile"],
            ],
          )}
        >
          <TextUI
            typography={Typography.Text_Onest_300_14}
            color={Colors.White80}
          >
            {
              "Спектакль по одноимённой пьесе Г. Горина поднимает проблемы раскрытия таланта и исцеления мира путём решения собственных психологических проблем."
            }
          </TextUI>
        </li>
      </ul>
    </SectionUI>
  );
};
