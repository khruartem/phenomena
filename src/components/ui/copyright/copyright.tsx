import type { FC } from "react";
import { Link } from "react-router-dom";

import { TextUI } from "../text";

import type { TCopirightUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./copiright.module.css";

export const CopyrightUI: FC<TCopirightUIProps> = ({ year, style }) => {
  return (
    <TextUI
      typography={Typography.Text_Onest_300_14}
      color={Colors.White100}
      className={styles.copiright}
      style={style}
    >
      {`${year} Создано под эгидой творческой экосистемы `}
      <Link
        to={"https://otkter.ru/"}
        target="_blank"
        className={styles.copiright__link}
      >
        {"«Открытая Территория»"}
      </Link>
    </TextUI>
  );
};
