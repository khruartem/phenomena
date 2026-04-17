import type { FC } from "react";
import clsx from "clsx";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../../../components/ui/section-title";
import { TextUI } from "../../../components/ui/text";

import type { TAboutUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./about.module.css";

export const AboutUI: FC<TAboutUIProps> = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return (
    <SectionUI className={styles.about} gap={isLarge ? 68 : 32}>
      <SectionTitleUI
        style={{
          paddingInlineStart: clsx(
            isLarge && "7.08vw",
            isDesktop && "7.17vw",
            isLaptop && "7.81vw",
            isTablet && "7.81vw",
            isMobile && "3.81vw",
          ),
        }}
      >
        {"О спектакле"}
      </SectionTitleUI>
      <div
        className={styles.about__text}
        // style={{ flexWrap: isTablet || isMobile ? "wrap" : "nowrap" }}
      >
        <div
          className={styles["text__line"]}
          style={{
            gap: clsx(
              (isLarge || isDesktop) && "24px",
              (isLaptop || isTablet || isMobile) && "20px",
            ),

            borderInline: "1px var(--fire) solid",
            paddingBlock: clsx(isDesktop && "6px", isLaptop && "8px"),
            paddingInline: clsx(
              isLarge && "7.08vw",
              isDesktop && "7.17vw",
              isLaptop && "7.81vw",
              isTablet && "7.81vw 0",
              isMobile && "3.81vw",
            ),
            flexWrap: isLarge || isDesktop || isLaptop ? "nowrap" : "wrap",
          }}
        >
          <TextUI
            as={"p"}
            typography={
              isLarge
                ? Typography.Text_Onest_400_20
                : Typography.Text_Onest_400_16
            }
            color={Colors.White80}
            style={{
              maxWidth: clsx(
                isLarge && "49.32ch",
                isDesktop && "43.8ch",
                isLaptop && "35.7ch",
              ),
            }}
          >
            {
              "По приглашению научного журнала в московскую гостиницу заселяется три человека со "
            }
            <TextUI typography={"inherit"} color={Colors.White100}>
              {"сверхъестественными"}
            </TextUI>
            {" способностями."}
          </TextUI>
          <TextUI
            as={"p"}
            typography={
              isLarge
                ? Typography.Text_KharkivTone_400_24
                : Typography.Text_KharkivTone_400_16
            }
            color={Colors.White80}
            style={{
              maxWidth: clsx(
                isLarge && "34.51ch",
                isDesktop && "36.77ch",
                isLaptop && "29.98ch",
              ),
            }}
          >
            {"Один из них "}
            <TextUI
              typography={"inherit"}
              color={Colors.Pudge}
              className={styles["text__block_style-1"]}
            >
              {"видит сквозь стены"}
            </TextUI>
            {" другой "}
            <TextUI typography={"inherit"} color={"inherit"}>
              <TextUI typography={"inherit"} color={Colors.White50}>
                {"обладает "}
                <TextUI
                  typography={"inherit"}
                  color={"inherit"}
                  className={styles["text__block_style-2"]}
                >
                  {"телепатией"}
                </TextUI>
              </TextUI>
            </TextUI>
            {" а третий "}
            <TextUI typography={"inherit"} color={Colors.Badge}>
              {" передвигает предметы "}
              <TextUI
                typography={"inherit"}
                color={"inherit"}
                className={styles["text__block_style-3"]}
              >
                {"силой"}
              </TextUI>
              {" мысли."}
            </TextUI>
          </TextUI>
        </div>
        <div
          className={styles["text__line"]}
          style={{
            gap: clsx(
              (isLarge || isDesktop) && "24px",
              (isLaptop || isTablet || isMobile) && "20px",
            ),
            paddingInline: clsx(
              isLarge && "7.08vw",
              isDesktop && "7.17vw 0",
              isLaptop && "7.81vw 0",
              isTablet && "7.81vw",
              isMobile && "3.81vw",
            ),
            flexWrap: isLarge || isDesktop || isLaptop ? "nowrap" : "wrap",
          }}
        >
          <TextUI
            as={"p"}
            typography={
              isLarge
                ? Typography.Text_Onest_400_20
                : Typography.Text_Onest_400_16
            }
            color={Colors.White80}
            style={{
              maxWidth: clsx(
                isLarge && "59.54ch",
                isDesktop && "53ch",
                isLaptop && "50.75ch",
              ),
            }}
          >
            {"Свела троицу "}
            <TextUI typography={"inherit"} color={Colors.White50}>
              {"Ларичева"}
            </TextUI>
            {
              ", которая годами ищет следующую ступень эволюции человечества. Пока учёные готовятся проведению тестов, выясняется, что у каждого из героев "
            }
            <TextUI
              typography={
                isLarge
                  ? Typography.Text_KharkivTone_400_24
                  : Typography.Text_KharkivTone_400_16
              }
              color={"inherit"}
            >
              {"есть свои "}
              <TextUI
                typography={"inherit"}
                color={Colors.Badge}
                className={styles["text__block_style-4"]}
              >
                {"мотивы"}
              </TextUI>
            </TextUI>
            {" дождаться комиссии…"}
          </TextUI>
          <TextUI
            typography={Typography.Text_Onest_300_14}
            color={Colors.White80}
            style={{
              maxWidth: clsx(isDesktop && "50.1ch", isLaptop && "32.27ch"),
            }}
          >
            {
              "Спектакль по одноимённой пьесе Г. Горина поднимает проблемы раскрытия таланта и исцеления мира путём решения собственных психологических проблем."
            }
          </TextUI>
        </div>
      </div>
      {/* <ul className={styles.about__text}>
        <li
          className={clsx(
            styles["bordered-left"],
            isLarge && [
              styles["paddinged-left-large"],
              styles["width-left-large"],
            ],
            isDesktop && [
              styles["paddinged-left-desktop"],
              styles["width-left-desktop"],
            ],
            isLaptop && [
              styles["paddinged-left-laptop"],
              styles["width-left-laptop"],
            ],
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
            typography={
              isLarge
                ? Typography.Text_Onest_400_20
                : Typography.Text_Onest_400_16
            }
            color={Colors.White80}
          >
            {
              "По приглашению научного журнала в московскую гостиницу заселяется три человека со "
            }
            <TextUI typography={"inherit"} color={Colors.White100}>
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
      </ul> */}
    </SectionUI>
  );
};
