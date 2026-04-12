import type { FC } from "react";
import { Link } from "react-router-dom";

import { TextUI } from "../text";

import type { TCopirightUIProps } from "./types";

import { Typography } from "../../../utils/typography";

import styles from "./copiright.module.css";
import { Colors } from "../../../utils/colors";

export const CopyrightUI: FC<TCopirightUIProps> = ({ year }) => {
  return (
    <TextUI
      typography={Typography.Text_Onest_14}
      color={Colors.White100}
      className={styles.copiright}
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
