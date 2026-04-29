import { type CSSProperties, type FC } from "react";
import clsx from "clsx";

import { SubjectUI } from "../subject";

import type { TSubjectGroupUIProps } from "./types";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./subject-group.module.css";

export const SubjectGroupUI: FC<TSubjectGroupUIProps> = ({ persons }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const setCardStyle = (index: number) => {
    return {
      marginInlineEnd: clsx(
        isLarge && index === 0 && "2.40vw",
        isLarge && index === 1 && "6.04vw",
        isLarge && index === 2 && "1.98vw",
        isLarge && index === 5 && "3.33vw",
        isLarge && index === 6 && "2.29vw",
        isLarge && index === 7 && "1.04vw",
      ),
      marginBlockStart: clsx(
        isLarge && index === 0 && "5.52vw",
        isLarge && index === 1 && "7.50vw",
        isLarge && index === 3 && "9.69vw",
        isLarge && index === 4 && "-1.67vw",
        isLarge && index === 5 && "4.27vw",
        isLarge && index === 6 && "-0.52vw",
        isLarge && index === 8 && "4.27vw",
      ),
    } as CSSProperties;
  };

  const paddingInline = clsx(
    isLarge && "8.12vw",
    isDesktop && "7.83vw",
    isLaptop && "4.10vw",
    isTablet && "3.91vw",
    isMobile && "0",
  );

  return (
    <ul className={styles["subject-group"]} style={{ paddingInline }}>
      {persons.map(({ info, appearance }, index) => (
        <li style={setCardStyle(index)}>
          <SubjectUI
            info={info}
            appearance={{
              ...appearance,
              caption: `Изображение персонажа ${info.main} в исполнении ${info.extra}`,
            }}
          />
        </li>
      ))}
    </ul>
  );
};
