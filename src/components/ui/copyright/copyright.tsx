import type { FC } from "react";
import { TextUI } from "../text";
import type { TCopirightUIProps } from "./types";
import { Link } from "react-router-dom";
import { Typography } from "../../../utils/typography";

export const CopyrightUI: FC<TCopirightUIProps> = ({ year }) => {
  return (
    <TextUI typography={Typography.Text_Onest_14}>
      {`${year} Создано под эгидой творческой экосистемы`}
      <Link to={"https://otkter.ru/"} target="_blank">
        {"«Открытая Территория»"}
      </Link>
    </TextUI>
  );
};
